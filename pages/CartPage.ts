import { expect, Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async goto() {
    // 필요하면 직접 cart 페이지로 가는 방법도 가능
    await this.page.goto("https://www.saucedemo.com/cart.html");
  }

  async assertOnCart() {
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async removeFirstItem() {
    // 가장 단순 버전: remove 버튼 중 첫 번째 클릭
    await this.page.locator('[data-test^="remove"]').first().click();
  }
}
