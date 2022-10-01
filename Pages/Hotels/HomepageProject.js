const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const Commands = require("../Commands");

 class HomepageProject{
 commands = new Commands();
 linkSignIn = '//button[text()="Sign in"]';
 signInBtn = '//a[contains(@data-stid, "header-account-signin")]'
 signUpBtn = '//a[contains(@data-stid, "header-account-signup")]'
 emailLocator = '#loginFormEmailInput';
 passwordLocator = '#loginFormPasswordInput';
 signInBtn2 = '#loginFormSubmitButton';
 messageLocator = '#loginFormEmailInput-error';
 termsAndCdtsLocator = '//a[contains(text(), "erms and Condi")]';
 privacyStmtLocator = '//a[contains(text(), "ivacy State")]';
 sighUpEmailLct = '#signupFormEmailInput';
 emailAddressMsg = '//div[contains(text(), "valid email add")]';
 signUpFirstName = '#signupFormFirstNameInput';
 firstNameMsg = '#signupFormFirstNameInput-error';
 signUpLastName = '#signupFormLastNameInput';
 lastNameMsg = '#signupFormLastNameInput-error';
 singUpPswLct = '#signupFormPasswordInput';
 keepMeSignedLct = '#signUpFormRememberMeCheck';
 continueBtn = '#signupFormSubmitButton';
 feedbackLink = '//a[text() = "Feedback"]';
 submitButton = '#submit-button';
 errorMsg = '//p[contains(text(), "the required information")]';
 pageRatingButtons = '//div[@class = "radio-button"]';
 pageCommentsLct = '#verbatim';
 howLikelyLct = '//option[contains(text(), "Highly likely"]';
 travelesLct = '//button//span[text() = "Travelers:"]';
 adultsPlusBtn = '//svg[contains(@aria-label, "number of adults in ro")]';
 childrenPlusBtn = '//svg[contains(@aria-label, "number of children in roo")]';
 ageChd1Lct = '#age-traveler_selector_children_age_selector-0-0//option[text() = "4"]';
 ageChd2Lct = '#age-traveler_selector_children_age_selector-0-1//option[text() = "Under 1"]';
 ageChd3Lct = '#age-traveler_selector_children_age_selector-0-2//option[text() = "7"]';
 doneButton = '#traveler_selector_done_button';
 allTravelersLct = '//button//span[contains(text(), "9 travelers")]';
 oneStarBtn = '//label[@for = "page-rating-1"]';
 twoStarBtn = '//label[@for = "page-rating-2"]';
 threeStarBtn = '//label[@for = "page-rating-3"]';
 fourStarBtn =  '//label[@for = "page-rating-4"]';
 fiveStarBtn = '//label[@for = "page-rating-5"]';
 haveYouBookedLct1 = '//span[@data-localization = "booked-before-yes"]';
 haveYouBookedLct2 = '//span[@data-localization = "booked-before-no"]';
 didYouAccomplishLct1 = '//span[@data-localization = "were-you-successful-yes"]';
 didYouAccomplishLct2 = '//span[@data-localization = "were-you-successful-no"]';
 feedbackMsg = '//h5[contains(text(), "UR FEEDBA")]';

 async clickLinkSignIn() {
    await this.commands.clickWebElement(this.linkSignIn);
 };

 async clickSignInBtn() {
    await this.commands.clickWebElement(this.signInBtn);
    await this.commands.waitForDisplayed();
 };

 async clickSignUpBtn() {
    await this.commands.clickWebElement(this.signUpBtn);
    await this.commands.waitForDisplayed();
 };

 async typeInEmailLocator(loginEmail) {
    await this.commands.typeInWebElement(this.emailLocator, loginEmail);
   
 };
async typeInPasswordLocator(loginPassword) {
    await this.typeInWebElement(this.passwordLocator, loginPwd);
    await browser.pause(2000);
 };
async isEnabledSignInBtn2() {
    await this.commands.isWebElementEnabled(this.signInBtn2);
 };

 async isMessageDisplayed() {
    return await this.commands.isWebElementDisplayed(this.messageLocator);
 };

 async getLinks(linkName) {
    await this.commands.ClickWebElement(`=${linkName}`);
 };
 async getNumberOfWindows() {
    return await this.commands.getWindowsCount();
 };
 async typeInSignUpEmailLocator(signUpEmail) {
    await this.commands.typeInWebElement(this.sighUpEmailLct, signUpEmail);
 };
 async isEmailAddressMsgDisplayed() {
   return await this.commands.isWebElementDisplayed(this.emailAddressMsg);
 };
 async typeInSignUpFirstName(signUpFirstName) {
   await this.commands.typeInWebElement(this.signUpFirstName, firstName);
 };
 async isFirstNameMsgDisplayed() {
   return await this.commands.isWebElementDisplayed(this.firstNameMsg);
 };

 async typeInSignUpLastName(signUpLastName) {
   await this.commands.typeInWebElement(this.signUpFirstName, firstName);
 };
 async isLastNameMsgDisplayed() {
   return await this.commands.isWebElementDisplayed(this.lastNameMsg);
 };
 async typeInSignUpPswlLocator(singUpPswLct) {
   await this.commands.typeInWebElement(this.singUpPswLct, signUpPsw);
 };
 async isKeepMeSignedDisplayedAndEnabled() {
   return await this.commands.isWebElementDisplayed(this.keepMeSignedLct);
   return await this.commands.isWebElementEnabled(this.keepMeSignedLct);
 };
 async isContinueBtnDisplayed() {
   return await this.commands.isWebElementDisplayed(this.keepMeSignedLct);
 };
 async isContinueBtnEnabled() {
   return await this.commands.isWebElementEnabled(this.keepMeSignedLct);
 };
 async clickFeedbackLink() {
   await this.commands.clickWebElement(this.feedbackLink);
   await browser.pause(2000);
 }; 
 async switchToWindowFeedback() {
   await this.commands.switchToWindowHandle(handle[1]);
 };
 
 async isStarRatingEnabled() {
  let isEnabled = false;
  switch (starRating){
      case '1*':
          isEnabled = await this.commands.isWebElementEnabled(this.oneStarBtn);
          break;
      case '2*':
          isEnabled = await this.commands.isWebElementEnabled(this.twoStarBtn);
          break;
      case '3*':
          isEnabled = await this.commands.isWebElementEnabled(this.threeStarBtn);
          break;   
      case '4*':
          isEnabled = await this.commands.isWebElementEnabled(this.fourStarBtn);
          break;    
      case '5*':
            isEnabled = await this.commands.isWebElementEnabled(this.fiveStarBtn);
            break;     
      default:
          break;
  }
  return isEnabled;
 };
 
 async click5StarButton() {
   await this.commands.clickWebElement(this.fiveStarBtn);
 };


 async clickSubmitButton() {
    await this.commands.clickWebElement(this.submitButton);
 };
 async isErrorMsgDisplayed() {
   return await this.commands.isWebElementDisplayed(this.errorMsg);
 };
 
 async typeInPageComments(pageComments) {
  await this.commands.typeInWebElement(this.pageCommentsLct, pageComments);
 };

 async selectHowLikelyFromDpn(selectThis) { 
  await this.commands.selectFromDropdown(this.howLikelyLct, selectThis);
 };

 async isPriorToThisVisitEnabled() {
  let isEnabled = false;
  switch (answer){
      case 'Yes':
          isEnabled = await this.commands.isWebElementEnabled(this.haveYouBookedLct1);
          break;
      case 'No':
          isEnabled = await this.commands.isWebElementEnabled(this.haveYouBookedLct2);
          break;
      default:
           break;
    }
    return isEnabled;
   };

   async clickPriorToVisitButton() {
    await this.commands.clickWebElement(this.haveYouBookedLct1);
 };
 
 async isDidYouAccomplishEnabled() {
  let isEnabled = false;
  switch (answer){
      case 'Yes':
          isEnabled = await this.commands.isWebElementEnabled(this.didYouAccomplishLct1);
          break;
      case 'No':
          isEnabled = await this.commands.isWebElementEnabled(this.didYouAccomplishLct2);
          break;
      default:
            break;
    }
    return isEnabled;
   };

   async clickDidYouAccomplishButton() {
    await this.commands.clickWebElement(this.didYouAccomplishLct1);
   };
   async isFeedbackMsgDisplayed() {
    await this.commands.isWebElementDisplayed(this.feedbackMsg);
   };


   async clickTravelersBtn() {
   await this.commands.clickWebElement(this.travelesLct);
   await this.commands.waitForDisplayed();
 };

 async clickAdultsPlusBtn() {
   for (i = 0; i < 6; i++)
   await this.commands.clickWebElement(this.adultsPlusBtn);
   await browser.pause(2000);
 };

 async clickChildrenPlusBtn() {
   for (i = 0; i < 3; i++)
   await this.commands.clickWebElement(this.childrenPlusBtn);
   await browser.pause(2000);
 };

 async selectAgeCld1FromAutoSuggestion(selectThis) {
   await this.commands.selectFromAutoSuggestions(this.ageChd1Lct, selectThis);
 };

 async selectAgeCld2FromAutoSuggestion(selectThis) {
   await this.commands.selectFromAutoSuggestions(this.ageChd2Lct, selectThis);
 };

 async selectAgeCld3FromAutoSuggestion(selectThis) {
   await this.commands.selectFromAutoSuggestions(this.ageChd3Lct, selectThis);
 };

 async clickDoneLink() {
   await this.commands.clickWebElement(this.doneButton);
   await browser.pause(2000);
 }; 

 async getTextAllTravelers() {
   return await this.commands.getTextFromWebElement(this.allTravelersLct).substring(0,1);
 }; 



 
}
module.exports = HomepageProject;