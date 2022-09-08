const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');
const homepage = new Homepage();
const now = moment();
const currentDate = now.format('D');

Given(/^I am on hotels landing page$/, async function () {
    await browser.url('https://www.hotels.com/');
});

When(/^I click on calendar button$/,async function () {
    await homepage.clickOnCalendarButton();
});

When(/^I click on previous month button$/,async function () {
    await homepage.clickOnPreviousMonthButton();
});
When(/^I find current date button$/,async function () {
    await homepage.findCurrentDateButton();
});
Then (/^ I click on previous date button$/,async function () {
    await $ (findCurrentDateButton(now.add(-1, 'day')));
    expect (previousDate.isEnabled(),'This date is not enabled').to.be.true;
});  
When(/^I enter "man" in destination field$/,async function () {
    await homepage.enterDestination('man');
});
When(/^I select "Manila" from auto-suggestion$/,async function () {
    await homepage.selectDestinationFromAutoSuggestion('Manila');
}); 
When(/^I select "Tomorrow" as check-in date$/,async function () {
    await homepage.clickOnCalendarButton();
    await homepage.clickOnPreviousMonthButton();
    now.add(1, 'day');
    await homepage.selectCheckInDate(now.add(1, 'day'));;
}); 
When(/^I select "5" days from chek-in as check-out$/,async function () {
    await homepage.selectCheckOutDate(now.add(6, 'day'));
});   
When(/^And I click on search button on Homepage$/,async function () {
    await homepage.clickSearchButton();
});    
Then(/^I verify the destination has Manila$/, async function () {
});