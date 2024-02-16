import { expect, type Locator, type Page } from "@playwright/test";

export class GoalsPage {
    readonly page: Page;
    readonly viewDetailsGoal: Locator;
    readonly associatedAccount: Locator;
    readonly hideDetailsGoal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewDetailsGoal = page.locator(`//div[1]/wpm-goal-detail-component/div[2]/a`);
        this.associatedAccount = page.locator(`//a[contains(text(), 'Spousal RRIF - 6649750')]`);
        this.hideDetailsGoal = page.locator(`//div[1]/wpm-goal-detail-component/div[2]/a`);
    }
}