const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const Commands = require("../Commands");

class HomepageProject2 {
   commands = new Commands();    
   
   getTheAppButton = '#submitBtn';
   phoneNumberLct = '#phoneNumber';
   phoneNumberTextLct = '//div[contains(text(), "enter a valid phone")]';
   listYourPropertyLink = '//div[text() = "List your property"]';
   likeToListLct = '//p[contains(text(), "What would y")]';
   lodgingLct = '#classification_lodging';
   privateResidenceLct = '#classification_privateResidence';
   step1Of3Lct = '//div[text() = "Step 1 of 3"]';
   seeHowMuchLct = '//h1[contains(text(), "much you could ear")]';
   increaseBedroomsBtn = '//button[@aria-label = "Increase bedrooms"]';
   increaseBathroomsBtn = '//button[@aria-label = "Increase bathrooms"]';
   nextButton = '#propertyInfoNextBtn';
   step2Of3Lct = '//div[text() = "Step 2 of 3"]';
   whereIsYourPropertyLct = '//h1[contains(text(), "ur property locat")]';
   enterAddressLct = '#locationTypeAhead';
   myAddressLct = '//li[contains(text(), "1211 6-")]';
   mapLct = '//div[@role = "region"]';
   pinInGraphLct = '//img[@draggable = "false"]'
   pinLocationMsg = '//div[contains(text(), "cation may no")]';
   datesLocator = '#date_form_field-btn'
   currentMonthBtn = 'button[@data-stid = "date-picker-paging"//#prevMonth-title'



   async ScrollIntorView() {
    await this.commands.ScrollIntorView(this.getTheAppButton);
 };

 async typeInPhoneNumberLct(phoneNumber) {
    await this.commands.typeInWebElement(this.phoneNumberLct, phoneNumber);
 };

 async clickGetTheAppBtn() {
    await this.commands.clickWebElement(this.getTheAppButton);
 };
 async isPhoneMessageDisplayed() {
    return await this.commands.isWebElementDisplayed(this.phoneNumberTextLct);
 };
 async clickListYourProperty() {
    await this.commands.clickWebElement(this.listYourPropertyLink);
 };

 async isLikeToListDisplayed() {
   return await this.commands.isWebElementDisplayed(this.likeToListLct);
 };
 async areLodgingAndPrivateResidenceDisplayed() {
   await this.commands.isWebElementDisplayed(this.lodgingLct);
   await this.commands.isWebElementDisplayed(this.privateResidenceLct);
 };

 async clickPrivateResidence() {
   await this.commands.clickWebElement(this.privateResidenceLct);
 };

 async isStep1Of3Displayed() {
   await this.commands.isWebElementDisplayed(this.step1Of3Lct);
 };

 async isSeeHowMuchDisplayed() {
   await this.commands.isWebElementDisplayed(this.seeHowMuchLct);
 };

 async clickIncreaseBedroomsBtn() {
   for (i = 0; i < 4; i++)
   await this.commands.clickWebElement(this.increaseBedroomsBtn);
   await browser.pause(2000);
 };

 async clickIncreaseBathroomsBtn() {
   for (i = 0; i < 3; i++)
   await this.commands.clickWebElement(this.increaseBathroomsBtn);
   await browser.pause(2000);
 };

 async clickNextButton() {
   await this.commands.clickWebElement(this.nextButton);
 };

 async isStep2Of3Displayed() {
   await this.commands.isWebElementDisplayed(this.step2Of3Lct);
 };

 async isWhereIsYourPropertyDisplayed() {
   await this.commands.isWebElementDisplayed(this.whereIsYourPropertyLct);
 }; 

 async typeInEnterAddressLct(address) {
   await this.commands.typeInWebElement(this.enterAddressLct, address);
 };

 async selectAddressFromAutoSuggestion(selectThis) {
   await this.commands.selectFromAutoSuggestions(this.myAddressLct, selectThis);
 };

 async isGraphDisplayed() {
   await this.commands.isWebElementDisplayed(this.mapLct);
 }; 

 async isPinInGraphDisplayed() {
   await this.commands.isWebElementDisplayed(this.pinInGraphLct);
 }; 

 async isPinLocationMsgDisplayed() {
   await this.commands.isWebElementDisplayed(this.pinLocationMsg);
 }; 



 async clickDatesLocator() {
  await this.commands.clickWebElement(this.datesLocator);
 };

 async clickCurrentMonthBtn() {
  await this.commands.clickWebElement(this.currentMonthBtn);
 };





}   

module.exports = HomepageProject2; 