
import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly signInButton: Locator;
    readonly resourcesDropdown: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly logInButton: Locator;
    readonly logInError: Locator;
    readonly openAccountLink: Locator;
    readonly dashboardHeader: Locator;
    readonly languageDropdown: Locator;
    readonly frenchLanguage: Locator;
    readonly signInButtonFr: Locator;
    readonly dashboardHeaderFr: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator(`//a[@href='/client/main/index']/span[contains(text(), 'Sign In')]`);
        this.resourcesDropdown = page.locator('#item-3');
        this.emailField = page.locator(`//input[@id='email']`);
        this.passwordField = page.locator(`//input[@id='password']`);
        this.logInButton = page.locator(`//input[@id='signIn']`);
        this.logInError = page.locator(`//h5`);
        this.openAccountLink = page.locator(`//a[contains (text(), 'Open an account')]`);
        this.dashboardHeader = page.locator(`//h1[contains(text(), 'Dashboard')]`);
        this.languageDropdown = page.locator(`//span[contains(text() ,'Language')]`);
        this.frenchLanguage = page.locator(`//a[@id='language-fr']`);
        this.signInButtonFr = page.locator(`//a[@href='/client/main/index']//span[contains(text() ,'Ouvrir une session')]`);
        this.dashboardHeaderFr = page.locator(`//h1[contains(text(), 'Tableau de bord')]`)
    }

    async goto() {
        await this.page.goto('https://www.phn.com/');
    }

    async loggedUser(email: string, password: string) {
        await this.signInButton.click();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.logInButton.click();
    }

    async loggedUserFr(email: string, password: string) {
        await this.languageDropdown.click();
        await this.frenchLanguage.click();
        await this.signInButtonFr.click();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.logInButton.click();
    }
}
