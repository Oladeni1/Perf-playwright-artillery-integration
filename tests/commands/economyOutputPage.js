// @ts-check
const { test, expect } = require('@playwright/test');

async function testEconomyOutputPage(page) {
  await page.goto('https://www.ons.gov.uk/');
  await page.getByLabel('Economy sub menu').click();
  await page.getByLabel('Header links').getByRole('link', { name: 'Economic output and' }).click();
  await expect(page.getByRole('heading', { name: 'Economic output and' })).toBeVisible();  
}
module.exports ={
    testEconomyOutputPage,

};