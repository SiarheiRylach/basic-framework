'use strict';

const MasterPage = require('../support/master.page');

class CompleteWebFormPage extends MasterPage{

    constructor() {
        super();
        this.url = this.url + '/form';
        this['First name field'] = element(by.id('first-name'));
        this['Last name field'] = element(by.id('last-name'));
        this['Job title field'] = element(by.id('job-title'));
        this['Highest level Education radio-buttons'] = element.all(by.xpath('//label[text()="Highest level of education"]/../../..//input'));
        this['Sex checkboxes'] = element.all(by.xpath('//label[text()="Sex"]/../../..//input'));
        this['Years experience dropdown'] = element(by.id('select-menu'));
        this['Years experience items'] = element.all(by.css('#select-menu option'));
        this['Date picker'] = element(by.id('datepicker'));
        this['Submit button'] = element(by.cssContainingText('.btn', 'Submit'));
    };
}

module.exports = CompleteWebFormPage;