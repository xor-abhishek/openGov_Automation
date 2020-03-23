const fs = require("fs");
const path = require("path");
const {
  setDefaultTimeout,
  AfterAll,
  BeforeAll,
  After
} = require("cucumber");
const {
  client,
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver
} = require("nightwatch-api");
const reporter = require("cucumber-html-reporter");
const attachedScreenshots = getScreenshots();

function getScreenshots() {
  try {
    const folder = path.resolve(__dirname, "screenshots");
    const screenshots = fs
      .readdirSync(folder)
      .map(file => path.resolve(folder, file));
    return screenshots;
  } catch (err) {
    return [];
  }
}

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({
      env: process.env.NIGHTWATCH_ENV || "chromeHeadless"
    }),
    await createSession()
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report/cucumber_report.json",
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "POC"
      }
    });
  }, 1000);
});

After(async () => {
  return Promise.all(
    getScreenshots()
    .filter(file => !attachedScreenshots.includes(file))
    .map(file => {
      attachedScreenshots.push(file);
      return this.attach(fs.readFileSync(file), "image/png");
    })
    /* ,
    await client
      .execute(
        `
        localStorage.clear();
        sessionStorage.clear();
      `
      )
      .deleteCookies()
      .refresh()
    ) */
  )
})