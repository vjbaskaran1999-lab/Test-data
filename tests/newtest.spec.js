const { test, expect } = require('@playwright/test');

test('First Testfile', async ({ page }) => {
    await page.goto("https://tnreginet.gov.in/portal/");

});


test('Second Testfile', async ({ page }) => {
    await page.goto("https://tnreginet.gov.in/portal/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Inspector General of Registration - Tamil Nadu");
});


test('third testfile', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://tnreginet.gov.in/portal/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Inspector General of Registration - Tamil Nadu");
    await page.locator("[name = 'username']").fill("vijay_citizen");
    await page.locator("[type='password']").fill("Welcome@123");
    await page.locator('#Sign In').click();
});

test('third testfile1', async ({ browser }) => {
    const site = await browser.newContext();
    const page = await site.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator("[name = 'username']").fill("vijay_citizen");
    await page.locator("[type='password']").fill("Welcome@123");
    await page.locator('#signInBtn').click();
    await page.locator(".alert.alert-danger.col-md-12").waitFor({ state: 'visible' });
    const errorMessage = page.locator(".alert.alert-danger.col-md-12");

    // await errorMessage.waitFor({ state: 'visible' });
    console.log(await errorMessage.textContent());
    await expect(errorMessage).toContainText("Incorrect username/password.")
    //console.log(await page.locator("[style*='block']").textContent());

});


test('testcase for rahulshetty', async ({ browser }) => {

    const site = await browser.newContext();
    const page = await site.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator('#username').fill("vijay");
    await page.locator("[type='password']").fill("vijay@12");
    await page.locator('#signInBtn').click();
    await page.locator(".alert.alert-danger.col-md-12").waitFor({ state: 'visible' });
    const errorMessage = page.locator(".alert.alert-danger.col-md-12");
    console.log(await errorMessage.textContent());
    await expect(errorMessage).toContainText("Incorrect username/password.")

});

test('Dummy test', async function ({ browser })
//function({browser}) ---> we can use ({})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    await page.locator("[id = 'userEmail']").fill("vjbaskaran21@gmail.com");
    await page.locator("[id='userPassword']").fill("Welcome@123");
}


);