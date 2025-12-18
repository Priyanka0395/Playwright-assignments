import { expect, test } from "@playwright/test";
test.use({ storageState: "Data/LTlogin.json" })

test(`Learn to create lead and convert to oppturtunity`, async ({ page }) => {
    await page.goto(`https://orgfarm-ecebc136a4-dev-ed.develop.lightning.force.com/lightning/page/home`);
    await page.getByRole(`button`, { name: "App Launcher" }).click()
    await page.getByRole(`button`, { name: "View All Applications" }).click()
    await page.getByPlaceholder(`Search apps or items...`, { exact: true }).fill("Marketing")
    // page.getByRole(`combobox`, { name: "Search apps or items..." }).click
    await expect(page.locator(`//p[starts-with(normalize-space(.), 'Marketing')]`)).toBeVisible({ timeout: 4000 })
    page.locator(`//p[starts-with(normalize-space(.), 'Marketing')]`).click({ timeout: 4000 })
    page.getByRole(`link`, { name: "Leads" }).click()
    await page.getByText('New', { exact: true }).click()
    page.getByRole(`combobox`, { name: "Salutation" }).click()
    await page.getByRole(`option`, { name: "Mr." }).click()
    await page.getByPlaceholder(`First Name`, { exact: true }).fill("Parthi")
    await page.getByPlaceholder(`Last Name`, { exact: true }).fill("Ganesh")
    await page.getByRole(`textbox`, { name: "Company" }).fill("Hyundai")
    page.getByText(`Save`, { exact: true }).click()
    const toast = page.locator('div.forceToastMessage');
    await toast.waitFor({ state: 'visible', timeout: 10000 });
    const toastText = (await toast.innerText())
    await expect(toast).toContainText('was created')
    console.log('Salesforce Toast Message:', toastText);
    await toast.waitFor({ state: 'hidden', timeout: 10000 });
    page.getByRole('button', { name: "Show more actions" }).click()
    page.getByRole('menuitem', { name: "Convert" }).click()
    page.getByRole('button', { name: "Convert" }).click()
    const text = page.getByRole('heading', { name: "Your lead has been converted" })
    await expect(text).toBeVisible({ timeout: 17000 });
    // Get toast text
    const pageText = (await text.innerText())
    // Print to console
    console.log('Salesforce Message:', pageText);
    await page.getByRole('button', { name: 'Go to Leads' }).click();
    // Open List View dropdown
    await page.getByRole('button', { name: 'Select a List View: Leads' }).click();
    // Select "All Open Leads"
    await page.getByRole('option', { name: 'All Open Leads' }).click();
    // ✅ Wait until list view title updates (IMPORTANT)
    await expect(
        page.getByRole('heading', { name: 'All Open Leads' })
    ).toBeVisible({ timeout: 15000 });
    // Search for converted lead
    const searchbox = page.getByRole('searchbox', { name: 'Search this list...' });
    await searchbox.fill('Parthi');
    await searchbox.press('Enter');
    // Wait for Salesforce to refresh results
    const result = page.getByRole('heading', { name: 'Nothing to see here' });
    await expect(result).toBeVisible({ timeout: 3000 });
    // Get text and print
    const finalText = await result.innerText();
    console.log('Salesforce Message:', finalText);
    // Assertion
    expect(finalText).toContain('Nothing to see here');
    await page.getByRole('link', { name: "Opportunities" }).click()
    const oppurtunityName = page.getByRole('searchbox', { name: "Search this list..." })
    await expect(oppurtunityName).toBeVisible({ timeout: 15000 });
    await oppurtunityName.fill("Hyundai")
    await oppurtunityName.press('Enter')
    //await expect(result).toBeVisible();
    await page.locator("//span[text()='Hyundai-']").click()


















    await page.waitForTimeout(30000)
})




