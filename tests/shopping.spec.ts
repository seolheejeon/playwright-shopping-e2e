import { test, expect } from '@playwright/test';

test('[E2E] Cart - add item increments badge', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('.title')).toHaveText('Products');

  // add item (backpack)
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // assert cart badge
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
