import { Page, Locator, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator(".title");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async assertOnProducts() {
    await expect(this.title).toHaveText("Products");
  }

  async addItemToCartByTestId(itemTestId = "add-to-cart-sauce-labs-backpack") {
    await this.page.locator(`[data-test="${itemTestId}"]`).click();
  }

  // ✅ 추가 1) 첫 상품을 장바구니에 담기 (data-test="add-to-cart-..." 중 첫 번째)
  async addFirstItemToCart() {
    await this.page.locator('[data-test^="add-to-cart"]').first().click();
  }

  async assertCartBadge(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async goToCart() {
    await this.cartLink.click();
  }

  // ✅ 추가 2) 테스트에서 openCart()를 쓰고 있으니 alias로 하나 더 제공
  async openCart() {
    await this.goToCart();
  }
}
