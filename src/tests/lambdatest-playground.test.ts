import {expect, test} from "../fixtures/page-fixtures";
import {StringConstants} from "../constants/StringConstants";

test.beforeEach("Before Each Hook", async ({page, cookieBotDialog}) => {
    await page.goto("/selenium-playground/");
    await cookieBotDialog.waitForDialogToBeVisible();
    await cookieBotDialog.clickAllowAllButton();
    await cookieBotDialog.waitForDialogToBeHidden();
});


test("Simple Form Demo Test", async ({seleniumPlaygroundPage, simpleFormDemoPage}) => {
    await seleniumPlaygroundPage.goToSimpleFormDemoPage();
    await simpleFormDemoPage.waitForPageToLoad()
    const url = await simpleFormDemoPage.getUrl();
    expect(url).toContain(StringConstants.CORRECT_SIMPLE_FORM_DEMO_URL);

    await simpleFormDemoPage.enterMessageIntoField(StringConstants.WELCOME_TO_LAMBDA_TEST_STRING);
    await simpleFormDemoPage.clickOnGetCheckedValueButton();
    const actualText = await simpleFormDemoPage.getAppearedMessageText();
    expect(actualText).toContain(StringConstants.WELCOME_TO_LAMBDA_TEST_STRING)
});

test("Drag and Drop Test", async ({seleniumPlaygroundPage, dragAndDropPage}) => {
    const targetSliderValue: string = "94"

    await seleniumPlaygroundPage.goToDragAndDropPage();
    await dragAndDropPage.waitForPageToLoad();
    await dragAndDropPage.setSliderValue(targetSliderValue);
    expect(await dragAndDropPage.getCurrentSliderValue()).toBe(targetSliderValue);
});

test("Input Form Submit Test", async ({seleniumPlaygroundPage, inputFormSubmitPage}) => {
    await seleniumPlaygroundPage.goToInputFormSubmitPage();
    await inputFormSubmitPage.waitForPageToLoad();

    await inputFormSubmitPage.clickOnSubmitButton();
    expect(await inputFormSubmitPage.getValidationMessage()).toContain(StringConstants.PLEASE_FILL_OUT_THIS_FIELD_STRING);
});