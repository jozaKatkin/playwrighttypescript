import {Page} from "@playwright/test";


export class BasePage {

    constructor(protected page: Page) {
    }

    async getUrl() {
        return this.page.url();
    }

    async waitFor(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState('load');
    }
}