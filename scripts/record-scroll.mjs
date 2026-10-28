// Graba un video corto de scroll suave de un sitio deployado.
// Cada frame se captura después de hacer scroll y esperar a que la página pinte,
// así respeta animaciones on-scroll y secciones "pinned" sin tirones.
// Uso: node scripts/record-scroll.mjs <slug> <url> [segundos=10]
// Genera en public/projects/<slug>/: scroll.webm, scroll.mp4, poster.webp
import { chromium } from "playwright";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const [slug, url, secondsArg] = process.argv.slice(2);
if (!slug || !url) {
  console.error("Uso: node scripts/record-scroll.mjs <slug> <url> [segundos]");
  process.exit(1);
}

const FPS = 30;
const SECONDS = Number(secondsArg ?? 10);
const HOLD = 0.8; // segundos quietos arriba y abajo
const outDir = `public/projects/${slug}`;
const framesDir = await mkdtemp(join(tmpdir(), `scroll-${slug}-`));

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

// Precarga lazy-load recorriendo la página una vez
await page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += 450) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 300));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2500);

const maxScroll = await page.evaluate(
  () => document.documentElement.scrollHeight - window.innerHeight,
);
const total = Math.round(SECONDS * FPS);
const holdFrames = Math.round(HOLD * FPS);

for (let i = 0; i < total; i++) {
  const t = Math.min(Math.max((i - holdFrames) / (total - 2 * holdFrames), 0), 1);
  const y = Math.round(easeInOut(t) * maxScroll);
  await page.evaluate(
    (y) =>
      new Promise((r) => {
        window.scrollTo({ top: y, behavior: "instant" });
        requestAnimationFrame(() => requestAnimationFrame(r));
      }),
    y,
  );
  await page.waitForTimeout(40);
  await page.screenshot({
    path: join(framesDir, `f${String(i).padStart(4, "0")}.jpg`),
    type: "jpeg",
    quality: 90,
  });
}
await browser.close();

const input = ["-y", "-framerate", String(FPS), "-i", join(framesDir, "f%04d.jpg"), "-vf", "scale=1280:-2"];
execFileSync("ffmpeg", [...input, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "38", "-row-mt", "1", "-an", `${outDir}/scroll.webm`], { stdio: "ignore" });
execFileSync("ffmpeg", [...input, "-c:v", "libx264", "-crf", "26", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", `${outDir}/scroll.mp4`], { stdio: "ignore" });
await sharp(join(framesDir, "f0000.jpg")).resize({ width: 1280 }).webp({ quality: 80 }).toFile(`${outDir}/poster.webp`);

await rm(framesDir, { recursive: true, force: true });
console.log(`Video guardado en ${outDir}/scroll.{webm,mp4}`);
