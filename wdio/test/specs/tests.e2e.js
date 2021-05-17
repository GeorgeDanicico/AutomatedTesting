const CurrentPage = require('../pageobjects/login.page');

describe('Automated testing', () =>{
    it('should click on the button',async () =>{
        await CurrentPage.open();
        // await (await $('.a41c4dcc _6a3a3de9')).setValue('Dubai Marina');

        const btnForSale = await browser.$('button[class="b7afbb84 b77a79f5"]');
        await btnForSale.click();

        const locationText = await browser.$('input[type="text"]');
        await locationText.setValue('Dubai Marina');

        const setLocationBtn = await browser.$('button[class="_0e756b14"]');
        await setLocationBtn.click();

        const btnFind = await browser.$('a[href*="/to-rent/property/uae/"]');
        await expect(browser).toHaveTitle("Bayut: UAE's Largest Real Estate Portal");
        await btnFind.click();
        // await browser.click('.c3901770 _8c8f02f5');
        
        await expect(browser).toHaveTitle("Properties for Rent in UAE | Bayut.com");
        // await expect(locationText).toHaveTextContaining('Search properties for sale and to rent in the UAE');
    });
});