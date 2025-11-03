import { test, expect } from '@playwright/test';

test.describe('Página de Contato - Teste básico', () => {
  test('Deve carregar título e elementos principais', async ({ page }) => {
    await page.goto('https://www.agrosys.com.br/contato', { waitUntil: 'networkidle', timeout: 60000 });

    // Título da aba
    await expect(page).toHaveTitle(/Contato/);

    // Conteúdo principal
    await expect(page.locator('text=Fale Conosco')).toBeVisible();

    // Rodapé
    await expect(page.locator('text=©')).toBeVisible();
  });
});

test('Deve exibir o formulário de contato', async ({ page }) => {
    await page.goto('https://www.agrosys.com.br/contato');
    await expect(page.locator('form')).toBeVisible();
});

