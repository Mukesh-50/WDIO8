exports.config = {

    runner: 'local',


    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ["--headless", "--disable-gpu"],
        }
    }
    ],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',


    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 3000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    //services: ['selenium-standalone'],
    services: ['chromedriver'],


    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },

}
