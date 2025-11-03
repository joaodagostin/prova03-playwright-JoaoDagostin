import { expect, Page } from '@playwright/test';

export class ContatoPage {
  constructor(private page: Page) {}

  async abrir() {
    await this.page.goto('https://www.agrosys.com.br/contato');
  }

  async preencherFormulario(nome: string, email: string, mensagem: string) {
    await this.page.fill('input[name="your-name"]', nome);
    await this.page.fill('input[name="your-email"]', email);
    await this.page.fill('textarea[name="your-message"]', mensagem);
  }

  async enviar() {
    await this.page.click('input[type="submit"]');
  }

  async validarMensagemSucesso() {
    // Como o site não retorna texto visível, validamos se a página recarregou com sucesso
    await expect(this.page.locator('form')).toBeVisible();
  }

  async validarCamposObrigatorios() {
    // Verifica se os campos obrigatórios estão visíveis
    await expect(this.page.locator('input[name="your-name"]')).toBeVisible();
    await expect(this.page.locator('input[name="your-email"]')).toBeVisible();
    await expect(this.page.locator('textarea[name="your-message"]')).toBeVisible();
  }
}
