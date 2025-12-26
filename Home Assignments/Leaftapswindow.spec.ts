import test, { expect } from "@playwright/test";

test(`Handling tabs using concurrent way of handling window in leaftaps`, async ({ page, context }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill("demosalesmanager"); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill("crmsfa");//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.getByRole('link', { name: "Merge Leads" }).click()
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.getByAltText('Lookup').first().click()])
    //await newPage.waitForLoadState('domcontentloaded');
    await newPage.getByRole('link', { name: '10117' }).first().click();
    await page.bringToFront();
    const [newPage1] = await Promise.all([context.waitForEvent('page'), page.getByAltText('Lookup').last().click()])
    await newPage1.getByRole('link', { name: '10118' }).first().click();
    await page.bringToFront();
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        console.log(`The message inside the alert says ${alertMessage}`);
        // const alertType = alert.type() // simple,confirm, prompt
        // console.log(`The alert type is ${alertType}`);
        alert.accept()
         })
        await page.locator("//a[@class='buttonDangerous']").click()
        
    })