

exports.ProductSearch = class ProductSearch {
    constructor(page) {
      this.page = page;
      this.searchField = page.getByRole('textbox', { name: 'Search' });
      this.searchButton = page.getByRole('button', { name: 'Go' });
      this.firstProductLink = page.locator('.s-main-slot .s-result-item a.a-link-normal');
    }
  
    async gotoHomePage() {
      
      await this.page.goto('https://www.amazon.in/');
    }
  
    async searchProduct(productName) {
      // Perform a search operation
      await this.searchField.fill(productName);
      await this.searchButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  
    async selectFirstProduct() {
      
      await this.firstProductLink.first().click();
      await this.page.waitForLoadState('networkidle'); 
    }
  }
  