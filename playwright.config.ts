import { defineConfig } from '@playwright/test';
import { zerostepPlugin } from '@zerostep/playwright/plugin';

let plugins = [];
try {
  // Evita erro quando o pacote não existe (ex: em CI limpo)
  const { zerostepPlugin } = require('@zerostep/playwright/plugin');
  plugins.push(zerostepPlugin());
} catch {
  console.warn('⚠️ Plugin @zerostep/playwright não encontrado — ignorando...');
}

export default defineConfig({
  use: {
    baseURL: 'https://www.agrosys.com.br',
<<<<<<< HEAD
    viewport: { width: 1366, height: 768 },
=======
>>>>>>> 51ec6cc142fb578c6c822abf22150074cfa55b5c
  },
<<<<<<< HEAD
  reporter: [['list'], ['html', { outputFolder: 'artifacts/report' }]],
  plugins,
=======
  plugins: [zerostepPlugin()],
>>>>>>> 51ec6cc142fb578c6c822abf22150074cfa55b5c
});