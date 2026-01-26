# Playwright E2E Portfolio - Swag Labs Shopping Flow

## Goal
Automate core e-commerce flow (Login → Add to Cart → Checkout) using Playwright.

## Tech Stack
- Playwright (@playwright/test)
- TypeScript
- HTML Report (playwright-report)

## Test Scenarios
- Login succeeds with valid user
- Add item to cart shows cart badge count
- Checkout completes successfully

## How to Run
'''bash
npm i
npx playwright install
npx playwright test
npx playwright show-report

