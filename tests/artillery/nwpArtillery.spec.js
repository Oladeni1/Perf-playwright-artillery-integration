const {testBusinessPage} = require('../commands/businessPage');
const {testChangesToBusinessPage} = require ('../commands/changesToBusinessPage');
const {testEconomyOutputPage} = require ('../commands/economyOutputPage');
const {testEnvironmentalAccountsPage} = require ('../commands/environmentalAccountsPage');
const {testHomePage} = require ('../commands/homePage');


async function artilleryScript(page) {

    await testBusinessPage(page);
    await testChangesToBusinessPage(page);
    await testEconomyOutputPage(page);
    await testEnvironmentalAccountsPage(page);
    await testHomePage(page);

}
module.exports = {
    artilleryScript,
};


 