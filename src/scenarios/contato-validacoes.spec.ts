import { test } from '@playwright/test';
import { AI } from 'zerostep';

test.describe('Formulário de Contato - Teste com ZeroStep AI', () => {
  test('Validação automática do envio do formulário com AI', async ({ page }) => {
    const ai = new AI(page);

    await ai.step('Acesse a página de contato da Agrosys');
    await page.goto('https://www.agrosys.com.br/contato');

    await ai.step('Preencha o formulário de contato com dados válidos');
    await page.fill('#form-field-name', 'Usuário AI');
    await page.fill('#form-field-email', 'usuarioai@teste.com');
    await page.fill('#form-field-message', 'Mensagem gerada automaticamente com ZeroStep AI.');

    await ai.step('Envie o formulário e valide o resultado esperado');
    await page.click('button[type="submit"]');

    await ai.verify('A mensagem de confirmação deve ser exibida indicando sucesso no envio.');
  });
});
