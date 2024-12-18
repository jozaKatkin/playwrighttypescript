import {test as base} from '@playwright/test';
import {CookieBotDialog} from "../pages/cookie-bot-dialog";
import {SeleniumPlaygroundPage} from "../pages/selenium-playground-page";
import {DragAndDropPage} from "../pages/drag-and-drop-page";
import {SimpleFormDemoPage} from "../pages/simple-form-demo-page";
import {InputFormSubmitPage} from "../pages/input-form-submit-page";

type PageFixtures = {
    cookieBotDialog: CookieBotDialog;
    seleniumPlaygroundPage: SeleniumPlaygroundPage;
    dragAndDropPage: DragAndDropPage;
    simpleFormDemoPage: SimpleFormDemoPage;
    inputFormSubmitPage: InputFormSubmitPage;
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

    simpleFormDemoPage: async ({page}, use) => {
        const simpleFormDemoPage = new SimpleFormDemoPage(page);
        await use(simpleFormDemoPage)
    },

    dragAndDropPage: async ({page}, use) => {
        const dragAndDropPage = new DragAndDropPage(page);
        await use(dragAndDropPage);
    },

    inputFormSubmitPage: async ({page}, use) => {
        const inputFormSubmitPage = new InputFormSubmitPage(page);
        await use(inputFormSubmitPage);
    },
});

export const expect = test.expect;