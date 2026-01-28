import { defineConfig } from "@playwright/test";

function makeRunId() {
  // Windows 파일명에 위험한 문자(: .) 제거
  return new Date().toISOString().replace(/[:.]/g, "-");
}

const runId = process.env.PW_RUN_ID || makeRunId();

// ✅ CI는 Pages 배포를 위해 항상 고정 폴더 사용 
// ✅ 로컬은 runId로 폴더 분리
const reportDir = process.env.CI ? "playwright-report" : `playwright-report/${runId}`;
const artifactsDir = process.env.CI ? "test-results" : `test-results/${runId}`;

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: process.env.CI ? 1 : 0,

  // ✅ test-results도 run별 분리 (스크린샷/비디오/trace 모이는 곳)
  outputDir: artifactsDir,

  reporter: [
    ["html", { open: "never", outputFolder: reportDir }],
    ["list"],
  ],

  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },
});
