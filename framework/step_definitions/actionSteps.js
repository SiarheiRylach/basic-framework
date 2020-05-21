"use strict";

const {Given, When} = require('cucumber');
const state = require('../support/state');
const query = require('../support/query');
const EC = protractor.ExpectedConditions;

Given(/^the user is on "(.*)" page$/, page => {
    state.setState(page);
    return state.getState().openPage();
});

When(/^the element "(.*)" is clicked( with waiting before)?$/, async function (elm, isWait) {
    if(isWait) {
        await browser.wait(EC.visibilityOf(query.getElement(element)), this.timing.explicitTimeout);
    }
    return query.getElement(elm).click();
});

When(/^the text "(.*)" is typed in "(.*)"( with waiting before)?$/, async function (text, elm,isWait) {
    if(isWait) {
        await browser.wait(EC.visibilityOf(query.getElement(elm)), this.timing.explicitTimeout);
    }
    return query.getElement(elm).clear().sendKeys(text);
});

When(/^the browser waits "(.*)" seconds$/,  function (timeout) {
    return browser.sleep(+timeout * 1e3);
});

When(/^the page is reloaded$/, function () {
    return browser.refresh();
});

When(/^the element "(.*)" is awaited to( not)? be visible$/, function(element, isNot) {
    if (isNot) {
        return browser.wait(EC.invisibilityOf(query.getElement(element)), this.timing.explicitTimeout);
    } else {
        return browser.wait(EC.visibilityOf(query.getElement(element)), this.timing.explicitTimeout);
    }
});



When(/^the element "(.*)" is hovered$/, function(element) {
    return browser.actions().mouseMove(query.getElement(element)).perform();
});

When(/^the browser is awaited to page title contains "(.*)"$/, function (fragment) {
    return browser.wait(EC.titleContains(fragment), this.timing.explicitTimeout);
});

When(/^the view is scrolled to the element "(.+)"$/, async function (elm) {
    await browser.executeScript("arguments[0].scrollIntoView();", query.getElement(elm).getWebElement());
    return browser.wait(EC.visibilityOf(query.getElement(elm)), this.timing.explicitTimeout);
});