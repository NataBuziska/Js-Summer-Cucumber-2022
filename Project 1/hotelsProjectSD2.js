const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Hotels/Homepage");
const HomepageProject2 = require("../Pages/Hotels/HomepageProject2");
const homepageProject2 = new HomepageProject2();

const phoneNumber = 00000000000;
const address = 121


Given(/^I am on hotels landing page$/, async function (){
    await browser.url('https://www.hotels.com/');
});
When(/^I Scroll to Get the app button$/, async function (){
     await homepageProject2.ScrollIntorView();
});
And(/^I Enter “0000000000” in Phone number$/, async function (){
     await homepageProject2.typeInPhoneNumberLct(phoneNumber);
});
And(/^I click to Get the app button$/, async function (){
    await homepageProject2.clickGetTheAppBtn()
});
Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function (){
    expect(await homepageProject2.isPhoneMessageDisplayed(), 'Please enter a valid phone number message is NOT displayed').to.be.true;
});   

When (/^I click  on List your property$/, async function (){
    await homepageProject2.clickListYourProperty()
});
 new window
And (/^I verify What would you like to list? is displayed$/, async function (){
    await homepageProject2.isLikeToListDisplayed()
});

And (/^I verify Lodging and Private residence options are displayed$/, async function (){
    await homepageProject2.areLodgingAndPrivateResidenceDisplayed()
});

And(/^I Click on Private residence$/, async function (){
    await homepageProject2.clickPrivateResidence()
});

And (/^I verify Step 1 of 3 is displayed$/, async function (){
    await homepageProject2.isStep1Of3Displayed()
});

And (/^I verify See how much you could earn! is displayed$/, async function (){
    await homepageProject2.isSeeHowMuchDisplayed()
});

And (/^And I enter “4“ as bedroom$/, async function (){
    await homepageProject2.clickIncreaseBedroomsBtn()
});

And (/^I enter “2.5“ as bathroom$/, async function (){
    await homepageProject2.clickIncreaseBathroomsBtn()
});

And (/^I click on “Next” button$/, async function (){
    await homepageProject2.clickNextButton()
});

And (/^I verify ”Step 2 of 3” is displayed$/, async function (){
    await homepageProject2.isStep2Of3Displayed()
});

And (/^I verify “Where is your property located?” is displayed$/, async function (){
    await homepageProject2.isWhereIsYourPropertyDisplayed()
});

And (/^I Enter “121” in address$/, async function (){
    await homepageProject2.typeInEnterAddressLct()
});

And (/^I Select 1211 6th Avenue, New York, NY, USA from auto-suggestion$/, async function (){
    await homepageProject2.selectAddressFromAutoSuggestion()
});

Then (/^I verify graph is displayed$/, async function (){
    await homepageProject2.isGraphDisplayed()
});

Then (/^I verify pin in graph is displayed$/, async function (){
    await homepageProject2.isPinInGraphDisplayed()
});

And (/^I verify Pin location may not be exact is displayed below graph$/, async function (){
    expect (await homepageProject2.isPinLocationMsgDisplayed(), 'Pin location is displayed exact below graph').to.be.true;
});

Then (/^I click on Dates$/, async function () {
    await homepageProject2.clickDatesLocator()
});

Then (/^I go to current month if not displayed$/, async function () {
    await homepageProject2.clickCurrentMonthBtn()
});