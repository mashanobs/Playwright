
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

    //Test - No hay ejemplo en la pagina
    test('Valido la columna Nombres de la tabla estática', async ({ page }) => {

      test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      })

      await test.step('Puedo validar los elementos para la columna Nombre de la tabla estática', async () => { // .$$eval es un selector CSS

        const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe']; // Creamos los elementos que queremos validar

        // Localiza las celdas de la segunda columna "Nombre"
        const celdasColumna = await page.locator('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)');
        // Obtén los textos de todas las celdas como un array de strings
        const columnaNombres = await celdasColumna.allTextContents();
        //2da forma en una linea
        //const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent)); //Conviertes los elementos es una array de strings

        // Capturo a la tabla con un locator para poder sacarle screenshot 
        const tabla = await page.locator('h2:has-text("Tabla estática") + table'); 
        //Saca una screen y la adjunta aunque el caso pase.
        await test.info().attach('screenshot', {
          body: await tabla.screenshot(),
          contentType: 'image/png',
        })
        
        expect(columnaNombres).toEqual(nombresEsperados); // se compara el array de la tabla con el que nosotros queremos validar
      })
    })

    test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {
      await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      })

      await test.step('Valido que los valores cambiaron al hacer un reload a la web', async () => {
        //Creamos un arreglo con todos los valores de la tabla dinámica
        const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
        console.log(valoresTablaDinamica);

        //Hacemos una recarga para que cambien los valores
        await page.reload();

        //Creamos un segundo arreglo con los valores luego de la recarga
        const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
        console.log(valoresPostReload);

        //Validamos que todos los valores cambiaron para cada celda.
        expect(valoresTablaDinamica).not.toEqual(valoresPostReload);

      })
    })
  })
})();