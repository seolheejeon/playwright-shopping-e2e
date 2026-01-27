import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { USERS } from "../fixtures/credentials";

test("Add 1 item to cart shows badge 1", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);

  await products.addItemToCartByTestId();     // 
  await products.assertCartBadge("1");        // 
  // await products.goToCart();               // 장바구니 이동이 시나리오에 필요하면 이 줄 추가
});
