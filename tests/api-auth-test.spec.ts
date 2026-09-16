import { test, expect } from '../fixtures/api-auth';

test('authenticated API request', async ({ request, token }) => {
  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking/1',
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.firstname).toBeTruthy();
  expect(body.lastname).toBeTruthy();
});