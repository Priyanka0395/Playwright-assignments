import { test } from "@playwright/test";
import files from "../Data/LeaftapsLogin.json"
import credentials from "../Data/LeadDetails.json"
for (let tempVal of files) {
     for (let data of credentials){
    test(`Learn to handle data parametrization,${tempVal.Filename},${data.TID}`, async ({ page }) => {

        await page.goto(`http://leaftaps.com/opentaps/control/login`);
        await page.locator(`//input[@id="username"]`).fill(tempVal.Username)
        await page.locator(`//input[@id="password"]`).fill(tempVal.Password)
        await page.locator(`//input[@class="decorativeSubmit"]`).click();
        await page.locator(`//a[contains(text(),"CRM")]`).click();
        await page.locator(`//a[text()="Create Lead"]`).click();
        await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(data["Company Name"]);
        await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(data["First Name"]);
        await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(data["Last Name"]);
        await page.selectOption(`#createLeadForm_dataSourceId`, { label: "Direct Mail" })
        await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", { value: "DEMO_MKTG_CAMP" })
        const dropdownLocators = page.locator("//select[@id='createLeadForm_marketingCampaignId']"); 
        const dropdownCount = await dropdownLocators.count(); // 9
        console.log(`Number of dropdown present ${dropdownCount}`);
        for (let index = 0; index < dropdownCount; index++) {
            console.log(await dropdownLocators.nth(index).innerText())
        }
        await page.selectOption("//select[@id='createLeadForm_industryEnumId']", { label: "General Services" })
        await page.selectOption("//select[@id='createLeadForm_currencyUomId']", { value: "INR" })
        await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", { value: "IND" })
        await page.selectOption("//select[@id='createLeadForm_generalStateProvinceGeoId']", { label: "ANDHRA PRADESH" })
        const dropdownLocators2 = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']")
        const dropdownCount2 = await dropdownLocators2.count(); 
        console.log(`Number of dropdown present ${dropdownCount2}`);
        for (let index = 0; index < dropdownCount2; index++) {
            console.log(await dropdownLocators2.nth(index).innerText())



           
        }}
    )}}
