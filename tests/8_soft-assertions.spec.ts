
import { test, Browser, Page, expect } from '@playwright/test';
(async () => {
  let browser: Browser;
  let page: Page;

  test.describe('Acciones en el Automation Sandbox', () => {
    
    //Test
    test('Ejemplo de Soft Assertions', async ({ page }) => {
      await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
          await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
      })
      await test.step('Valido que todos los elementos de los checkboxes son los correctos', async () => {
          await expect.soft(page.getByText('Pizza 🍕'), 'No se encontró el elemento Pizza 🍕').toBeVisible();
          await expect.soft(page.getByText('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa 🍔').toBeVisible();
          await expect.soft(page.getByText('Pasta 🍝'), 'No se encontró el elemento Pasta 🍝').toBeVisible();
          await expect.soft(page.getByText('Helado 🍧'), 'No se encontró el elemento Helado 🍧').toBeVisible();
          await expect.soft(page.getByText('Torta 🍰'), 'No se encontró el elemento Torta 🍰').toBeVisible();

          //Los soft.assertions sirven para validar formularios principalmente, al fallar no cortan con el flujo
      })

  })


  })
})();