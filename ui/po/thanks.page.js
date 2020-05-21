'use strict';

const MasterPage = require('../support/master.page');

class ThanksPage extends MasterPage{

    constructor() {
        super();
        this.url = this.url + '/thanks';
        this['Content header'] = element(by.tagName('h1'));
        this['Alert'] = element(by.css('.alert'));
    };
}

module.exports = ThanksPage;