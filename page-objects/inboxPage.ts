import { expect, type Locator, type Page } from "@playwright/test";

export class InboxPage {
    readonly page: Page;
    readonly inboxlink: Locator;
    readonly messageTitle: Locator;
    readonly expiryDate: Locator;
    readonly messageTitleFr: Locator;
    readonly expiryDateFr: Locator;
    readonly inboxlinkFr: Locator;
    readonly selectChecks: Locator;
    readonly clearChecks: Locator;
    readonly deleteSelectedFr: Locator;
    readonly inboxHeader: Locator;
    readonly inboxHeaderFr: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inboxlink = page.locator(`//span[contains(text(), 'Inbox')]`);
        this.messageTitle = page.locator(`//a[contains(text(), 'Test message EN')]`);
        this.expiryDate = page.locator(`//span[contains(text(), 'Expiry date')]`);
        this.messageTitleFr = page.locator(`//a[contains(text() ,'Test message FR')]`);
        this.expiryDateFr = page.locator(`//span[contains(text() ,'Date d’échéance')]`);
        this.inboxlink = page.locator(`//span[contains(text(), 'Boîte de réception')]`);
        this.selectChecks = page.locator(`//a[@id='selectChecks']`);
        this.clearChecks = page.locator(`//a[@id='clearChecks']`);
        this.deleteSelectedFr = page.locator(`//button[contains(text(), 'Supprimer ce qui a été sélectionné')]`);
        this.inboxHeader = page.locator(`//h1[contains(text(), 'Inbox')]`)
        this.inboxHeaderFr = page.locator(`//h1[contains(text(), 'Mon centre de messagerie')]`);
    }
}