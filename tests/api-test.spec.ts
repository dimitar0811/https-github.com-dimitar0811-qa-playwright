import { test, expect } from '@playwright/test';

test('GET API request', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
});

test('POST API request с български данни', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Тестов потребител',
        body: 'Проверка на API',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

  expect(body.title).toBe('Тестов потребител');
  expect(body.body).toBe('Проверка на API');
  expect(body.userId).toBe(1);
  expect(body.id).toBeTruthy();
});

test('PUT API request', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Променено заглавие',
        body: 'Променено съдържание',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.id).toBe(1);
  expect(body.title).toBe('Променено заглавие');
  expect(body.body).toBe('Променено съдържание');
  expect(body.userId).toBe(1);
});

test('DELETE API request', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body).toEqual({});
});

test('API chaining - POST then GET', async ({ request }) => {
  const postResponse = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Иван',
        lastname: 'Петров',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-05'
        },
        additionalneeds: 'Закуска'
      }
    }
  );

  expect(postResponse.status()).toBe(200);

  const postBody = await postResponse.json();

  console.log('POST response:', postBody);

  const bookingId = postBody.bookingid;

  expect(bookingId).toBeTruthy();

  const getResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

  console.log('GET response:', getBody);

  expect(getBody.firstname).toBe('Иван');
  expect(getBody.lastname).toBe('Петров');
  expect(getBody.totalprice).toBe(150);
  expect(getBody.depositpaid).toBe(true);
  expect(getBody.additionalneeds).toBe('Закуска');
});
