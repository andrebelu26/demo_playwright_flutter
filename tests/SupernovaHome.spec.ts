import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.supernova.io/');
  await page.screenshot({ path: 'homepage.png' });
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.screenshot({ path: 'homepage_after_acc.png' });
});
test.describe('Validar Home de SuperNova', () => {
test('Ir a GetStarter', async ({ page }) => {
    await page.screenshot({ path: 'G_homepage.png' });
    await page.getByRole('link', { name: 'Get started', exact: true }).click(); 
    await page.screenshot({ path: 'getstarted.png' });
});
test('Ir a Request a Demo', async ({ page }) => {
    await page.screenshot({ path: 'd_homepage.png' });
    await page.getByRole('link', { name: 'Request a demo' }).first().click();
    await page.screenshot({ path: 'requestdemo.png' });
});
});