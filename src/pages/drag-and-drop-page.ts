import {BasePage} from "./base-page";


export class DragAndDropPage extends BasePage {

    private defaultValue15Slider = this.page.locator("//div[@id='slider3']//input");
    private valueBoxElement = this.page.locator("//output[@id='rangeSuccess']");


    // async getCurrentSliderValue(): Promise<string | null> {
    //     await this.valueBoxElement.waitFor({ state: 'attached' });
    //     await this.valueBoxElement.waitFor({ state: 'visible' });
    //
    //     const value = await this.page.evaluate((element) => element.textContent, this.valueBoxElement);
    //
    //     return value ? String(value).trim() : null;
    // }

    async getCurrentSliderValue(): Promise<string | null> {
        await this.valueBoxElement.waitFor({ state: 'visible' });
        const innerHTML = await this.valueBoxElement.innerHTML();
        console.log('innerHTML:', innerHTML);
        return innerHTML?.trim() || null;
    }

    async setSliderValue(targetValue: string) {
        await this.defaultValue15Slider.fill(targetValue);
        await this.defaultValue15Slider.dispatchEvent('input');
    }
}