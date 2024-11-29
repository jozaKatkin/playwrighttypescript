import {expect, test} from "playwright/test";
import {SeleniumPlaygroundPage} from "../pages/seleniumplayground.page";


test("Simple Form Demo Test", async ({page}) => {
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

});