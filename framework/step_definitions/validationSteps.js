'use strict';

const {Then} = require('cucumber');
const query = require('../support/query');
const state = require('../support/state');
const expect = require("chai").expect;

Then(/^the user should be on "(.*)" page$/, async function (page) {
    state.setState(page);
    return expect(await browser.getCurrentUrl()).to.equal(state.getUrl());
});

Then(/^the page title should be "(.*)"$/, async function (title) {
    return expect(await browser.getTitle()).to.equal(title);
});

Then(/^the text of (input )?element "(.+)" should (not )?be "(.*)"$/, async function (elmType, elm, isNot, value) {
    const elmText = await (elmType ? query.getElement(elm).getAttribute('value') : query.getElement(elm).getText());
    if (isNot) {
        return expect(elmText).to.not.equal(value);
    }
    return expect(elmText).to.equal(value);
});

Then(/^the element "(.+)" should( not)? be displayed on the page$/, async function (elm, isNot) {
    return expect(await query.getElement(elm).isDisplayed()).to.be[!isNot];
});