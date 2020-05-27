'use strict';

const MasterPage = require('../support/master.page');

class AutocompletePage extends MasterPage{

    constructor() {
        super();
        this.url = this.url + '/autocomplete';
        this['Autocomplete Title'] = element(by.css('h1'));
        this['Address'] = element(by.css('#autocomplete'));
        this['Street address'] = element(by.css('#street_number'));
        this['Street address 2'] = element(by.css('#route'));
        this['City'] = element(by.css('#locality'));
        this['State'] = element(by.css('#administrative_area_level_1'));
        this['Zip code'] = element(by.css('#postal_code'));
        this['Country'] = element(by.css('#country'));
    };
}

module.exports = AutocompletePage;