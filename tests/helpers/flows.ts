import { test, Page } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { USERS } from "../../fixtures/credentials";

export async function loginAsStandard(page: Page) {
  const login = new LoginPage(page);

  await test.step("Go to login page", async () => {
    await login.goto();
  });

  await test.step("Login as standard_user", async () => {
    await login.login(USERS.standard.username, USERS.standard.password);
  });
}

export async function addFirstItemAndOpenCart(page: Page) {
  const products = new ProductsPage(page);

  await test.step("Add first item to cart", async () => {
    await products.addFirstItemToCart();
  });

  await test.step("Open cart", async () => {
    await products.openCart();
  });
}

export async function goToCheckout(page: Page) {
  const cart = new CartPage(page);

  await test.step("Verify cart page", async () => {
    await cart.assertOnCart();
  });

  await test.step("Click Checkout", async () => {
    await cart.clickCheckout();
  });
}
