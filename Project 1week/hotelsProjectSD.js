const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Hotels/Homepage");
const HomepageProject = require("../Pages/Hotels/HomepageProject");
const loginEmail = "##@12548";
const loginPassword = "#12345";
const signUpEmail = "(#!@###";
const firstName = "(!@)";
const lastName = "(%^&)";
const signUpPsw = "1234654"
const pageComments = "any text"
const homepageProject = new homepageProject();

Given(/^I am on hotels landing page$/, async function () {
    await browser.url('https://www.hotels.com/');
});

When(/^I click on Sign in link on Homepage$/, async function () {
    await homepageProject.clickLinkSignIn();
});
And (/^I click on Sign in button$/, async function () {
    await homepageProject.clickSignInBtn();
});
And (/^I enter email address ##@12548$/, async function () {
    await homepageProject.typeInEmailLocator(loginEmail);
});
And (/^I enter password #12345$/, async function () {
    await homepageProject.typeInPasswordLocator(loginPassword);
});
And (/^I click Sign in button$/, async function () {
    expect(await homepageProject.isEnabledSignInBtn2(), 'Sign in button is NOT enabled').to.be.false;
});
Then(/^I Verify Verification message is displayed$/, async function() {
    expect(await homepageProject.isMessageDisplayed(), 'Verification message is NOT displayed').to.be.true;
});   

And (/^I click on Sign up button$/, async function () {
    await homepageProject.clickSignUpBtn();
});
And (/^I click on (.+) link$/, async function(linkName) {
    await homepageProject.getLinks(linkName);
});
Then (/^I verify .+ opens in a new tab$/, async function() {
    expect(await homepageProject.getNumberOfWindows(), 'There is no new window').to.equal(3);
});
And (/^I enter email address signUpEmail$/, async function() {
    await homepageProject.typeInSignUpEmailLocator(signUpEmail);
});
Then (/^I Verify error is displayed (Enter a valid email address)$/, async function() { 
    expect(await homepageProject.isEmailAddressMsgDisplayed(), 'The message Enter a valid email address is NOT displaed').to.be.true;
});   
And (/^I enter first name firstName$/, async function() {
    await homepageProject.typeInSignUpFirstName(firstName);
});
Then (/^I Verify error is displayed (First name cannot contain special characters)$/, async function() { 
    expect(await homepageProject.isFirstNameMsgDisplayed(), 'The message First name cannot contain special characters is NOT displaed').to.be.true;
});
And (/^And I enter last name lastName$/, async function() {
    await homepageProject.typeInSignUpLastName(lastName);
});
Then (/^I Verify error is displayed (Last name cannot contain special characters)$/, async function() { 
    expect(await homepageProject.isLastNameMsgDisplayed(), 'The message Last name cannot contain special characters is NOT displaed').to.be.true;
});
And (/^And I enter password signUpPsw$/, async function() {
    await homepageProject.typeInSignUpPswlLocator(signUpPsw);
});
Then (/^I Verify “Keep me signed in” checkbox is displayed and enabled$/, async function() {
    expect(await homepageProject.isKeepMeSignedDisplayedAndEnabled(), 'The keep me signed in chekbox is NOT displaed and NOT enabled').to.be.true;
});
Then (/^I Verify “Continue” button is displayed but NOT enabled$/, async function() {
    expect(await homepageProject.isContinueBtnDisplayed(), 'The Continue button is NOT displaed').to.be.true;
});
Then (/^I Verify “Continue” button is enabled$/, async function() {
    expect(await homepageProject.isContinueBtnEnabled(), 'The Continue button is NOT enabled').to.be.false;
});




And (/^And I click on Submit button$/, async function () {
    await homepageProject.clickSubmitButton();
});

Then (/^I Verify error message is displayed (Please fill in the required information highlighted below.)$/, async function() {
    expect(await homepageProject.isErrorMsgDisplayed(), 'The Erorr message is NOT displaed').to.be.true;
});
When (/^I click on Travelers button on Homepage$/, async function () {
    await homepageProject.clickTravelersBtn();
});
And (/^I select Adults as 6$/, async function () {
    await homepageProject.clickAdultsPlusBtn();
});
And (/^I select Children as 3$/, async function () {
    await homepageProject.clickChildrenPlusBtn();
});
And (/^I select first child age 4 from auto-suggestion$/, async function () {
    await homepageProject.selectAgeCld1FromAutoSuggestion();
});
And (/^I select second child age Under 1 from auto-suggestion$/, async function () {
    await homepageProject.selectAgeCld2FromAutoSuggestion();
});
And (/^I select third child age 7 from auto-suggestion$/, async function () {
    await homepageProject.selectAgeCld3FromAutoSuggestion();
});
And (/^I click Done button$/, async function () {
    await homepageProject.clickDoneLink();
});
Then (/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4$/, async function () {
    exepct(await homepageProject.getTextAllTravelers() === 9, 'The number of Travelers is NOT as selected').to.be.true;
});


And (/^AI enter .+ comments$/, async function() {
    await homepageProject.typeInPageComments(pageComments);
});