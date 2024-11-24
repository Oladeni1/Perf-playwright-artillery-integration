// @ts-check
const { test, expect } = require('@playwright/test');

async function testHomePage(page) {
  await page.goto('https://www.ons.gov.uk/');
  await expect(page.getByRole('heading', { name: 'Employment' }).locator('span')).toBeVisible();   
}
module.exports ={
    testHomePage,

};