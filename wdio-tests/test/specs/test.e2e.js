const { BROWSER } = require('ua-parser-js');
const BayutPage = require('../pageobjects/bayut.page')

describe('My Automated tester.', () =>{
    it('should search for available rents in a specific location.', async () =>{
        await BayutPage.open();
        // browser.url("https://www.bayut.com/");

        const LocationTextBox = await $(".a41c4dcc _6a3a3de9");
        await BayutPage.set_location_and_go('Dubai Marina');

        // await expect(LocationTextBox.getText()).toHaveTextContaining('Dubai Marina');
    });


});