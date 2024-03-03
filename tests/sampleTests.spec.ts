import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ToolsPage } from '../page-objects/toolsPage';
import { FormApplicationsPage } from '../page-objects/formsPage';
import { BecomeClient } from '../page-objects/becomeClient';
import { InboxPage } from '../page-objects/inboxPage';
import { DashboardPage } from '../page-objects/dashboardPage';
import { GoalsPage } from '../page-objects/goalsPage';
 
test.describe('suite', async () => {
    test.only('create portfolio', async ({ page }) => {
        test.setTimeout(150000);
        const login = new LoginPage(page);
        const toolsPage = new ToolsPage(page);
        await login.goto();
        await login.signInButton.click();
        await login.resourcesDropdown.click();
        await login.toolsdropdown.click();
        await page.mouse.down();
        await toolsPage.createPortfolioButton.click();
        await expect(toolsPage.createPortfolioText).toBeVisible();
        await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
    });

    test('invalid sign in', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loggedUser('loki', 'Qwerty1')
        await expect(loginPage.logInError).toBeVisible();
    });

    test('valid search form & applications', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const formAplicationsPage = new FormApplicationsPage(page);
        await loginPage.goto();
        await loginPage.resourcesDropdown.click();
        await formAplicationsPage.searchField.click();
        await (formAplicationsPage.searchInput.pressSequentially('application'));
        await (formAplicationsPage.searchButton.click());
        await expect(formAplicationsPage.applicationResult).toBeVisible();
    });

    test('check open an account link', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const becomeClient = new BecomeClient(page);
        await loginPage.goto();
        await loginPage.signInButton.click();
        await (loginPage.openAccountLink.click());
        await page.mouse.up();
        await expect(becomeClient.becomeClientText).toBeVisible();
    })

    test('invalid search form & applications', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const formAplicationsPage = new FormApplicationsPage(page);
        await loginPage.goto();
        await loginPage.resourcesDropdown.click();
        await formAplicationsPage.searchField.click();
        await (formAplicationsPage.searchInput.pressSequentially('rerrwww'));
        await (formAplicationsPage.searchButton.click());
        await expect(formAplicationsPage.searchError).toBeVisible();
    })

    test('creating a profile for RRSP account by using invalid email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const becomeClient = new BecomeClient(page);
        await loginPage.goto();
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.rrspOpenTransferButton.click();
        await becomeClient.rrspEmailAddressField.pressSequentially('test');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('creating a profile for TFSA account by using invalid email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const becomeClient = new BecomeClient(page);
        await loginPage.goto();
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.tfsaOpenTransferButton.click();
        await becomeClient.tfsaEmailAddressField.pressSequentially('thhgt');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('creating a profile for Non-Registered Investment Account by using invalid email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const becomeClient = new BecomeClient(page);
        await loginPage.goto();
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.iaOpenTransferButton.click();
        await becomeClient.iaEmailAddressField.pressSequentially('thhghg');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('check a body message', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        const dashboardPage = new DashboardPage(page);
        await loginPage.goto();
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlink.click();
        await inboxPage.messageTitle.click();
        await expect(inboxPage.expiryDate).toBeVisible();
        await inboxPage.messageTitle.click();
        await expect(inboxPage.expiryDate).toBeHidden();
    });

    test('check a body message Fr', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        await loginPage.goto();
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlinkFr.click();
        await inboxPage.messageTitleFr.click();
        await expect(inboxPage.expiryDateFr).toBeVisible();
        await inboxPage.messageTitleFr.click();
        await expect(inboxPage.expiryDateFr).toBeHidden();
    });

    test('check selecting messages Fr', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        await loginPage.goto();
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlinkFr.click();
        await inboxPage.selectChecks.click();
        await inboxPage.clearChecks.click();
        await inboxPage.deleteSelectedFr.isDisabled();
    });

    test('view all messages', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        const dashboardPage = new DashboardPage(page);
        await loginPage.goto();
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await page.mouse.move(10,5);
        await dashboardPage.viewAllMessagesButton.click();
        await expect(inboxPage.inboxHeader).toBeVisible();
    });

    test('view all messages Fr', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        const dashboardPage =new DashboardPage(page);
        await loginPage.goto();
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await page.mouse.move(10,5);
        await dashboardPage.viewAllMessagesButtonFr.click();
        await expect(inboxPage.inboxHeaderFr).toBeVisible(); 
    });

    test('check editing a target amount', async ({ page }) => {
        test.setTimeout(150000);
        const loginPage = new LoginPage(page);
        const inboxPage = new InboxPage(page);
        const dashboardPage = new DashboardPage(page);
        const goalsPage = new GoalsPage(page);
        await loginPage.goto();
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await dashboardPage.setYorGoalsButton.click();
        await goalsPage.viewDetailsGoal.click();
        await expect(goalsPage.associatedAccount).toBeVisible();
        await goalsPage.hideDetailsGoal.click();
        await expect(goalsPage.associatedAccount).toBeHidden();
    });
});

