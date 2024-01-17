import { expect, type Locator, type Page } from "@playwright/test";
export class FormApplicationsPage {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchButton: Locator;
    readonly applicationResult: Locator;
    readonly searchInput: Locator;
    readonly searchError: Locator;





    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator(`//ul[@class='dropdown-menu']//a[@href='/forms']`);
        this.searchInput = page.locator(`//input[@id='typeSearch']`);
        this.searchButton = page.locator(`//button[@id='clickSearch']`);
        this.applicationResult = page.locator(`//a[contains(text(), 'Application for a Social Insurance Number (SIN)')]`);
        this.searchError = page.locator(`//h5[@class='alert-header']`);
    }

}