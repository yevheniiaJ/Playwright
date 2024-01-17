
import { expect, type Locator, type Page } from "@playwright/test";
export class LoginPage {
    readonly page: Page;
    readonly signInButton: Locator;
    readonly resourcesDropdown: Locator;
    readonly toolsdropdown: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly logInButton: Locator;
    readonly logInError: Locator;
    readonly openAccountLink: Locator;





    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator(`//a[@href='/client/main/index']/span[contains(text(), 'Sign In')]`);
        this.resourcesDropdown = page.locator('#item-3');
        this.toolsdropdown = page.locator(`//ul[@class='dropdown-menu']//a[@href='/tools']`);
        this.emailField = page.locator(`//input[@id='email']`);
        this.passwordField = page.locator(`//input[@id='password']`);
        this.logInButton = page.locator(`//input[@id='signIn']`);
        this.logInError = page.locator(`//h5`);
        this.openAccountLink = page.locator(`//a[contains (text(), 'Open an account')]`);



    }

    async goto() {
        await this.page.goto('https://www.phn.sterbc.com/');
    }
}