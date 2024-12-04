import {BasePage} from "./base-page";

export class CookieBotDialog extends BasePage {
    private dialog = '#CybotCookiebotDialog';
    private allowAllButton = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';


    async waitForDialogToBeVisible() {
        await this.page.waitForSelector(this.dialog, { state: 'visible' });
    }

    async clickAllowAllButton() {
        await this.page.click(this.allowAllButton);
    }

    async waitForDialogToBeHidden() {
        await this.page.waitForSelector(this.dialog, { state: 'hidden' });
    }
}