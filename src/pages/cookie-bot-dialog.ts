import {BasePage} from "./base-page";

export class CookieBotDialog extends BasePage {
    private dialog = '#CybotCookiebotDialog';
    private allowAllButton = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';


    async waitForDialog() {
        await this.page.waitForSelector(this.dialog, { state: 'visible' });
    }

    async clickAllowAll() {
        await this.page.click(this.allowAllButton);
    }

    async verifyDialogIsHidden() {
        await this.page.waitForSelector(this.dialog, { state: 'hidden' });
    }
}