import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Página de Contato - Teste com ZeroStep AI', () => {
  test('Validação AI do título e texto principal', async ({ page }) => {
    await page.goto('https://www.agrosys.com.br/contato', { waitUntil: 'networkidle' });

    // Argumentos para o ZeroStep
    const aiArgs = { page, test, expect };

    // Passo 1: validar o título da página
    await ai('validar que o título da página contém a palavra "Contato"', aiArgs);

    // Passo 2: verificar se o texto "Fale Conosco" está visível
    await ai('verificar se o texto Fale Conosco está visível na página', aiArgs);

    // Passo 3: validar se existe um campo ou formulário de contato
    await ai('verificar se há um formulário de contato visível na página', aiArgs);
  });
});
