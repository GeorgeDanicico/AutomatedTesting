const CurrentPage = require('../pageobjects/login.page');

describe('Automated testing', () =>{
    it('Verify results match the search criteria.',async () =>{
        // opening the website.
        await CurrentPage.open();

        // selecting the button for sale.
        const btnForSale = await browser.$('button[class="b7afbb84"]');
        await btnForSale.click();

        // filling the text box with the required location
        const locationText = await browser.$('input[type="text"]');
        await locationText.setValue('Dubai Marina');

        // select the location in order to search properly
        const setLocationBtn = await browser.$('button[class="_0e756b14"]');
        await setLocationBtn.click();

        // finding all the properties for sale in that area
        await expect(browser).toHaveTitle("Bayut: UAE's Largest Real Estate Portal");
        // finding the button that will find the properties
        const btnFind = await browser.$('a[href*="/for-sale/property/"]');
        await btnFind.click();
        
        // make sure that we are on the required website
        await expect(browser).toHaveTitle("Properties for Sale in Dubai Marina | Bayut.com");

        // a while loop that will go through all the apartments and check if they really have the location Dubai Marina
        let i = 0;

        // this should get the extract the number of apartments from the text area.
        // const apartmentsValue = await browser.$('span[class="ca3976f7"][aria-label="Summary text"]');
        // var matches = await apartmentsValue.match(/\d+/g);

        // on the website we can see that at the moment there are 24 properties on a page and 3003 in total(3003 were at the time)
        while(i < 3003){
            i += 24;
            const locationsTextBoxes = await browser.$$('div[class="_7afabd84"][aria-label="Location"]');
            var j = 0;
            if(i < 3003){
                j = 24;
            }
            else{
                j = 24 + 3003 - i;
            }
            // we check to be sure that we selected the correct number of elements.
            await expect(locationsTextBoxes).toBeElementsArrayOfSize(j);
            // we check if indeed there is 'Dubai Marina' in the text.
            await locationsTextBoxes.forEach(text => {
                expect(text).toHaveTextContaining('Dubai Marina');
            });

            if(i < 3003){
                // then we scroll the page to the next button so that we can go on the next page.
                if(j == 0) j++;
                const element = locationsTextBoxes[j-1];
                await element.scrollIntoView();
                const btnNext = await browser.$('a[href*="/for-sale/property/dubai/dubai-marina/"][class="b7880daf"][title="Next"]');
                await btnNext.click();
            }

        }
     

        
    });

    it('Verify Popular Searches links work correctly.', async () => {
        await CurrentPage.open();

        const element = await browser.$('div[class="fa2044b7"]');
        // scroll to that specific element
        await element.scrollIntoView();
        
        // Selecting the 'To Rent' tab
        const tabs = await browser.$('div[class="d8530318"]');
        await tabs.click();

        // Should click on the View all button but the button is not interactable ???
        // const btnViewAll = await browser.$('div[class="_2f838ff4 _5b112776 _29dd7f18"][role="button"]');
        // await btnViewAll.click();


        // get all links
        const listLinks = await browser.$$('a[class="_78d325fa "][href*="/to-rent/apartments/dubai/"]');
        await expect(listLinks).toBeElementsArrayOfSize(14);
 
        // trying to go through all the links to check if they load the pages.
        // let i = 1;
        // while(i <= 5){
        //     console.log(i);
        //     await listLinks[i].click();
        //     await browser.back();
        //     i++;
        // }

        // await listLinks[1].click();
        // await browser.back();

    });

});