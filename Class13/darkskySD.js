const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../Pages/Darksky/HomepageTest");

const homepage = new Homepage();
Given(/^I am on darksky homepage$/, async function () {
    await browser.url('https://www.darksky.net/');
 });

 When(/^I find timeline$/, async function () {
 });

 //@darksky-2
 When(/^I find Today button$/,async function () {
    await homepage.ScrollIntorView(todayBtn);
 });
 And(/^I Click on Today button$/,async function () {
    await homepage.clickWebElement(todayBtn);
 });
 Then(/^Verify minTemp on and in Today's timeline is same$/, async function () {
  await homepage.getText(minTempLocator[0]);
  await homepage.getText(minTempLocator2[0]);
  expect(await homepage.getText(minTempLocator[0])===await homepage.getText(minTempLocator2[0])).to.be.true;
 })
 Then(/^Verify maxTemp on and in Today's timeline is same$/, async function () {
    await homepage.getText(maxTempLocator[0]);
    await homepage.getText(maxTempLocator2[0]);
    expect(await homepage.getText(maxTempLocator[0])===await homepage.getText(maxTempLocator2[0])).to.be.true;
   })