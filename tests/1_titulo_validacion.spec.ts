import { test, Browser, Page, expect } from '@playwright/test';
import { describe } from 'node:test';
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

    const secciones = [
      { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
      { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
      { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
      { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' }
      // Agrega más secciones si es necesario
    ];
    for (const seccion of secciones) {

      //Test
      test(`Validar redirección a la sección "${seccion.nombre}"`, async ({ page }) => {

        test.info().annotations.push({
            type:'Validacion de secciones con un for',
            description:'Validaremos 4 casos en uno solo utilizando el For'
        });

        await test.step(`Estando yo en la web principal www.freerangetesters.com`, async () => {
          page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle('Free Range Testers');
        });

        await test.step(`Cuando hago click en "${seccion.nombre}" del header`, async () => {
          //Estamos buscando un elemento con el rol de link (en este caso es una etiqueta <a>) y cuyo texto visible sea "Cursos".  
          page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
          await page.waitForURL(`**${seccion.url}`);
        });

        await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
        
          await expect(page).toHaveTitle(seccion.tituloEsperado); //<title>Cursos</title>

        });
      });
    }

  })


})(); 
