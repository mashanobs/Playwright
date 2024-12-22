
import { test, Browser, Page, expect } from '@playwright/test';
(async () => {
  let browser: Browser;
  let page: Page;

  test.describe('Acciones en el Automation Sandbox', () => {

    //Test - No hay ejemplo en la pagina
    test.skip('Subir archivos', async ({ page }) => {

      await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
      })

      await test.step('Agrego archivos para ser subidos', async () => {
        await page.getByLabel('Upload file').setInputFiles('pathArchivo.pdf'); // 1 archivo
        await page.getByLabel('Upload file').setInputFiles(['pathArchivo.pdf', 'pathArchivo2.pdf', 'pathArchivo3.pdf']); // varios archivos
        await page.getByLabel('Upload file').setInputFiles([]); // vaciar la listas
      })
    })
    
    //Test - No hay ejemplo en la pagina
    test.skip('Hacer Drag and Drop de elementos', async ({ page }) => {

      await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
      })

      await test.step('Arrastrar un elemento A hacia otro elemento B', async () => {
        await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));
     
      })
    })
  })
})();