import { test, expect } from '../fixtures/api-auth';

test('authenticated API request', async ({ request, token }) => {
  const createResponse = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Тест',
        lastname: 'Потребител',
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-05'
        },
        additionalneeds: 'Закуска'
      }
    }
  );

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  expect(bookingId).toBeTruthy();

  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.firstname).toBe('Тест');
  expect(body.lastname).toBe('Потребител');
});