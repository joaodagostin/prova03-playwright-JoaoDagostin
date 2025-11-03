import { expect, Page } from '@playwright/test';

export class ContatoPage {
  readonly page: Page;
  readonly url = 'https://www.agrosys.com.br/contato';

  constructor(page: Page) {
    this.page = page;
  }

  async abrir() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveTitle(/Contato/i);
  }

  async preencherFormulario(nome: string, email: string, mensagem: string) {
    // Usa seletores genéricos com fallback pra evitar falhas no CI
    await this.page.fill('input[name="your-name"], input[placeholder*="Nome"]', nome);
    await this.page.fill('input[name="your-email"], input[placeholder*="E-mail"]', email);
    await this.page.fill('textarea[name="your-message"], textarea', mensagem);
  }

  async enviar() {
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.click('button[type="submit"], input[type="submit"]'),
    ]);
  }

  async validarMensagemSucesso() {
    const sucesso = this.page.locator('text=mensagem foi enviada com sucesso');
    await expect(sucesso).toBeVisible({ timeout: 5000 });
  }

  async validarCamposObrigatorios() {
    // Caso o site não mostre erro de campo, validamos que o envio não aconteceu
    const erro = this.page.locator('text=campo obrigatório, text=obrigatório');
    await expect(erro.first()).toBeVisible({ timeout: 5000 });
  }
}
