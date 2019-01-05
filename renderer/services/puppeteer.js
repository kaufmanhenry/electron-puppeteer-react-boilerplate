import puppeteer from 'puppeteer';

/**
 * getPic(url)
 *
 * function
 *
 * Goes to the provided url paramter and takes a screenshot of that page.
 *
 * @param {String} url - A URL to provide of a website to screenshot.
 */
export default async function getPic(url) {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: 'google.png' });

  await browser.close();
}
