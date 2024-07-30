
import { test, expect } from '@playwright/test';
import { Login } from '../../pages/Login';
import { ProductSearch } from '../../pages/ProductSearch';
import { AddToCart } from '../../pages/AddToCart';

test('Search for a product, add it to the cart, verify cart, and return to the home page on Amazon', async ({ page }) => {
  
  const login = new Login(page);
  const productSearch = new ProductSearch(page);
  const addToCart = new AddToCart(page);

  
  await login.gotoLogin();
  await login.login('rawatsumit14@gmail.com', 'Sumitrawat@123');

 
  const accountName = page.locator('#nav-link-accountList .nav-line-1');
  await expect(accountName).toContainText('Hello, Sumit');

  
  const productName = 'hp laptop';
  await productSearch.searchProduct(productName);

  
  const searchResults = page.locator('.s-main-slot .s-result-item');
  await expect(searchResults).toHaveCountGreaterThan(0);
  const firstResult = searchResults.first().locator('h2');
  await expect(firstResult).toContainText(productName);

 
  await productSearch.selectFirstProduct();

  
  const productTitle = page.locator('#productTitle');
  await expect(productTitle).toContainText('HP'); 

  
  await addToCart.addToCart();

  
  await page.goto('https://www.amazon.in/gp/cart/view.html');
  const cartProductTitle = page.locator('.sc-list-item-content .a-truncate-full');
  await expect(cartProductTitle).toContainText('HP');

  
  await addToCart.goToHomePage();

 
  const homePageSearchField = page.locator('#twotabsearchtextbox');
  await expect(homePageSearchField).toBeVisible();
});
