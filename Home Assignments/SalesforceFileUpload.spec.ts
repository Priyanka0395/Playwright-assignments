import { expect, test } from "@playwright/test";
import path from "path";
test.use({ storageState: "Data/LTlogin.json" })

test(`Learn to create lead and convert to oppturtunity`, async ({ page }) => {
    await page.goto(`https://orgfarm-ecebc136a4-dev-ed.develop.lightning.force.com/lightning/page/home`);
    await page.getByRole(`button`, { name: "App Launcher" }).click()
    await page.getByRole(`button`, { name: "View All Applications" }).click()
    await page.getByPlaceholder(`Search apps or items...`, { exact: true }).fill("Accounts")
    // page.getByRole(`combobox`, { name: "Search apps or items..." }).click
    //await expect(page.getByRole('link', { name: "Accounts" })).toBeVisible()
    await page.locator("//a[@class='al-tab-item']").click()
    await page.getByRole(`button`, { name: "New" }).click()
    await page.getByRole(`textbox`, { name: "Account Name" }).fill("HR accounts")
    await page.getByRole(`combobox`, { name: "Rating" }).click()
    await page.getByRole(`option`, { name: "Warm" }).click()
    await page.getByRole(`combobox`, { name: "Type" }).click()
    await page.getByRole(`option`, { name: "Prospect" }).click()
    await page.getByRole(`combobox`, { name: "Industry" }).click()
    await page.getByRole(`option`, { name: "Banking" }).click()
    await page.getByRole(`combobox`, { name: "Ownership" }).click()
    await page.getByRole(`option`, { name: "Public" }).click()
    await page.locator("//button[@name='SaveEdit']").click()
    const toast = page.locator('div.forceToastMessage').last()
    await expect(toast).toBeVisible({ timeout: 10000 })
    console.log(await toast.innerText())
    await expect(toast).toContainText('was created')
    await expect(toast).toBeHidden({ timeout: 10000 });
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(
        path.join(__dirname, '../Data/Testleaf-logojpg.jpg')
    );
    await page.getByRole('button', { name: "Done" }).click()
    const toast1 = page.locator('div.forceToastMessage').last()
    await expect(toast1).toBeVisible({ timeout: 10000 })
    console.log(await toast1.innerText())
    await expect(toast1).toContainText('was added')
    await expect(toast1).toBeHidden({ timeout: 10000 });









})