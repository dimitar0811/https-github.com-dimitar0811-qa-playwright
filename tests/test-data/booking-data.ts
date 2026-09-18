export const bookingData = [
  {
    firstname: 'Иван',
    lastname: 'Петров',
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-10-01',
      checkout: '2026-10-05'
    },
    additionalneeds: 'Закуска'
  },
  {
    firstname: 'Мария',
    lastname: 'Иванова',
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin: '2026-11-01',
      checkout: '2026-11-05'
    },
    additionalneeds: 'Обяд'
  }
] as const;