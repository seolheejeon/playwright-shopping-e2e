import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { USERS } from "../fixtures/credentials";

test.describe("Checkout negative validations", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await login.goto();
    await login.login(USERS.standard.username, USERS.standard.password);

    await products.addFirstItemToCart();          
    // await products.addItemToCartByTestId();  

    await products.openCart(); // 또는 await products.goToCart();

    await cart.assertOnCart();
    await cart.clickCheckout();
  });

  test("Checkout fails when First Name is empty", async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.fillInfo("", "Kim", "12345"); // fillInfo 안에서 Continue까지 누르는 버전 기준
    await checkout.assertErrorContains("First Name is required");
  });

  test("Checkout fails when Last Name is empty", async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.fillInfo("Seolhee", "", "12345");
    await checkout.assertErrorContains("Last Name is required");
  });

  test("Checkout fails when Postal Code is empty", async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.fillInfo("Seolhee", "Kim", "");
    await checkout.assertErrorContains("Postal Code is required");
  });
});
