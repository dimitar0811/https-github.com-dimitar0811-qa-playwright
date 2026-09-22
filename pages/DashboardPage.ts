import { Page, expect } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  readonly heading;
  readonly welcomeMessage;
  readonly logoutButton;

  constructor(page: Page) {
    this.page = page;

    this.heading = this.page.getByRole('heading', { name: 'Dashboard' });
    this.welcomeMessage = this.page.getByText('Welcome to your dashboard.');
    this.logoutButton = this.page.getByRole('button', { name: 'Logout' });
  }

  async expectDashboardVisible() {
    await expect(this.heading).toBeVisible({ timeout: 1000 });
  }

  async expectWelcomeMessageVisible() {
    await expect(this.welcomeMessage).toBeVisible();
  }

  async expectLogoutButtonVisible() {
    await expect(this.logoutButton).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async expectDashboardHidden() {
    await expect(this.heading).toBeHidden();
  }
}