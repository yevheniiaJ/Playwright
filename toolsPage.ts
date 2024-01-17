import { expect, type Locator, type Page } from "@playwright/test";
export class ToolsPage {
    readonly page: Page;

    readonly createPortfolioButton: Locator;
    readonly createPortfolioText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.createPortfolioButton = page.locator(`//button[contains(text(), 'Create portfolio')]`);
        this.createPortfolioText = page.locator(`//h1[contains(text(), 'Portfolio builder')]`)
    }
}