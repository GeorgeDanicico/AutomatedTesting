const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

// Setting up the the page for the bayut website
class BayutPage extends Page{

    get inputLocation (){ return $(".a41c4dcc _6a3a3de9");} 
    get btnFind() { return $('.c3901770 _8c8f02f5'); }


    async set_location_and_go(location){
        // await(await this.inputLocation).setValue(location);
        await(await this.btnFind).click();
    }

    open(){
        browser.url("https://www.bayut.com/");
    }

}

module.exports = new BayutPage();