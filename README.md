# Playwright E2E Portfolio – Swag Labs Shopping Flow

![Playwright Tests](https://github.com/seolheejeon/playwright-shopping-e2e/actions/workflows/node.js.yml/badge.svg)
![Report to Pages](https://github.com/seolheejeon/playwright-shopping-e2e/actions/workflows/playwright-pages.yml/badge.svg)

Swag Labs(https://www.saucedemo.com) 기반으로 **로그인 → 장바구니 담기 → 체크아웃 완료** 핵심 구매 플로우를 Playwright로 E2E 자동화했다.  
Push 시 GitHub Actions에서 테스트가 자동 실행되고, 최신 HTML 리포트를 GitHub Pages로 배포한다.

## Live Test Report (GitHub Pages)
- ✅ https://seolheejeon.github.io/playwright-shopping-e2e/

## Tech Stack
- Playwright (`@playwright/test`)
- TypeScript
- GitHub Actions (CI)
- GitHub Pages (Report Hosting)

## Test Scenarios
1) **Login succeeds with standard_user**
- 유효 계정 로그인 후 Products 화면 진입 확인

2) **Add 1 item to cart shows badge 1**
- 상품 1개 담기 → cart badge 수량 `1` 확인

3) **Checkout completes after adding item**
- cart 진입 → checkout → 정보 입력 → 완료 화면/문구 확인

## Project Structure
```text
tests/
  login.spec.ts
  shopping.spec.ts
  checkout.spec.ts
playwright-report/        # 로컬 실행 후 생성(기본 설정)
.github/workflows/        # CI/Pages 배포 workflow
package.json
README.md
```

## How to Run (Local)
> 프로젝트 루트에서 실행
npm install
npx playwright install
npx playwright test


## View HTML report locally
npx playwright show-report

## CI/CD (GitHub Actions)
main 브랜치에 push 시 자동으로 npx playwright test 실행
테스트 결과 HTML report 생성 후 GitHub Pages로 배포
→ 위 Live Report 링크에서 최신 리포트 확인 가능

## Test Data / Target
Target: https://www.saucedemo.com/
User: standard_user
Password: secret_sauce

## Notes
안정적인 셀렉터를 위해 data-test, 클래스 기반 locator를 사용했다.
리포트는 로컬 확인용(show-report) + Pages(공유용) 두 방식으로 관리한다.

## Next Improvements (Roadmap) 
실패 스크린샷/트레이스 자동 첨부 (CI artifact)
Page Object Model(POM) 리팩토링
Negative TC 추가 (잘못된 계정/빈 값/경계값)
Flaky 방지: retry/timeout 전략 및 waiting 개선
 
