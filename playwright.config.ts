import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1, // CI에서 flaky 대비(원하면 0으로)
  reporter: [['html', { open: 'never' }]],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
