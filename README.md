# QA Playwright Automation Project

Automated UI and API testing project built with **Playwright** and **TypeScript**.

The project demonstrates practical QA Automation techniques including UI testing, API testing, authentication, fixtures, Page Object Model, test data management, and CI execution with GitHub Actions.

## Technologies

* Playwright
* TypeScript
* Node.js
* Git
* GitHub Actions

## Test Coverage

### UI Testing

* Login and authentication
* Dashboard validation
* Welcome message validation
* Logout functionality
* Negative/validation scenarios
* Page Object Model implementation

### API Testing

* GET requests
* POST requests
* PUT requests
* DELETE requests
* API request chaining
* API authentication
* Authenticated API requests
* Create → Get → Update → Delete workflow
* Response status and body validation

## Project Structure

```text
qa-playwright/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── app/
│   ├── login.html
│   └── dashboard.html
│
├── fixtures/
│   ├── api-auth.ts
│   ├── authenticated.ts
│   ├── booking-fixture.ts
│   └── pages.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── test-data/
│   └── booking-data.ts
│
├── tests/
│   ├── api-auth-test.spec.ts
│   ├── api-booking.spec.ts
│   ├── api-test.spec.ts
│   ├── authenticated-test.spec.ts
│   ├── booking-fixture-test.spec.ts
│   └── booking-ui.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Architecture

The project uses several QA Automation practices:

* **Page Object Model** for UI page interactions
* **Playwright fixtures** for reusable test setup
* **API fixtures** for authentication
* **Test data separation** for reusable API test data
* **API chaining** for dependent requests
* **Multi-browser execution**
* **HTML test reports**
* **Failure screenshots and test attachments**
* **Continuous Integration with GitHub Actions**

## Browsers

Tests are configured to run against:

* Chromium
* Firefox
* WebKit

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/dimitar0811/https-github.com-dimitar0811-qa-playwright.git
cd https-github.com-dimitar0811-qa-playwright
npm ci
npx playwright install --with-deps
```

## Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/api-booking.spec.ts
```

Open the HTML test report:

```bash
npx playwright show-report
```

## CI/CD

The project uses **GitHub Actions** to automatically:

1. Install Node.js dependencies
2. Install Playwright browsers
3. Start the local test application
4. Execute the automated test suite
5. Generate the Playwright HTML report
6. Upload the test report as a GitHub Actions artifact

## Current Test Suite

The test suite contains **45 automated tests**, executed across Chromium, Firefox, and WebKit.

The project has been successfully executed locally and through GitHub Actions.

## Purpose

This project was created as a practical QA Automation portfolio project to demonstrate the ability to design, implement, execute, and maintain automated UI and API tests using Playwright and TypeScript.
