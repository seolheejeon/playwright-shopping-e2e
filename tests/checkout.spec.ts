import { test, expect } from '@playwright/test';

test('[E2E] Checkout - completes after adding item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('.title')).toHaveText('Products');

  // add item
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // go to cart
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.title')).toHaveText('Your Cart');

  // checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

  // fill info
  await page.locator('[data-test="firstName"]').fill('Seolhee');
  await page.locator('[data-test="lastName"]').fill('Kim');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  // finish
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
  await expect(page.locator('.complete-header')).toContainText('Thank you');
});
