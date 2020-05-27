'use strict';

const HomePage = require('../po/home.page');
const CompleteWebFormPage = require('../po/completeWebForm.page');
const ThanksPage = require('../po/thanks.page');
const AutocompletePage = require('../po/autocomplete.page');


class Pages {
    constructor() {
        this['Home'] = new HomePage();
        this['Complete Web Form'] = new CompleteWebFormPage();
        this['Thanks'] = new ThanksPage();
        this['Autocomplete'] = new AutocompletePage();
    };
}

module.exports = new Pages();