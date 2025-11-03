import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Página de Contato - Teste com ZeroStep AI', () => {
  test('Deve carregar a página e validar título com AI', async ({ page }) => {
    await ai.step('Abrir a página de contato', async () => {
      await page.goto('https://www.agrosys.com.br/contato');
    });

    await ai.step('Verificar se o título da página contém "Contato"', async () => {
      const title = await page.title();
      expect(title).toContain('Contato');
    });

    await ai.step('Validar se o formulário está visível na página', async () => {
      await expect(page.locator('form')).toBeVisible();
    });
  });
});
