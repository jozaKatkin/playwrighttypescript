import {Page} from "@playwright/test";
import {BasePage} from "./base-page";


export class SeleniumPlaygroundPage extends BasePage {



    private simpleFormDemoLink = "//a[contains(@href, 'simple-form-demo')]";
    private dragAndDropSlidersLink = "//a[contains(@href, 'drag-drop-range')]";
    private inputFormDemoLink = "//a[contains(@href, 'input-form-demo')]";


    async goToSimpleFormDemoPage() {
        await this.page.click(this.simpleFormDemoLink);
    }

    async goToDragAndDropPage() {
        await this.page.click(this.dragAndDropSlidersLink);
    }

}