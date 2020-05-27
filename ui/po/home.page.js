'use strict';

const MasterPage = require('../support/master.page');

class HomePage extends MasterPage{

    constructor() {
        super();
        this.url = this.url + '/';
        this['Complete Web Form link'] = element(by.cssContainingText('.btn', new RegExp('^Complete Web Form$')));
        this['Autocomplete link'] = element(by.cssContainingText('.btn', new RegExp('^Autocomplete$')));
    };
}

module.exports = HomePage;