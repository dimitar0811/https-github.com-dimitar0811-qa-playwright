import { test } from '../fixtures/authenticated';
import { invalidLoginUser } from '../test-data/user-data';

test('user cannot login with invalid password', async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
        invalidLoginUser.email,
        invalidLoginUser.password
    );

    await loginPage.expectErrorVisible();
    await loginPage.expectLoginPageVisible();
});