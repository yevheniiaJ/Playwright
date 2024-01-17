import { expect, type Locator, type Page } from "@playwright/test";
export class BecomeClient {
    readonly page: Page;
    readonly becomeClientText: Locator;
    readonly mainBecomeClientButton: Locator;
    readonly rrspOpenTransferButton: Locator;
    readonly rrspEmailAddressField: Locator;
    readonly tfsaEmailAddressField: Locator;
    readonly iaEmailAddressField: Locator;
    readonly errorEmailField: Locator;
    readonly tfsaOpenTransferButton: Locator;
    readonly iaOpenTransferButton: Locator;




    constructor(page: Page) {
        this.page = page;
        this.becomeClientText = page.locator(`//h1[contains (text(), 'Become a Client')]`);
        this.mainBecomeClientButton = page.locator(`//li[@id='item-4']//a[@href='/become-client']`);
        this.rrspOpenTransferButton = page.locator(`//a[@id='openRRSP']`);
        this.rrspEmailAddressField = page.locator(`//input[@name='email1']`);
        this.tfsaEmailAddressField = page.locator(`//input[@name='email2']`);
        this.iaEmailAddressField = page.locator(`//input[@name='email4']`);
        this.errorEmailField = page.locator(`//span[@class='form-icon']`);
        this.tfsaOpenTransferButton = page.locator(`//a[@id='openTFSA']`);
        this.iaOpenTransferButton = page.locator(`//a[@id='openIA']`);

    }
}