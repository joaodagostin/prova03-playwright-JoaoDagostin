import { test, expect } from '@playwright/test';

test.describe('Página de Contato - Teste básico', () => {
  test('Deve carregar título e links principais', async ({ page }) => {
    await page.goto('https://www.agrosys.com.br/contato', { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');

    // Valida título
    const title = await page.title();
    expect(title).toContain('Contato');

    // Verifica se existe link de WhatsApp ou telefone
    const telefoneVisivel = await page.locator('text=Fale').first().isVisible();
    expect(telefoneVisivel).toBeTruthy();

    // Verifica se existe o rodapé (footer)
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
