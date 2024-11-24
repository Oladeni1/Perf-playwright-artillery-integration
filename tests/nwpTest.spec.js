// @ts-check
const { test, expect } = require('@playwright/test');
import {testBusinessPage} from './commands/businessPage';
import {testChangesToBusinessPage} from './commands/changesToBusinessPage';
import {testEconomyOutputPage} from './commands/economyOutputPage';
import {testEnvironmentalAccountsPage} from './commands/environmentalAccountsPage';
import {testHomePage} from './commands/homePage';


test('test - ONS Business Page', async ({ page }) => {

    await testBusinessPage(page);
   
});
test('test - ONS Changes to Business Page', async ({ page }) => {
    
    await testChangesToBusinessPage(page);

});
test('test - ONS Economy Output Page', async ({ page }) => {
   
    await testEconomyOutputPage(page);
    
});
test('test - ONS Environmental Accounts Page', async ({ page }) => {
    
    await testEnvironmentalAccountsPage(page);
    
});
test('test - ONS Home Page', async ({ page }) => {

    await testHomePage(page);
 
});

