const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Hotels/Homepage");
const Searchpage = require("../Pages/Hotels/Searchpage");
const HomepageTest = require("../Pages/Hotels/HomepageTest");

const homepage = new Homepage();

 Given(/^I am on hotels landing page$/, async function () {
    await browser.url('https://www.hotels.com/');
 });
 When(/^I find linkName learn about Hotels.com Rewards$/,async function () {
    await homepage.ScrollIntorView(linkLearnAbout);
 });
 And(/^I click linkName learn about Hotels.com Rewards$/,async function () {
     await homepage.clickWebElement(linkLearnAbout); 
     await browser.pause(5000);
 And(/^Verify Hotels Rewards opened in a new window$/,async function () {     
        titleContains = 'rewards'
         for (handle of allHandles) {
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if (!pageTitle.includes(titleContains)) {
                await browser.closeWindow();
            }
        
        }
     });
 And(/^I Click on Join Now button$/,async function () {
    await homepage.clickWebElement(joinNowBtn ); 
 });
 And(/^I Click on Continue button$/,async function () {
    await homepage.clickWebElement(continueBtnLocator); 
    expect (await homepage.isContinueBtnEnabled(), 'The continue button is NOT enabled').to.be.fauls;
 });
 })
