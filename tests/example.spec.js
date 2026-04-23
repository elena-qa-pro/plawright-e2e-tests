const { test, expect } = require('@playwright/test');

test('Open Playwright site and click Get Started', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.click('text=Get started');

  await expect(page).toHaveURL(/docs/);
});