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

  async assertCartBadge(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
