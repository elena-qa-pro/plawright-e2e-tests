class InventoryPage {
  constructor(page) {
    this.page = page;
    this.backpackAddButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addBackpackToCart() {
    await this.page.click(this.backpackAddButton);
  }

  getCartBadge() {
    return this.page.locator(this.cartBadge);
  }
}

module.exports = { InventoryPage };