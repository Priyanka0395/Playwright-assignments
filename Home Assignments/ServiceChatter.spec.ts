import { expect, test } from "@playwright/test";
test.use({ storageState: "Data/LTlogin.json" })
test(`Learn to create lead and convert to oppturtunity`, async ({ page }) => {
    await page.goto(`https://orgfarm-ecebc136a4-dev-ed.develop.lightning.force.com/lightning/page/home`);
    await page.getByRole(`button`, { name: "App Launcher" }).click()
    await page.getByRole(`button`, { name: "View All Applications" }).click()
    expect(page.getByRole('combobox', { name: "Search apps or items..." })).toBeVisible()
    await page.getByRole('combobox', { name: "Search apps or items..." }).fill("Service")
    await expect(page.locator("(//p[starts-with(normalize-space(.), 'Service')])[1]")).toBeVisible()
    await page.locator("(//p[starts-with(normalize-space(.), 'Service')])[1]").click()
    await page.getByRole('link', { name: "Cases" }).click()
    await page.locator("//a[@title='New']").click()
    await page.getByRole('combobox', { name: "Contact Name" }).click()
    await page.getByRole('option', { name: "Add New Contact" }).click()
    await page.getByRole('combobox', { name: "Salutation" }).click()
    await page.getByRole('option', { name: "Ms." }).click()
    await page.getByRole('textbox', { name: "First Name" }).fill("Preetha")
    await page.getByRole('textbox', { name: "Last Name" }).fill("S")
    await page.getByRole('button', { name: "Save" }).click()
    const toastt = page.locator('div.forceToastMessage');
    await toastt.waitFor({ state: 'visible', timeout: 10000 });
    const toastText = (await toastt.innerText())
    await expect(toastt).toContainText('was created')
    console.log('Salesforce Toast Message:', toastText);
    await toastt.waitFor({ state: 'hidden', timeout: 10000 });
    await page.getByRole('combobox', { name: "Account Name" }).click()
    await page.getByRole('option', { name: "Add New Account" }).click()
    await page.getByRole('textbox', { name: "Account Name" }).fill("Form")
    page.getByRole('textbox', { name: "Account Number" }).fill("145")
    await page.getByRole('combobox', { name: "Rating" }).click()
    await page.getByRole('option', { name: "Hot" }).click()
    await page.getByRole('button', { name: "Save" }).click()
    const toast1 = page.locator('div.forceToastMessage');
    await toast1.waitFor({ state: 'visible', timeout: 10000 });
    const toastText1 = (await toast1.innerText())
    await expect(toast1).toContainText('was created')
    console.log('Salesforce Toast Message:', toastText1);
    await toastt.waitFor({ state: 'hidden', timeout: 10000 });
    await page.getByRole('combobox', { name: "Priority" }).click()
    await page.getByRole('option', { name: "High" }).click()
    await page.getByRole('combobox', { name: "Case Origin" }).click()
    await page.getByRole('option', { name: "Email" }).click()
    await page.getByRole('textbox', { name: "Subject" }).fill("Product Return Request")
    await page.getByRole('textbox', { name: "Description" }).fill("Requesting a return for a defective product")
    await page.locator("//button[@name='SaveEdit']").click()
    const toast2 = page.locator('div.forceToastMessage').last()
    await expect(toast2).toBeVisible({ timeout: 10000 })
    console.log(await toast2.innerText())
    await expect(toast2).toContainText('was created')
    await expect(toast2).toBeHidden({ timeout: 10000 });
    page.locator("//button[@title='Edit Status']").click()
    await page.getByRole('combobox', { name: "Status" }).click()
    await page.getByRole('option', { name: "Escalated" }).click()
    await page.locator("//button[@name='SaveEdit']").click()
    await page.getByRole('button', { name: "Share an update..." }).click()
    await page.getByRole('button', { name: "Share an update..." }).click()
    await page.getByRole('textbox', { name: "Share an update..." }).fill("I am posting a new update")
    await page.getByRole('button', { name: "Share" }).click()
    const toast3 = page.locator('div.forceToastMessage').last()
    await expect(toast3).toBeVisible({ timeout: 10000 })
    console.log(await toast3.innerText())
    await expect(toast3).toContainText('was shared')
    await expect(toast3).toBeHidden({ timeout: 10000 });
    await page.locator('a.cuf-feedItemActionTrigger').first().click();
    // expect(page.locator("//li[@title='Like on Chatter']//a[@role='menuitem'])[1]")).toBeVisible()
    await page
        .getByRole('menu')
        .locator('li[title="Like on Chatter"]')
        .getByRole('menuitem')
        .click();
    const toast4 = page.locator('div.forceToastMessage').last()
    await expect(toast4).toBeVisible({ timeout: 10000 })
    console.log(await toast4.innerText())
    await expect(toast4).toContainText('was liked')
    await expect(toast4).toBeHidden({ timeout: 10000 });

















})