import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { USERS } from "../fixtures/credentials";

test("Login succeeds with standard_user", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(USERS.standard.username, USERS.standard.password);

  await expect(page).toHaveURL(/inventory\.html/);
});

test("Login fails with locked_out_user shows locked message", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(USERS.locked.username, USERS.locked.password);

  await login.expectErrorContains("locked out");
});