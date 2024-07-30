// @ts-nocheck
import { test, expect } from'@playwright/test';
import{Login} from'../../pages/Login';


test('test', async ({ page }) => {  
  const loginpage = new Login(page)
  
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByLabel('Email or mobile phone number').fill('rawatsumit14@gmail.com');
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('S');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Sumitrawat@123');
  await page.getByLabel('Sign in').click();
  
});