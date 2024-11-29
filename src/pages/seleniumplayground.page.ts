import {Page} from "@playwright/test";


export class SeleniumPlaygroundPage {



    private simpleFormDemoLink = "//a[contains(@href, 'simple-form-demo')]";
    private dragAndDropSlidersLink = "//a[contains(@href, 'drag-drop-range')]";
    private inputFormDemoLink = "//a[contains(@href, 'input-form-demo')]";

    constructor(private page: Page) {
    }

    async goToSimpleFormDemoPage() {
        await this.page.click(this.simpleFormDemoLink)
    }

}