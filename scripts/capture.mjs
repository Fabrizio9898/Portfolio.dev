// Captura screenshots de un sitio deployado para el portfolio.
// Uso: node scripts/capture.mjs <slug> <url>
// Genera en public/projects/<slug>/: cover.webp, mobile.webp, mobile-full.webp
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const [slug, url] = process.argv.slice(2);
if (!slug || !url) {
  console.error("Uso: node scripts/capture.mjs <slug> <url>");
  process.exit(1);
}

const outDir = `public/projects/${slug}`;
await mkdir(outDir, { recursive: true });

// Scrollea toda la página para disparar lazy-load y animaciones on-scroll
async function warmUp(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 350));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2500);
}

async function shoot(viewport, deviceScaleFactor, isMobile) {
  const context = await browser.newContext({ viewport, deviceScaleFactor, isMobile, hasTouch: isMobile });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await warmUp(page);
  const viewportShot = await page.screenshot();
  const fullShot = isMobile ? await page.screenshot({ fullPage: true }) : null;
  await context.close();
  return { viewportShot, fullShot };
}

// Chrome real: el headless de Playwright no reproduce video H.264 (fondos de hero)
const browser = await chromium.launch({ channel: "chrome" });

const desktop = await shoot({ width: 1440, height: 900 }, 1, false);
await sharp(desktop.viewportShot).webp({ quality: 82 }).toFile(`${outDir}/cover.webp`);

const mobile = await shoot({ width: 390, height: 844 }, 2, true);
await sharp(mobile.viewportShot).webp({ quality: 82 }).toFile(`${outDir}/mobile.webp`);
// 585px de ancho (1.5x) mantiene páginas largas bajo el límite de 16383px de WebP
await sharp(mobile.fullShot).resize({ width: 585 }).webp({ quality: 75 }).toFile(`${outDir}/mobile-full.webp`);

await browser.close();
console.log(`Capturas guardadas en ${outDir}`);
