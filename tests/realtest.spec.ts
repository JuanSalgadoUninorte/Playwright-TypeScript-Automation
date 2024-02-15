import { test, expect } from '@playwright/test';

test('Añadir producto al carrito', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.hover(".single-products");
    await page.locator('.choose > .nav > li > a').first().click();
    await page.frameLocator('iframe[name="aswift_6"]').getByLabel('Close ad').click();
    await expect(page).toHaveURL("https://automationexercise.com/product_details/1");
    await page.locator('#quantity').fill("15");
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('heading', { name: 'Added!' }).click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
  });