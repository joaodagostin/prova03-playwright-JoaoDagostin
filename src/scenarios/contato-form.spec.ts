import { test } from '@playwright/test';
import { ContatoPage } from '../support/pages/ContatoPage';

test.describe('Formulário de Contato - Sucesso', () => {
  test('Deve carregar e preencher o formulário', async ({ page }) => {
    const contato = new ContatoPage(page);

    await contato.abrir();
    await contato.preencherFormulario('João Teste', 'joao@teste.com', 'Teste automatizado via Playwright.');
    await contato.enviar();

    await contato.validarMensagemSucesso();
  });
});

test.describe('Formulário de Contato - Estrutura', () => {
  test('Deve exibir os campos obrigatórios do formulário', async ({ page }) => {
    const contato = new ContatoPage(page);

    await contato.abrir();
    await contato.validarCamposObrigatorios();
  });
});
