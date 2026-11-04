// Graba videos promocionales del propio portfolio (scroll rápido) para redes.
// Uso: node scripts/record-promo.mjs <url> [outDir=promo] [theme=dark|light]
// Genera: promo-horizontal.mp4 (1920x1080, X/Facebook/LinkedIn)
//         promo-vertical.mp4   (1080x1920, Reels/Stories/TikTok)
import { chromium } from "playwright";
import { mkdtemp, rm, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const [url, outDir = "promo", theme = "dark"] = process.argv.slice(2);
if (!url) {
  console.error("Uso: node scripts/record-promo.mjs <url> [outDir] [dark|light]");
  process.exit(1);
}
await mkdir(outDir, { recursive: true });

const FPS = 30;
const formats = [
  { name: "horizontal", viewport: { width: 1280, height: 720 }, scale: 1.5, seconds: 12 },
  { name: "vertical", viewport: { width: 540, height: 960 }, scale: 2, seconds: 16 },
];

// Curva: arranque rápido, frena un poco en el medio para que se lea, y llega al final.
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const browser = await chromium.launch({ channel: "chrome" });

for (const f of formats) {
  const framesDir = await mkdtemp(join(tmpdir(), `promo-${f.name}-`));
  const ctx = await browser.newContext({
    viewport: f.viewport,
    deviceScaleFactor: f.scale,
    isMobile: f.name === "vertical",
    hasTouch: f.name === "vertical",
    colorScheme: theme,
  });
  await ctx.addInitScript((t) => {
    try { localStorage.setItem("theme", t); } catch {}
  }, theme);
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  // Oculta overlays que no son parte del sitio (badge de Netlify, toolbar de astro dev)
  await page.addStyleTag({
    content: "#nl-badge-frame, astro-dev-toolbar { display: none !important; }",
  });

  // Precarga lazy-load y dispara animaciones on-scroll
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);

  const maxScroll = await page.evaluate(
    () => document.documentElement.scrollHeight - window.innerHeight,
  );
  const total = Math.round(f.seconds * FPS);
  const holdStart = Math.round(1.2 * FPS); // hero quieto al principio
  const holdEnd = Math.round(1.5 * FPS); // contacto quieto al final

  for (let i = 0; i < total; i++) {
    const t = Math.min(Math.max((i - holdStart) / (total - holdStart - holdEnd), 0), 1);
    const y = Math.round(ease(t) * maxScroll);
    await page.evaluate(
      (y) =>
        new Promise((r) => {
          window.scrollTo({ top: y, behavior: "instant" });
          requestAnimationFrame(() => requestAnimationFrame(r));
        }),
      y,
    );
    await page.waitForTimeout(30);
    await page.screenshot({
      path: join(framesDir, `f${String(i).padStart(4, "0")}.jpg`),
      type: "jpeg",
      quality: 92,
    });
  }
  await ctx.close();

  const out = join(outDir, `promo-${f.name}.mp4`);
  execFileSync(
    "ffmpeg",
    ["-y", "-framerate", String(FPS), "-i", join(framesDir, "f%04d.jpg"),
     "-c:v", "libx264", "-crf", "20", "-preset", "slow", "-pix_fmt", "yuv420p",
     "-movflags", "+faststart", "-an", out],
    { stdio: "ignore" },
  );
  await rm(framesDir, { recursive: true, force: true });
  console.log(`✓ ${out} (${maxScroll}px de scroll en ${f.seconds}s)`);
}

await browser.close();
