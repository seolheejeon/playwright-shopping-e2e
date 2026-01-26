import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  // CI에서만 retry 1회, 로컬은 0회
  retries: process.env.CI ? 1 : 0,

  reporter: [['html', { open: 'never' }]],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // 로컬은 항상 trace, CI는 실패 후 재시도에서 trace 남김
    trace: process.env.CI ? 'on-first-retry' : 'on',
  },
});
