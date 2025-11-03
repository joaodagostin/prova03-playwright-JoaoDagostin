import { test, expect } from '@playwright/test';

test.describe('Página de Contato - Teste básico', () => {
  test('Deve carregar e exibir elementos principais', async ({ page }) => {
    // Aumenta timeout e abre a página
    await page.goto('https://www.agrosys.com.br/contato', { timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');

    // Valida o título da aba
    const title = await page.title();
    expect(title).toContain('Contato');

    // Valida se o iframe do formulário aparece
    const iframe = page.locator('iframe');
    await expect(iframe).toBeVisible({ timeout: 10000 });

    // Valida se existe o botão "Enviar" (texto dentro do iframe)
    const frame = await (await iframe.elementHandle())?.contentFrame();
    const buttonExists = await frame?.locator('input[type="submit"]').isVisible();
    expect(buttonExists).toBeTruthy();
  });
});
