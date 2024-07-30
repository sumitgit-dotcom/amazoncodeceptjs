
exports.AddToCart = class AddToCart {
    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('#add-to-cart-button');
      this.cartConfirmation = page.locator('.sw-atc-text');
      this.homePageLink = page.locator('#nav-logo-sprites');
      this.cartButton = page.locator('#nav-cart-count-container'); 
      this.cartProductTitle = page.locator('.sc-list-item-content .a-truncate-full'); 
    }
  
    async addToCart() {
      
      await this.page.waitForLoadState('networkidle');
      await this.addToCartButton.click();
  
     
      await this.cartConfirmation.waitFor({ state: 'visible', timeout: 5000 });
    }
  
    async goToHomePage() {
      
      await this.homePageLink.click();
  
      
      await this.page.waitForLoadState('networkidle');
    }
  
    async verifyCartContents(expectedProductName) {
    
      await this.cartButton.click();
      await this.page.waitForLoadState('networkidle');
  
      const cartProductTitle = this.cartProductTitle.first();
      await expect(cartProductTitle).toContainText(expectedProductName);
    }
  };
  