import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.supernova.io/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('button', { name: 'Features' }).click();

});
test.describe('Abrir Features', () => {

test('Ir a features-documentation', async ({ page }) => {
       await page.getByLabel('Features').getByRole('link', { name: 'Documentation' }).click();  
});
test('Ir a features-design_system', async ({ page }) => {
    await page.getByRole('link', { name: 'Design system management' }).click();
});
test('Ir a features-Code_automation', async ({ page }) => {
    await page.getByRole('link', { name: 'Code automation', exact: true }).click();
});
test('Ir a features-Design-token', async ({ page }) => {
    await page.getByRole('link', { name: 'Design tokens', exact: true }).click();
});
test('Ir a features-Integration', async ({ page }) => {
    await page.getByLabel('Features').getByRole('link', { name: 'Integrations' }).click();
});

});