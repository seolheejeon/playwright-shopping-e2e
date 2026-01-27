# Bug Report Samples

## BR-001 체크아웃 필수값 누락 시 안내가 충분히 구체적이지 않음 (샘플)

### 1) 요약 (Summary)
체크아웃 단계에서 필수 입력값(First Name)을 비운 상태로 진행할 경우, 사용자에게 제공되는 오류 안내가 충분히 구체적이지 않아 원인 파악이 어렵습니다.

### 2) 환경 (Environment)
- 서비스: 데모 쇼핑 플로우(로그인 → 장바구니 → 체크아웃)
- 브라우저: Chromium
- 테스트 타입: Manual 재현(UX 관점) / E2E 시나리오 기반 확인

### 3) 재현 절차 (Steps to Reproduce)
1. 로그인합니다.
2. 상품 1개를 장바구니에 담습니다.
3. Cart로 이동 후 Checkout을 시작합니다.
4. 정보 입력 화면에서 `First Name`을 비웁니다.
5. Continue를 클릭합니다.

### 4) 기대 결과 (Expected)
- 누락된 항목이 무엇인지(예: First Name) 명확히 안내합니다.
- 사용자가 즉시 수정할 수 있도록 해당 입력 필드와 오류 안내가 연결되어 표시됩니다.

### 5) 실제 결과 (Actual)
- 오류 안내가 표시되나, 어떤 항목이 누락되었는지 즉시 파악하기 어렵습니다.
- 오류 안내와 입력 필드의 연결성이 약합니다.

### 6) 영향도/우선순위 (Severity / Priority)
- Severity: Medium (체크아웃 진행이 막혀 사용자 경험에 영향)
- Priority: Medium (핵심 플로우에서 발생하므로 개선 권장)

### 7) 개선 제안 (Suggestion)
- 메시지를 “First Name is required”처럼 구체화합니다.
- 오류 메시지와 해당 입력 필드를 시각적으로 연결(필드 하이라이트/인라인 메시지 등)합니다.

### 8) 증거 (Evidence)
- (선택) Playwright trace/screenshot를 첨부하여 재현 근거를 남길 수 있습니다.
