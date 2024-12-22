
import { test, Browser, Page, expect } from '@playwright/test';
import { SandboxPage } from './pages/sandboxPages';
(async () => {
  let browser: Browser;
  let page: Page;

  let textoAEscribir = 'Estoy aprendiendo Playwright';

  test.describe('Acciones en el Automation Sandbox', () => {
    let sandbox: SandboxPage;
  
    test.beforeEach(async ({ page }) => {
      // Inicializamos la página sandbox antes de cada test
      sandbox = new SandboxPage(page); 
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    });

    //Test
    test('Lleno un campo de texto en Automation Sandbox', async ({ page }) => {

      test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      })

      await test.step('Puedo ingresar texto en el campo Un Aburrido Texto', async () => {

        //Validacion
        await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toBeEditable();
        await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir);

        //Validacion
        await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toHaveValue(textoAEscribir); 
        //ToHaveValue pide el valor exacto que se introduce en el campo de texto
        
      })
    })
  })
})();