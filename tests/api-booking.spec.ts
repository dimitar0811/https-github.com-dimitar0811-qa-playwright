import { test, expect } from '../fixtures/api-auth';

test('create, get, update and delete a booking', async ({ request, token }) => {
  // 1. POST - създаваме резервация
  const createResponse = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Dimitar',
        lastname: 'Test',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-05'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  expect(bookingId).toBeDefined();

  console.log('Created booking ID:', bookingId);

  // 2. GET - проверяваме резервацията
  const getResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

   expect(getBody.firstname).toBe('Dimitar');
   expect(getBody.lastname).toBe('Test');
   expect(getBody.totalprice).toBe(150);
   expect(getBody.depositpaid).toBe(true);
   expect(getBody.bookingdates.checkin).toBe('2026-10-01');
   expect(getBody.bookingdates.checkout).toBe('2026-10-05');
   expect(getBody.additionalneeds).toBe('Breakfast');

  // 3. PUT - променяме резервацията
  const updateResponse = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'Dimitar Updated',
        lastname: 'Test Updated',
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: '2026-10-02',
          checkout: '2026-10-06'
        },
        additionalneeds: 'Lunch'
      }
    }
  );

  expect(updateResponse.status()).toBe(200);
  expect(createResponse.headers()['content-type']).toContain('application/json');
  const updateBody = await updateResponse.json();

  expect(updateBody.firstname).toBe('Dimitar Updated');
  expect(updateBody.lastname).toBe('Test Updated');
  expect(updateBody.totalprice).toBe(200);

  // 4. DELETE - изтриваме резервацията
  const deleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(deleteResponse.status()).toBe(201);
});