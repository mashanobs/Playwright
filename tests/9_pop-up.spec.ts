
import { test, Browser, Page, expect } from '@playwright/test';
(async () => {
  let browser: Browser;
  let page: Page;

  test.describe('Acciones en el Automation Sandbox', () => {

    //Test
    test('Validando dentro de un popup', async ({ page }) => {

      await test.step('Dado que navego al sandbox', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
      })

      await test.step('Cuando hago click en el botón popup', async () => {
        await page.getByRole('button', { name: 'Mostrar popup' }).click();
      })

      await test.step('Puedo validar un elemento dentro del popup', async () => {
        await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!'), 'No se encontró el pop-up').toHaveText('¿Viste? ¡Apareció un Pop-up!');
        await page.getByRole('button', { name: 'Cerrar' }).click();
      })
    })
  })
})();