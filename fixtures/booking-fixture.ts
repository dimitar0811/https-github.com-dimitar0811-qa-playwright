import { test as base, expect } from '@playwright/test';
import { bookingData } from '../test-data/booking-data';

type BookingFixtures = {
  createBooking: (data: typeof bookingData[number]) => Promise<number>;
};

export const test = base.extend<BookingFixtures>({
  createBooking: async ({ request }, use) => {
    const createBooking = async (
      data: typeof bookingData[number]
    ): Promise<number> => {
      const response = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
          data
        }
      );

      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.bookingid).toBeTruthy();

      return body.bookingid;
    };

    await use(createBooking);
  }
});

export { expect };