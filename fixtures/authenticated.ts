import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type AuthenticatedPages = {
  dashboardPage: DashboardPage;
  loginPage: LoginPage;
};

export const test = base.extend<AuthenticatedPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('user@test.com', 'Password123');

    await use(new DashboardPage(page));
  },
});