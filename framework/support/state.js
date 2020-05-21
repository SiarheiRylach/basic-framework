"use strict";

const path = require('path');
const pages = require(path.resolve('./ui/support/pages'));

class State {
    constructor() {
        this.state = {};
    }

    setState(pageName) {
        this.state = pages[pageName];
    }

    getState() {
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }
}

module.exports = new State();