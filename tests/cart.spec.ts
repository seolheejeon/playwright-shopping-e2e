import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { USERS } from "../fixtures/credentials";

test("Remove item from cart hides badge", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);
  await products.assertOnProducts();

  // 1) 상품 담기 + 배지 1 확인
  await products.addItemToCartByTestId();
  await products.assertCartBadge("1");

  // 2) Cart로 이동 + remove
  await products.goToCart();
  await cart.assertOnCart();
  await cart.removeFirstItem();

  // 3) 배지가 사라졌는지 확인 (0이 아니라 "요소가 없어짐"이 정상)
  const badge = page.locator(".shopping_cart_badge");
  await expect(badge).toHaveCount(0);
});
