import { test as base, expect } from '@playwright/test';

type ApiFixtures = {
  token: string;
};

export const test = base.extend<ApiFixtures>({
  token: async ({ request }, use) => {
    const response = await request.post(
      'https://restful-booker.herokuapp.com/auth',
      {
        data: {
          username: 'admin',
          password: 'password123'
        }
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeTruthy();

    await use(body.token);
  }
});

export { expect };