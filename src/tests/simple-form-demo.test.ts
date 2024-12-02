import {expect, test} from "../fixtures/page-fixtures.ts"
import {SeleniumPlaygroundPage} from "../pages/selenium-playground-page";
import {DragAndDropPage} from "../pages/drag-and-drop-page";


test("Simple Form Demo Test", async ({cookieBotDialog, seleniumPlaygroundPage, }) => {
   // await page.goto('https://www.lambdatest.com/selenium-playground/');
   await page.goto("/selenium-playground/");
   page.on('dialog', async dialog => {
      console.log(dialog.type());
      await dialog.accept();
   });


   const seleniumPlaygroundPage = new SeleniumPlaygroundPage(page);

   await seleniumPlaygroundPage.goToSimpleFormDemoPage();
   await expect(page).toHaveURL(/simple-form-demo/);
   await page.waitForTimeout(1000);

   const dragAndDropPage = new DragAndDropPage(page);
   await dragAndDropPage

});