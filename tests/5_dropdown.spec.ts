
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
     test('Seleccionar un día en el dropdown de Días de la Semana', async ({ page }) => {

      await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
        await page.getByRole('button', { name: 'Día de la semana'}).click(); // se le hace un click para poder ver los elementos del dropdown 
        await page.getByRole('link', { name: 'Martes'}).click();
      })
    })


    //Test
    test('Validar elementos en el dropdown dinamicamente', async ({ page }) => {

      await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
        const deportes = ['Fútbol', 'Tennis', 'Basketball']

        for (let opcion of deportes) {
          const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);

          //Validacion
          if (element) {
            console.log(`La opción '${opcion}' está presente.`);
          } else {
            throw new Error(`La opción '${opcion}' no está presente.`); // hay que agregar "trow new Error" para que salte el error
          }
        }

      })
    })
  })
})();