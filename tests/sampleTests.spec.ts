
import { test, expect } from '@playwright/test';
test('create portfolio', async ({ page }) => {
    await page.goto('https://www.phn.com/');
    await page.getByRole('link', { name: 'Resources ' }).click();
    await page.locator('#item-3').getByRole('link', { name: 'Tools' }).click();
    await page.mouse.down();
    await (page.getByRole('button', { name: 'Create portfolio' }).click());
    await expect(page.getByRole('heading', { name: 'Portfolio builder' })).toBeVisible();
});

test('invalid sign in', async ({ page }) => {
    await page.goto('https://www.phn.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await (page.getByLabel('Login ID / email address').fill('loki'));
    await (page.getByRole('textbox', { name: 'Password' }).fill('Qwerty1'));
    await (page.getByRole('button', { name: 'Login' }).click());
    await expect(page.getByText('ErrorSorry, there is a')).toBeVisible();
});

test('valid search form & applications', async ({ page }) => {
    await page.goto('https://www.phn.com/');
    await page.getByRole('link', { name: 'Resources ' }).click();
    await page.locator('#item-3').getByRole('link', { name: 'Forms & Applications' }).click();
    await (page.getByPlaceholder('Search', { exact: true }).pressSequentially('application'));
    await (page.getByRole('button', { name: '' }).click());
    await expect(page.getByRole('link', { name: 'Application for a Social' })).toBeVisible();
});
test('check open an account link', async ({ page }) => {
    await page.goto('https://www.phn.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await (page.getByRole('link', { name: 'Open an account' }).click());
    await page.mouse.up();
    await expect(page.getByText(`It's easy to start investing`)).toBeVisible();
})
test('invalid search form & applications', async ({ page }) => {
    await page.goto('https://www.phn.com/');
    await page.getByRole('link', { name: 'Resources ' }).click();
    await page.locator('#item-3').getByRole('link', { name: 'Forms & Applications' }).click();
    await (page.getByPlaceholder('Search', { exact: true }).pressSequentially('dsfsfsfsfs'));
    await (page.getByRole('button', { name: '' }).click());
    await expect(page.getByText('No results found We couldn\'t')).toBeVisible();
})



//Simple tests