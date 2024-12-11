import {BasePage} from "./base-page";


export class DragAndDropPage extends BasePage {

    private defaultValue15Slider = this.page.locator("//div[@id='slider3']//input");
    // private valueBoxElement = this.page.locator("//output[@id='rangeSuccess']");
    private valueBoxElement = this.page.locator("#rangeSuccess");

    async getCurrentSliderValue(): Promise<string | null> {
        await this.valueBoxElement.waitFor({ state: 'attached' });
        await this.valueBoxElement.waitFor({ state: 'visible' });
        return await this.valueBoxElement.textContent();
    }

    async setSliderValue(targetValue: string) {
        await this.defaultValue15Slider.fill(targetValue);
        await this.defaultValue15Slider.dispatchEvent('input');
    }
}