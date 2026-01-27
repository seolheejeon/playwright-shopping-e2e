# Playwright E2E Portfolio – Swag Labs Shopping Flow

![Playwright Tests](https://github.com/seolheejeon/playwright-shopping-e2e/actions/workflows/node.js.yml/badge.svg)
![Report to Pages](https://github.com/seolheejeon/playwright-shopping-e2e/actions/workflows/playwright-pages.yml/badge.svg)

본 프로젝트는 데모 쇼핑 사이트(Swag Labs)를 대상으로 **로그인 → 장바구니 담기 → 체크아웃 완료**까지의 핵심 구매 플로우를 Playwright로 E2E 자동화한 포트폴리오입니다.  
Push 시 GitHub Actions에서 테스트가 자동 실행되며, 최신 HTML 리포트를 GitHub Pages로 배포하여 결과를 공유할 수 있도록 구성했습니다.

## Live Test Report (GitHub Pages)
- https://seolheejeon.github.io/playwright-shopping-e2e/

---

## Tech Stack
- Playwright (`@playwright/test`)
- TypeScript
- GitHub Actions (CI)
- GitHub Pages (HTML Report Hosting)

## Documents
- [Test Strategy](docs/01_test_strategy.md) : 테스트 전략(범위/우선순위/Flaky 방지/증거 수집)
- [Test Coverage](docs/02_test_coverage.md) : 기능 분해 및 커버리지 현황/확장 계획
- [Bug Report Samples](docs/03_bug_report_samples.md) : 버그 리포트 샘플(요약/재현/기대-실제/Severity-Priority/개선 제안)
- [Release Checklist](docs/04_release_checklist.md) : 배포 전/후 QA 체크리스트
- [Triage Rules](docs/05_triage_rules.md) : Severity/Priority 기준 및 트리아지 프로세스

---

## Test Scenarios
1) **Login succeeds with standard_user**  
- 유효 계정으로 로그인한 뒤 Products 화면 진입을 확인합니다.

2) **Add 1 item to cart shows badge 1**  
- 상품 1개를 장바구니에 담고 cart badge 수량이 `1`로 반영되는지 확인합니다.

3) **Checkout completes after adding item**  
- 장바구니 진입 → Checkout 진행 → 정보 입력 → 완료 화면(완료 문구)을 확인합니다.

---

## Project Structure
```text
pages/
  LoginPage.ts
  ProductsPage.ts
  CartPage.ts
  CheckoutPage.ts
fixtures/
  credentials.ts
tests/
  login.spec.ts
  shopping.spec.ts
  checkout.spec.ts
docs/
  01_test_strategy.md
.github/workflows/
  node.js.yml
  playwright-pages.yml
```
---

## How to Run (Local)
> 프로젝트 루트에서 아래 명령어를 실행합니다.
- npm install
- npx playwright install
- npx playwright test

## View HTML report locally
- npx playwright show-report

---

## Evidence (Failure Analysis)
> 테스트 실패 시 원인 분석을 위해 아래 산출물이 자동으로 생성됩니다.
- test-results/ : 스크린샷/비디오/트레이스 등 실행 산출물
- playwright-report/ : HTML 리포트

## Trace 확인
- px playwright show-trace test-results/**/trace.zip

---

## CI/CD (GitHub Actions)
- main 브랜치에 push 시 자동으로 npx playwright test 실행됩니다.
- 테스트 결과 HTML report 생성 후 GitHub Pages로 배포되며.
- 위 Live Test Report 링크에서 최신 리포트를 확인할 수 있습니다.

---

## Test Data / Target
- Target: https://www.saucedemo.com/
- User: standard_user
- Password: secret_sauce

---

## Notes
- 유지보수성과 안정성을 위해 Page Object Model(POM) 구조로 구성했습니다.
- locator는 가능한 한 안정적인 방식(data-test/고정 속성 등)을 우선 사용했습니다.

---

## Roadmap
- Negative TC 추가(잘못된 계정/빈 값/필수값 누락 등)
- 안정성 개선(retry/timeout/waiting 전략 정교화)
- CI에서 산출물(리포트/트레이스/스크린샷) 업로드/공유 방식 강화

---
 
## Highlights
- POM 적용으로 테스트 코드 중복을 줄이고 유지보수성을 개선했습니다.
- CI 실행 및 리포트 배포로 “실행 가능한 테스트 운영” 형태를 구성했습니다.
