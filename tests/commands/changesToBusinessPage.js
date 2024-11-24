// @ts-check
const { test, expect } = require('@playwright/test');

async function testChangesToBusinessPage(page) {
  await page.goto('https://www.ons.gov.uk/');
  await page.getByLabel('Business, industry and trade').click();
  await page.getByLabel('Header links').getByRole('link', { name: 'Changes to business' }).click();
  await expect(page.getByRole('heading', { name: 'Changes to business' })).toBeVisible();   
}
module.exports ={
    testChangesToBusinessPage,

};