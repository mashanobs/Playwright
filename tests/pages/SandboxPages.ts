//(Page Object Model)
//En esta capa están las definiciones de los elementos webs y las acciones sobre ellos 

import { expect, type Locator, type Page } from '@playwright/test';
 
export class SandboxPage {
    readonly page: Page;
    readonly pastaCheckbox: Locator;
    readonly botonIDDinamico: Locator;
 
    constructor(page: Page) {
        //Definicion de elementos webs
        this.page = page;
        this.pastaCheckbox = page.getByLabel('Pasta 🍝'); //Test 4
        this.botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' }); //Test 2

    }
    //Definicion de las funciones sobre los elementos    
    async checkPasta() { // Test 4
        await this.pastaCheckbox.check();
    }

    async botonDinamico_click() { // Test 4
        await this.botonIDDinamico.click();
    }
} 