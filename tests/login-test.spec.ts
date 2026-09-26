import { test } from '../fixtures/authenticated';

test('user cannot login with invalid password', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    'test@example.com',
    'WrongPassword123'
  );

  await loginPage.expectErrorVisible();
  await loginPage.expectLoginPageVisible();
});