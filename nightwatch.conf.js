const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');
const ieDriver = require('iedriver');
const edgeDriver = require('edgedriver');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  page_objects_path: 'page_objects',
  test_settings: {
    default: {
      test_workers: {
        enabled: true,
        workers : 2,
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
          'webdriver.gecko.driver': geckoDriver.path,
          'webdriver.ie.driver': ieDriver.path,
          'webdriver.edge.driver': edgeDriver.path
        }
      }
    },
    chromeHeadless: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          args: ['--headless']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true,
        'goog:chromeOptions': {
          args: ['--window-size=1024,768'],
          w3c: false
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    },
    edge: {
      desiredCapabilities: {
        platform: "Windows 10",
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true
      }
    },
    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    }
  }
}
