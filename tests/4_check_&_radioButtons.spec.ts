import { test, Browser, Page, expect } from '@playwright/test';
import { SandboxPage } from './pages/sandboxPages';

test.describe('Acciones en el Automation Sandbox', () => {
  let sandbox: SandboxPage;

  test.beforeEach(async ({ page }) => {
    // Inicializamos la página sandbox antes de cada test
    sandbox = new SandboxPage(page); 
    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
  });

  // Test 1
  test('Lleno un campo de texto en Automation Sandbox', async ({ page }) => {
    test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
    })
    await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
      await sandbox.checkPasta();

      // Validación
      await expect(sandbox.pastaCheckbox, 'El checkbox no estaba seleccionado').toBeChecked();
    });
  });

  // Test 2
  test('Seleccionar Radio Buttons', async ({ page }) => {
    test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
    })
    await test.step('Puedo seleccionar el Radio Button para No', async () => {
      await page.getByLabel('No').check();

      // Validación
      await expect(page.getByLabel('No'), 'El radiobutton no estaba seleccionado').toBeChecked();
    });
  });
});
