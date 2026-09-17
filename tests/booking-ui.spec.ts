import { test, expect } from '@playwright/test';

test('open booking website', async ({ page }) => {
  await page.goto('https://restful-booker.herokuapp.com/');

  await expect(page).toHaveTitle(/Restful-Booker/);
  await expect(page.locator('body')).toContainText('Welcome to Restful-Booker');
  await expect(page.locator('body')).toContainText('API');
});