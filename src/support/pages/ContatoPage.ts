import { Page, expect } from '@playwright/test';

export class ContatoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async abrir() {
    await this.page.goto('https://www.agrosys.com.br/contato');
  }

  async preencherFormulario(nome: string, email: string, mensagem: string) {
    await this.page.fill('#form-field-name', nome);
    await this.page.fill('#form-field-email', email);
    await this.page.fill('#form-field-message', mensagem);
  }

  async enviar() {
    await this.page.click('button[type="submit"]');
  }

  async validarMensagemSucesso() {
    const msg = this.page.locator('.elementor-message');
    await expect(msg).toContainText(/mensagem foi enviada/i);
  }

  async validarCamposObrigatorios() {
    const erros = this.page.locator('.elementor-error');
    await expect(erros).toHaveCountGreaterThan(0);
  }
}
