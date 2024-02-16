import { expect, type Locator, type Page } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly viewAllMessagesButton: Locator;
    readonly viewAllMessagesButtonFr: Locator;
    readonly setYorGoalsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewAllMessagesButton = page.locator(`//a[contains(text(), 'View all messages')]`);
        this.viewAllMessagesButtonFr = page.locator(`//a[contains(text(), 'Afficher tous les messages')]`);
        this.setYorGoalsButton = page.locator(`//a[contains(text(), 'Set your goals')]`)
    }
}