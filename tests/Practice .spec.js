const { test, expect } = require('@playwright/test');

test.only('Dummy test', async function ({ browser })
//function({browser}) ---> we can use ({})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const Titlecard = page.locator(".card-body").nth(0);
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    await page.locator("[id = 'userEmail']").fill("vjbaskaran21@gmail.com");
    await page.locator("[id='userPassword']").fill("Welcome@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');

    //const count = await Titlecard.count();
    //  for (let i = 0; i < count; i++) {
    //     let abc = await Titlecard.nth(i).textContent();
    //   console.log(abc);
    // }-
    const alltitlecard = await Titlecard.allTextContents();
    const splitalltitlecard = alltitlecard.map(Titlecard => Titlecard.split("$"));
    console.log(splitalltitlecard);
    await page.locator(".btn.w-10.rounded").last().click();

    await page.screenshot({
        path: 'screenshots/full-page.png',
        fullPage: true
    });

    await page.pause();

}

);