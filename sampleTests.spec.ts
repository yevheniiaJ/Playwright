'use strict';
import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ToolsPage } from '../page-objects/toolsPage';
import { FormApplicationsPage } from '../page-objects/forms&applicationsPage';
import { BecomeClient } from '../page-objects/becomeClient';
test.describe('suite', async () => {
    test('create portfolio', async ({ page }) => {
        const login = new LoginPage(page);
        const toolsPage = new ToolsPage(page);
        await login.goto();
        await login.signInButton.click();
        await login.resourcesDropdown.click();
        await login.toolsdropdown.click();
        await page.mouse.down();
        await toolsPage.createPortfolioButton.click();
        await expect(toolsPage.createPortfolioText).toBeVisible();
    });

    test('invalid sign in', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.signInButton.click();
        await (loginPage.emailField.fill('loki'));
        await (loginPage.passwordField.fill('Qwerty1'));
        await (loginPage.logInButton.click());
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
})