import { test } from '@playwright/test';
import { ContatoPage } from '../support/pages/ContatoPage';

test.describe('Formulário de Contato', () => {
  test('Deve abrir e enviar mensagem com sucesso', async ({ page }) => {
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

  test('Deve manter o formulário visível se campos obrigatórios não forem preenchidos', async ({ page }) => {
    const contato = new ContatoPage(page);

    await contato.abrir();
    await contato.enviar();

    await contato.validarCamposObrigatorios();
  });
});
