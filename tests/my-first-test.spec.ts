import { validUser, invalidUser, emptyUser } from '../test-data';
import { test } from '../fixtures/pages';

test('valid login', async ({ loginPage, dashboardPage }) => {
 
  await loginPage.login(validUser.email, validUser.password);
  await dashboardPage.expectDashboardVisible();
});

test('invalid email', async ({ loginPage, dashboardPage }) => {
  
 await loginPage.login(invalidUser.email, validUser.password);

  await loginPage.expectErrorVisible();

  await dashboardPage.expectDashboardHidden();
  
});

test('invalid password', async ({ loginPage, dashboardPage }) => {
  
  await loginPage.login(validUser.email, invalidUser.password);

  await loginPage.expectErrorVisible();

await dashboardPage.expectDashboardHidden();

});

test('empty email and password', async ({ loginPage, dashboardPage }) => {

  await loginPage.login('', '');

  await loginPage.expectErrorVisible();

  await dashboardPage.expectDashboardHidden();

});