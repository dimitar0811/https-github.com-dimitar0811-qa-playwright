import { test } from '../fixtures/authenticated';

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath =
      `test-results/${testInfo.title}-${testInfo.project.name}.png`;

    await page.screenshot({
      path: screenshotPath
    });

    await testInfo.attach('page-screenshot', {
      path: screenshotPath
    });

    await testInfo.attach('test-log', {
      body: `Тест: ${testInfo.title}
Браузър: ${testInfo.project.name}
Статус: ${testInfo.status}`,
      contentType: 'text/plain',
    });
  }
});


test('authenticated user sees dashboard', async ({ dashboardPage }) => {
  await dashboardPage.expectDashboardVisible();
});

test('authenticated user sees welcome message', async ({ dashboardPage }) => {
  await dashboardPage.expectWelcomeMessageVisible();
});

test('authenticated user sees logout button', async ({ dashboardPage }) => {
  await dashboardPage.expectLogoutButtonVisible();
});

test('authenticated user can logout', async ({ dashboardPage, loginPage }) => {
  await dashboardPage.logout();
  await loginPage.expectLoginPageVisible();
});