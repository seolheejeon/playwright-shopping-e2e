import { defineConfig, devices } from "@playwright/test";
import path from "path";

function makeRunId() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

const runId = process.env.PW_RUN_ID || makeRunId();

const reportDir = process.env.CI ? "playwright-report" : `playwright-report/${runId}`;
const artifactsDir = process.env.CI ? "test-results" : `test-results/${runId}`;

const authFile = path.resolve(__dirname, ".auth/standard.json");

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: process.env.CI ? 1 : 0,

  outputDir: artifactsDir,

  reporter: [
    ["html", { open: "never", outputFolder: reportDir }],
    ["list"],
  ],

  use: {
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "setup",
      testMatch: ["auth.setup.ts"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: authFile,
        screenshot: "off",
        video: "off",
        trace: "off",
      },
    },
    {
      name: "chromium",
      dependencies: ["setup"],
      testIgnore: ["auth.setup.ts"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: authFile,
      },
    },
  ],
});