import { test,Browser, expect } from '@playwright/test';

let page1;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.supernova.io/');
  await page.screenshot({ path: 'homepage.png' });
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  const page1Promise = page.waitForEvent('popup');
 page1 = await page1Promise;
  await page1.getByPlaceholder('Enter your email').click();
  await page1.getByPlaceholder('Enter your email').fill('andreabeltranluque@gmail.com');
  await page1.getByPlaceholder('Enter your email').press('Tab');
  await page1.getByPlaceholder('Enter your password').fill('Andi1218');
  await page1.getByRole('button', { name: 'Sign in' }).click();
  test.slow;

  
});
test.describe('Logueo - Documentacion ', () => {

  test('Ir a Documentacion', async ({ page, }) => {
 
      await page1.getByRole('link', { name: 'Documentation' }).click();
    try {
      await page1.getByLabel('Page tree').getByRole('link', { name: 'Design tokens' }).click();
    } catch (error) {
      await page1.getByRole('button', { name: 'Foundations' }).click();
      await page1.getByLabel('Page tree').getByRole('link', { name: 'Design tokens' }).click();
    }
    await page1.getByRole('button', { name: 'H POC AB' }).click();
    await page1.getByRole('menuitem', { name: 'Sign out' }).click();
    await page.close();
    await page1.close();
  });

  test('Ir a Design Token', async ({page})=>{
    await page1.getByRole('link', { name: 'Design tokens' }).click();
    await page1.getByRole('link', { name: 'Colors' }).click();
    await page1.getByRole('link', { name: 'Typography' }).click();
    await page1.getByRole('link', { name: 'Opacity' }).click();
    await page1.getByRole('link', { name: 'Visibility' }).click();
    await page1.getByRole('link', { name: 'Space' }).click();
    await page1.getByRole('link', { name: 'Opacity' }).click();
    await page1.getByRole('button', { name: 'H POC AB' }).click();
    await page1.getByRole('menuitem', { name: 'Sign out' }).click();
    await page.close();
    await page1.close();
  });

  test('Ir a Search', async ({page})=>{
    await page1.getByRole('button', { name: 'Search ⌘K' }).click();
    await page1.getByPlaceholder('Type a command or search').click();
    await page1.getByPlaceholder('Type a command or search').fill('Search tokens');
    await page1.getByText('Search tokens...').click();
    await page1.getByRole('button').first().click();
    await page.close();
    await page1.close();
  });


});

