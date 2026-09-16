import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;
  readonly errorMessage;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = this.page.getByLabel('Email');
    this.passwordInput = this.page.getByLabel('Password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.errorMessage = this.page.locator('#error');
  }

  async open() {
    await this.page.goto('http://localhost:3000/login.html');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
  async expectLoginPageVisible() {
  await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
}
}