// @ts-check
const { test, expect } = require('@playwright/test');

async function testBusinessPage(page) {
  await page.goto('https://www.ons.gov.uk/');
  await page.getByLabel('Business, industry and trade').click();
  await page.getByLabel('Header links').getByRole('link', { name: 'Business', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Business', exact: true })).toBeVisible();   
}
module.exports ={
    testBusinessPage,
};