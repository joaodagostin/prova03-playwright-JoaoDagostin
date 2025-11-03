import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Página de Contato - Teste com ZeroStep AI', () => {
  test('Validação do título e elementos principais com AI', async ({ page }) => {
    await ai.step('Abrir a página de contato', async () => {
      await page.goto('/contato');
    });

    await ai.step('Verificar o título da página', async () => {
      const title = await page.title();
      expect(title).toContain('Contato');
    });

    await ai.step('Verificar se o formulário está visível', async () => {
      const formVisible = await page.isVisible('form');
      expect(formVisible).toBeTruthy();
    });
  });
});
