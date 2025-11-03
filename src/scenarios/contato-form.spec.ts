import { test } from '@playwright/test';
import { ContatoPage } from '../support/pages/ContatoPage';

test.describe('Formulário de Contato - Sucesso', () => {
  test('Deve enviar mensagem com sucesso', async ({ page }) => {
    const contato = new ContatoPage(page);

    await contato.abrir();
    await contato.preencherFormulario(
      'João Teste',
      'joao@teste.com',
      'Teste automatizado via Playwright.'
    );
    await contato.enviar();
    await contato.validarMensagemSucesso();
  });
});

test.describe('Formulário de Contato - Validações', () => {
  test('Deve exibir erro ao tentar enviar sem preencher campos obrigatórios', async ({ page }) => {
    const contato = new ContatoPage(page);

    await contato.abrir();
    await contato.enviar();
    await contato.validarCamposObrigatorios();
  });
});
