import { test as base } from '@playwright/test';
import {CookieBotDialog} from "../pages/cookie-bot-dialog";
import {SeleniumPlaygroundPage} from "../pages/selenium-playground-page";
import {DragAndDropPage} from "../pages/drag-and-drop-page";

type PageFixtures = {
    cookieBotDialog: CookieBotDialog;
    seleniumPlaygroundPage: SeleniumPlaygroundPage;
    dragAndDropPage: DragAndDropPage;
}

export const test = base.extend<PageFixtures>({
    cookieBotDialog: async ({page}, use) => {
        const cookieBotDialog = new CookieBotDialog(page);
        await use(cookieBotDialog);
    },

    seleniumPlaygroundPage: async ({page}, use) => {
        const seleniumPlaygroundPage = new SeleniumPlaygroundPage(page);
        await use(seleniumPlaygroundPage);
    },

    dragAndDropPage: async ({page}, use) => {
        const dragAndDropPage = new DragAndDropPage(page);
        await use(dragAndDropPage);
    },
});

export const expect = test.expect;