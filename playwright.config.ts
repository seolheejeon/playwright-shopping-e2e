import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  // CI에서만 retry 1회, 로컬은 0회
  retries: process.env.CI ? 1 : 0,

  reporter: [['html', { open: 'never' }]],

  use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure',
    },

});
