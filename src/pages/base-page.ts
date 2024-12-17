import {Page} from "@playwright/test";


export class BasePage {

    constructor(protected page: Page) {
    }

    async getUrl() {
        return this.page.url();
    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState('load');
    }
}