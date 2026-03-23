/**
 * Usage: node scripts/screenshot.mjs <url> <name>
 * Example: node scripts/screenshot.mjs https://wealthyhood.com wealthyhood
 *
 * Captures a screenshot and generates responsive WebP images at
 * 640, 960, 1280, 1920 widths + a default fallback.
 * Output goes to public/projects/<name>-<width>w.webp
 */

import { chromium } from "playwright";
import sharp from "sharp";
import { join } from "path";
import { unlinkSync } from "fs";

const [url, name] = process.argv.slice(2);

if (!url || !name) {
  console.error("Usage: node scripts/screenshot.mjs <url> <name>");
  process.exit(1);
}

const OUT_DIR = "public/projects";
const WIDTHS = [640, 960, 1280, 1920];
const tmpPath = join(OUT_DIR, `${name}-tmp.png`);

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

console.log(`Capturing ${url}...`);
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(3000);

// Dismiss common cookie banners
for (const sel of [
  '[id*="cookie"] button',
  '[class*="cookie"] button',
  'button:has-text("Accept")',
  'button:has-text("OK")',
  'button:has-text("Αποδοχή")',
]) {
  try {
    const btn = page.locator(sel).first();
    if (await btn.isVisible({ timeout: 1000 })) {
      await btn.click();
      await page.waitForTimeout(500);
    }
  } catch {}
}

await page.waitForTimeout(1000);
await page.screenshot({ path: tmpPath, type: "png" });
await browser.close();

// Generate responsive WebP
for (const w of WIDTHS) {
  const out = join(OUT_DIR, `${name}-${w}w.webp`);
  await sharp(tmpPath).resize(w).webp({ quality: 80 }).toFile(out);
  console.log(`  ✓ ${out}`);
}

const defaultOut = join(OUT_DIR, `${name}.webp`);
await sharp(tmpPath).resize(1920).webp({ quality: 85 }).toFile(defaultOut);
console.log(`  ✓ ${defaultOut} (default)`);

unlinkSync(tmpPath);
console.log("Done!");
