"use strict";

const path = require("path");

exports.config = {
    directConnect: true,
    baseUrl: 'https://formy-project.herokuapp.com',
    capabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-safe-mode']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: [
        path.resolve('./features/*.feature')
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().setSize(1920, 1080);
    },

    cucumberOpts: {
        require: [
            path.resolve('./framework/step_definitions/**.js'),
            path.resolve('./framework/support/world.js')
        ],
        format: ['json:cucumber.json'],
        tags: []
    },
    allScriptsTimeout: 60 * 1e3,
    getPageTimeout: 60 * 1e3,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true
};