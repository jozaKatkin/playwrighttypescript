import {BasePage} from "./base-page";


export class SimpleFormDemoPage extends BasePage {

    private userMessageField = this.page.locator("//input[@placeholder='Please enter your Message']");
    private getCheckedValueButton = this.page.locator("#showInput");
    private appearedMessageText = this.page.locator("#message");

    async enterMessageIntoField(textToInput: string) {
        await this.userMessageField.fill(textToInput);
    }

    async clickOnGetCheckedValueButton() {
        await this.getCheckedValueButton.click();
    }

    async getAppearedMessageText() {
        return await this.appearedMessageText.innerText();
    }
}