import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Página de Contato - Teste com ZeroStep AI', () => {
  test('Validação com AI do título e texto principal', async ({ page }) => {
    await page.goto('https://www.agrosys.com.br/contato', { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');

    // Usando ZeroStep AI corretamente (sem instanciar)
    await ai.step('Validar se o título contém "Contato"', async () => {
      const title = await page.title();
      expect(title).toContain('Contato');
    });

    await ai.step('Verificar se há texto sobre contato comercial', async () => {
      const textoContato = page.locator('text=/contato/i');
      await expect(textoContato).toBeVisible();
    });
  });
});
