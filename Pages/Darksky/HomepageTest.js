const Commands = require("../Commands");

class Homepage {

    commands = new Commands();
    timeLineLocator = '//div[@class="scroll-container"]';
    todayBtn = '//circle[@class="cls-1"]';
    minTempLocator = '//span[@class="minTemp"]';
    maxTempLocator = '//span[@class="maxTemp"]';
    minTempLocator2 = '//span[@class="higtTemp swip"]//span';
    maxTempLocator2 = '//span[@class="lowTemp swap"]//span';

     async ScrollIntorView() {
        await this.commands.ScrollIntorView(this.timeLineLocator);
     };
        async clickTodayBtn() {
        await this.commands.clickWebElement(this.todayBtn);

     }
    }

module.exports = HomepageTest;