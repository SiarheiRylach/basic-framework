'use strict';

const HomePage = require('../po/home.page');
const CompleteWebFormPage = require('../po/completeWebForm.page');
const ThanksPage = require('../po/thanks.page');


class Pages {
    constructor() {
        this['Home'] = new HomePage();
        this['Complete Web Form'] = new CompleteWebFormPage();
        this['Thanks'] = new ThanksPage();
    };
}

module.exports = new Pages();