import {BasePage} from "./base-page";

export class InputFormSubmitPage extends BasePage {

    private submitButton = this.page.locator("//div[contains(@class, 'loginform')]//button[@type='submit' ]");
    private nameField = this.page.locator("//input[@id='name']");
    private emailField = this.page.locator("//input[@id='inputEmail4']");
    private passwordField = this.page.locator("//input[@id='inputPassword4']");
    private companyField = this.page.locator("//input[@id='company']");
    private websiteField = this.page.locator("//input[@id='websitename']");
    private countryDropdown = this.page.locator("//select[@name='country']");
    private cityField = this.page.locator("//input[@id='inputCity']");
    private addressField1 = this.page.locator("//input[@id='inputAddress1']");
    private addressField2 = this.page.locator("//input[@id='inputAddress2']");
    private stateField = this.page.locator("//input[@id='inputState']");
    private zipcodeField = this.page.locator("//input[@id='inputZip']");
    private successMessage = this.page.locator("//p[contains(@class, 'success-msg hidden')]");

    async clickOnSubmitButton() {
        await this.submitButton.waitFor({state: 'visible'});
        await this.submitButton.click();
    }

    async getValidationMessage(): Promise<string> {
        return await this.nameField.evaluate((field: HTMLInputElement) => field.validationMessage)
            .then((message) => message.toLowerCase());
    }
}