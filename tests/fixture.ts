import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ToolsPage } from '../page-objects/toolsPage';
import { FormApplicationsPage } from '../page-objects/formsPage';
import { BecomeClient } from '../page-objects/becomeClient';
import { InboxPage } from '../page-objects/inboxPage';
import { DashboardPage } from '../page-objects/dashboardPage';
import { GoalsPage } from '../page-objects/goalsPage';

type Myfixtures = {
    loginPage: LoginPage;
    toolsPage: ToolsPage;
    formApplicationsPage: FormApplicationsPage;
    becomeClient: BecomeClient;
    inboxPage: InboxPage;
    dashboardPage: DashboardPage;
    goalsPage: GoalsPage;
}

export const test = base.extend<Myfixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    toolsPage: async ({ page }, use) => {
        const toolsPage = new ToolsPage(page);
        await use(toolsPage);
    },

    formApplicationsPage: async ({ page }, use) => {
        const formAplicationsPage = new FormApplicationsPage(page);
        await use(formAplicationsPage);
    },

    becomeClient: async ({ page }, use) => {
        const becomeClient = new BecomeClient(page);
        await use(becomeClient);
    },

    inboxPage: async ({ page }, use) => {
        const inboxPage = new InboxPage(page);
        await use(inboxPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    goalsPage: async ({ page }, use) => {
        const goalsPage = new GoalsPage(page);
        await use(goalsPage);
    },
})

export { expect } from '@playwright/test';