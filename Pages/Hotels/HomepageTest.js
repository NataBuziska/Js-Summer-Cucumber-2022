const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const Commands = require("../Commands");

class HomepageTest{
  commands = new Commands();
  linkLearnAbout = '//a[contains(text(), "earn about")]';  
  joinNowBtn = '//a[contains(text(), "Join Now")]';
  emailLocator = '#signupFormEmailInput';
  firstNameLocator = '#signupFormFirstNameInput';
  lastNameLocator = '#signupFormLastNameInput';
  passwordLocator = '#signupFormPasswordInput';
  continueBtnLocator = "//form[@name='signupForm']//div[@class]";

    async ScrollIntorView() {
    await this.commands.ScrollIntorView(this.linkLearnAbout);
 };
    async clickLinkLearnAbout() {
    await this.commands.clickWebElement(this.linkLearnAbout);
 };
    async clickJoinNowBtn() {
    await this.commands.clickWebElement(this.joinNowBtn);
 };
 async isContinueBtnEnabled() {

    return await this.commands.isWebElementEnabled(this.continueBtnLocator);
  }

   
}
module.exports = HomepageTest;