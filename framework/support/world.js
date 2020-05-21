"use strict";

const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const timing = require('./timing');

setWorldConstructor(class {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
        setDefaultTimeout(timing.everyStepTimeout);
        this.timing = timing;
    }
});