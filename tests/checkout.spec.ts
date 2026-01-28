import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { USERS } from "../fixtures/credentials";

test("Checkout fails when First Name is empty", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);
  await products.assertOnProducts();

  // Products → add to cart
  await products.addItemToCartByTestId();

  // Products → Cart
  await products.goToCart();
  await cart.assertOnCart();

  // Cart → Checkout
  await cart.clickCheckout();

  // Checkout 정보 입력 (First Name 비움) + Continue까지 수행
  await checkout.fillInfo("", "Kim", "12345");

  // 에러 메시지 확인
  await checkout.assertErrorContains("First Name is required");
});
