const path = require('path');
const cucumberJunitConvert = require('cucumber-junit-convert');

cucumberJunitConvert.convert({
    inputJsonFile: path.resolve('cucumber.json'),
    outputXmlFile: path.resolve('cucumber.xml')
});