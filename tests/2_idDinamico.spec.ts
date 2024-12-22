import { test, Browser, Page, expect } from '@playwright/test';
import { SandboxPage } from './pages/sandboxPages';

(async () => {
  let browser: Browser;
  let page: Page;

 test.describe('Acciones en el Automation Sandbox', () => {
   let sandbox: SandboxPage;
 
   test.beforeEach(async ({ page }) => {
     // Inicializamos la página sandbox antes de cada test
     sandbox = new SandboxPage(page); 
     await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
     
   });

    //Test
    test('Click en Botón ID Dinámico', async ({ page }) => {

      test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      })

      await test.step('Puedo hacer click en el botón con ID dinámico', async () => {
        await sandbox.botonDinamico_click(); //(POM)
        //await page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' }).click();

        //await botonIDDinamico.dblclick();
        //await botonIDDinamico.click({ button: 'right' });
        //await botonIDDinamico.click({ modifiers: ['Shift'] });
        //await botonIDDinamico.hover();

        //Validacion - Las esperas por defecto son de 5 segundos
        await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible();

      })
    })
  })
})();