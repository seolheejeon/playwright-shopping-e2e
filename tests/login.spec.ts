import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { USERS } from "../fixtures/credentials";

test("Login succeeds with standard_user", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);
  await products.assertOnProducts();
});

test("Login fails with invalid password shows error", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(USERS.standard.username, "wrong_password");

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();

  await expect(error).toContainText("Username and password do not match");
});

test("Login fails with locked_out_user shows locked message", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(USERS.locked.username, USERS.locked.password);

  // saucedemo 고정 메시지
  await login.assertErrorContains("Sorry, this user has been locked out.");
});
