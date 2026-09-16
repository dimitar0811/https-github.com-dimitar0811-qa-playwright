import { test, expect } from '../fixtures/booking-fixture';
import { bookingData } from '../test-data/booking-data';

for (const data of bookingData) {
  test(`GET booking - ${data.firstname} ${data.lastname}`, async ({ request, createBooking }) => {
    const bookingId = await createBooking(data);

    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log('Booking ID:', bookingId);
    console.log('Booking:', body);

    expect(body.firstname).toBe(data.firstname);
    expect(body.lastname).toBe(data.lastname);
    expect(body.totalprice).toBe(data.totalprice);
    expect(body.depositpaid).toBe(data.depositpaid);
  });
}