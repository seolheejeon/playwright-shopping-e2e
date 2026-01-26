import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { USERS } from "../fixtures/credentials";

test("Checkout completes after adding item", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);
  await products.assertOnProducts();

  await products.addItemToCartByTestId();
  await products.goToCart();

  await checkout.startCheckout();
  await checkout.fillInfo("Seolhee", "Jeon", "12345");
  await checkout.finish();
  await checkout.assertComplete();
});
