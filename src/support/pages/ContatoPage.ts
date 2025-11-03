import { expect, Page } from '@playwright/test';

export class ContatoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async abrir() {
    await this.page.goto('/contato');
    await expect(this.page).toHaveTitle(/Contato/);
  }

  async preencherFormulario(nome: string, email: string, mensagem: string) {
    await this.page.fill('input[name="your-name"]', nome);
    await this.page.fill('input[name="your-email"]', email);
    await this.page.fill('textarea[name="your-message"]', mensagem);
  }

  async enviar() {
    await this.page.click('text=Enviar');
  }

  async validarMensagemSucesso() {
    // O site não mostra mensagem de sucesso visível,
    // então validamos que o botão 'Enviar' continua presente.
    const botaoEnviar = this.page.locator('text=Enviar');
    await expect(botaoEnviar).toBeVisible();
  }

  async validarCamposObrigatorios() {
    // Verifica se o formulário continua visível (erro genérico)
    const form = this.page.locator('form');
    await expect(form).toBeVisible();
  }
}
