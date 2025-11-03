import { test, expect } from '@playwright/test';

test.describe('Página de Contato - Teste básico', () => {
  test('Deve carregar título e elementos principais', async ({ page }) => {
    // Abre a página e espera carregamento completo
    await page.goto('https://www.agrosys.com.br/contato', { waitUntil: 'networkidle', timeout: 60000 });

    // Valida título da aba
    await expect(page).toHaveTitle(/Contato/);

    // Verifica se o texto principal "Fale Conosco" está visível
    await expect(page.locator('text=Fale Conosco')).toBeVisible();

    // Verifica se há algum contato (telefone, e-mail ou botão WhatsApp)
    const contatoVisivel = await page
      .locator('text=/\(?\d{2}\)?\s?\d{4,5}-\d{4}/i, text=WhatsApp, text=E-mail')
      .first()
      .isVisible()
      .catch(() => false);
    expect(contatoVisivel).toBeTruthy();

    // Verifica se o rodapé (copyright) está visível
    await expect(page.locator('text=©')).toBeVisible();
  });
});
