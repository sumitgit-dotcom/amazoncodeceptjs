

import { test, expect } from '@playwright/test';
import { Login } from '../../pages/Login';
import { ProductSearch } from '../../pages/ProductSearch';

test('Search for a product on Amazon', async ({ page }) => {
  const login = new Login(page);
  const productSearch = new ProductSearch(page);

  
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
});
