const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const openGovPage = client.page["openGov-login-page"]();

Given(/^I login to OpenGOV page$/, async () => {
  try {
    return await openGovPage.navigate();
  } catch (err) {
    throw err;
  }
});

When(/^I redirected to CMT page$/, async () => {
  try {
    client.pause(20000)
    return await openGovPage.switchToCMTPage();
  } catch (err) {
    throw err;
  }
});

Then(/^Enter the User credentials$/, () => {
  try {
    return openGovPage.enterUserCredentials();
  } catch (err) {
    throw err;
  }
});

Then(/^Verify the main page title$/, () => {
  try {
    return openGovPage.verifyMainPageTitle();
  } catch (err) {
    throw err;
  }
});
