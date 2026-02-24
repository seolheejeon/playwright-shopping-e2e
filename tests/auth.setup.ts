import { test, expect } from "@playwright/test";
import path from "path";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { USERS } from "../fixtures/credentials";

const authFile = path.resolve(__dirname, "../.auth/standard.json");

test("auth: save storageState (standard_user)", async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);
  await products.assertOnProducts();

  await page.context().storageState({ path: authFile });

  await page.goto("/inventory.html");
  await expect(page.locator(".title")).toHaveText("Products");
});