import { test, expect } from '@playwright/test';
import { AI } from '@zerostep/playwright';

test.describe('Página de Contato - Teste com ZeroStep AI', () => {
  test('Deve carregar a página e validar título com AI', async ({ page }) => {
    const ai = new AI(page);

    await ai.step('Abrir a página de contato');
    await page.goto('https://www.agrosys.com.br/contato');

    await ai.step('Verificar se o título da página contém "Contato"');
    const title = await page.title();
    await ai.verify(`O título da página deve conter a palavra "Contato"`);
    expect(title).toContain('Contato');

    await ai.step('Validar se o formulário está visível na página');
    const formVisible = await page.isVisible('form');
    expect(formVisible).toBeTruthy();
  });
});
