// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/scenarios',
  use: {
    baseURL: 'https://www.agrosys.com.br',
    trace: 'on-first-retry',
  },
});
