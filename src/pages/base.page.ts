import {Page} from "@playwright/test";


export class BasePage {
    private cookieDialog = "//div[@id='CybotCookiebotDialog']";
    private allowAllButton = "//button[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']";

    constructor(protected page: Page) {
    }



}