import {BasePage} from "./base-page";
import {StringConstants} from "../constants/StringConstants";

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

    async fillNameFieldWithString(value: string) {
        await this.nameField.waitFor({state: 'visible'});
        await this.nameField.fill(value);
    }

    async fillEmailFieldWithString(value: string) {
        await this.emailField.waitFor({state: 'visible'});
        await this.emailField.fill(value);
    }

    async fillPasswordFieldWithString(value: string) {
        await this.nameField.waitFor({state: 'visible'});
        await this.passwordField.fill(value);
    }

    async fillCompanyFieldWithString(value: string) {
        await this.companyField.waitFor({state: 'visible'});
        await this.companyField.fill(value);
    }

    async fillWebsiteFieldWithString(value: string) {
        await this.websiteField.waitFor({state: 'visible'});
        await this.websiteField.fill(value);
    }

    async selectValueFromCountryDropdown(value: string) {
        await this.countryDropdown.waitFor({state: 'visible'});
        await this.countryDropdown.selectOption(value);
    }

    async fillCityFieldWithString(value: string) {
        await this.cityField.waitFor({state: 'visible'});
        await this.cityField.fill(value);
    }

    async fillFirstAddressFieldWithString(value: string) {
        await this.addressField1.waitFor({state: 'visible'});
        await this.addressField1.fill(value);
    }

    async fillSecondAddressFieldWithString(value: string) {
        await this.addressField2.waitFor({state: 'visible'});
        await this.addressField2.fill(value);
    }

    async fillStateFieldWithString(value: string) {
        await this.stateField.waitFor({state: 'visible'});
        await this.stateField.fill(value);
    }

    async fillZipcodeFieldWithString(value: string) {
        await this.zipcodeField.waitFor({state: 'visible'});
        await this.zipcodeField.fill(value);
    }

    async fillAllNecessaryFields() {
        await this.fillNameFieldWithString(StringConstants.NAME);
        await this.fillEmailFieldWithString(StringConstants.EMAIL);
        await this.fillPasswordFieldWithString(StringConstants.PASSWORD);
        await this.fillCompanyFieldWithString(StringConstants.COMPANY);
        await this.fillWebsiteFieldWithString(StringConstants.WEBSITE);
        await this.selectValueFromCountryDropdown(StringConstants.COUNTRY_VALUE)
        await this.fillCityFieldWithString(StringConstants.CITY);
        await this.fillFirstAddressFieldWithString(StringConstants.ADDRESS1);
        await this.fillSecondAddressFieldWithString(StringConstants.ADDRESS2);
        await this.fillStateFieldWithString(StringConstants.STATE);
        await this.fillZipcodeFieldWithString(StringConstants.ZIPCODE);
    }

    async getSuccessMessageText(): Promise<string | null> {
        await this.successMessage.waitFor({ state: 'visible'});
        return await this.successMessage.textContent();
    }
}