'use strict';

class MasterPage {

    constructor() {
        this.url = 'https://formy-project.herokuapp.com';
    };

    openPage(){
        return browser.get(this.url);
    }
}

module.exports = MasterPage;