// @ts-check
const { test, expect } = require('@playwright/test');

async function testEnvironmentalAccountsPage(page) {
  await page.goto('https://www.ons.gov.uk/');
  await page.getByLabel('Economy sub menu').click();
  await page.getByLabel('Header links').getByRole('link', { name: 'Environmental accounts' }).click();
  await expect(page.getByRole('heading', { name: 'Environmental accounts', exact: true })).toBeVisible();  
}
module.exports ={
    testEnvironmentalAccountsPage,

};