import { defineConfig } from '@playwright/test';
import { zerostepPlugin } from '@zerostep/playwright/plugin';

export default defineConfig({
  use: {
    baseURL: 'https://www.agrosys.com.br',
  },
  plugins: [zerostepPlugin()],
});