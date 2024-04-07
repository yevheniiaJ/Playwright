import { test, expect } from './fixture';
import { LoginPage } from '../page-objects/loginPage';
import { ToolsPage } from '../page-objects/toolsPage';
import { FormApplicationsPage } from '../page-objects/formsPage';
import { BecomeClient } from '../page-objects/becomeClient';
import { InboxPage } from '../page-objects/inboxPage';
import { DashboardPage } from '../page-objects/dashboardPage';
import { GoalsPage } from '../page-objects/goalsPage';

test.describe('suite', async () => {
    test('create portfolio', async ({ page, loginPage, toolsPage }) => {
        test.setTimeout(150000);
        await loginPage.resourcesDropdown.click();
        await loginPage.resourcesDropdown.click();
        await toolsPage.toolsdropdown.click();
        await page.mouse.down();
        await toolsPage.createPortfolioButton.click();
        await expect(toolsPage.createPortfolioText).toBeVisible();
    });

    test('invalid sign in', async ({ page, loginPage }) => {
        await loginPage.loggedUser('loki', 'Qwerty1')
        await expect(loginPage.logInError).toBeVisible();
    });

    test('valid search form & applications', async ({ page, loginPage, formApplicationsPage }) => {
        await loginPage.resourcesDropdown.click();
        await formApplicationsPage.searchField.click();
        await (formApplicationsPage.searchInput.pressSequentially('application'));
        await (formApplicationsPage.searchButton.click());
        await expect(formApplicationsPage.applicationResult).toBeVisible();
    });

    test('check open an account link', async ({ page, loginPage, becomeClient }) => {
        await loginPage.signInButton.click();
        await (loginPage.openAccountLink.click());
        await page.mouse.up();
        await expect(becomeClient.becomeClientText).toBeVisible();
    })

    test('invalid search form & applications', async ({ page, loginPage, formApplicationsPage }) => {
        await loginPage.resourcesDropdown.click();
        await formApplicationsPage.searchField.click();
        await (formApplicationsPage.searchInput.pressSequentially('rerrwww'));
        await (formApplicationsPage.searchButton.click());
        await expect(formApplicationsPage.searchError).toBeVisible();
    })

    test('creating a profile for RRSP account by using invalid email', async ({ page, becomeClient, loginPage }) => {
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.rrspOpenTransferButton.click();
        await becomeClient.rrspEmailAddressField.pressSequentially('test');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('creating a profile for TFSA account by using invalid email', async ({ page, becomeClient, loginPage }) => {
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.tfsaOpenTransferButton.click();
        await becomeClient.tfsaEmailAddressField.pressSequentially('thhgt');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('creating a profile for Non-Registered Investment Account by using invalid email', async ({ page, becomeClient, loginPage }) => {
        await becomeClient.mainBecomeClientButton.click();
        await becomeClient.iaOpenTransferButton.click();
        await becomeClient.iaEmailAddressField.pressSequentially('thhghg');
        await expect(becomeClient.errorEmailField).toBeVisible();
    })

    test('check a body message', async ({ page, loginPage, inboxPage, dashboardPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlink.click();
        await inboxPage.messageTitle.click();
        await expect(inboxPage.expiryDate).toBeVisible();
        await inboxPage.messageTitle.click();
        await expect(inboxPage.expiryDate).toBeHidden();
    });

    test('check a body message Fr', async ({ page, loginPage, inboxPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlinkFr.click();
        await inboxPage.messageTitleFr.click();
        await expect(inboxPage.expiryDateFr).toBeVisible();
        await inboxPage.messageTitleFr.click();
        await expect(inboxPage.expiryDateFr).toBeHidden();
    });

    test('check selecting messages Fr', async ({ page, loginPage, inboxPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await inboxPage.inboxlinkFr.click();
        await inboxPage.selectChecks.click();
        await inboxPage.clearChecks.click();
        await inboxPage.deleteSelectedFr.isDisabled();
    });

    test('view all messages', async ({ page, loginPage, inboxPage, dashboardPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await page.mouse.move(10, 5);
        await dashboardPage.viewAllMessagesButton.click();
        await expect(inboxPage.inboxHeader).toBeVisible();
    });

    test('view all messages Fr', async ({ page, loginPage, inboxPage, dashboardPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUserFr('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeaderFr).toBeVisible({ timeout: 100000 });
        await page.mouse.move(10, 5);
        await dashboardPage.viewAllMessagesButtonFr.click();
        await expect(inboxPage.inboxHeaderFr).toBeVisible();
    });

    test('check editing a target amount', async ({ page, loginPage, inboxPage, dashboardPage, goalsPage }) => {
        test.setTimeout(150000);
        await loginPage.loggedUser('loki', 'Qwerty1!');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 100000 });
        await dashboardPage.setYorGoalsButton.click();
        await goalsPage.viewDetailsGoal.click();
        await expect(goalsPage.associatedAccount).toBeVisible();
        await goalsPage.hideDetailsGoal.click();
        await expect(goalsPage.associatedAccount).toBeHidden();
    });
});

