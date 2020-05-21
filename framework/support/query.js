"use strict";

const state = require('./state');

class Query {
    constructor() {
        this.delimiter = " in ";
        this.arrayDelimiter = " of ";
    }

    /**
     *
     * @param elementName {String} Name of the component in page object
     * @returns {ElementFinder || ElementArrayFinder}
     */
    getElement(elementName) {
        if (elementName.includes(this.delimiter)) {
            let elements = elementName.split(this.delimiter).reverse();
            let elementState = state.getState();
            elements.forEach(elm => {
                if (elm.includes(this.arrayDelimiter)){
                    let arr = elm.split(this.arrayDelimiter).reverse();
                    elementState = this._getElementByPos(arr[0], arr[1], elementState);
                } else{
                    elementState = elementState[elm];
                }
            });
            return elementState;
        } else {
            if (elementName.includes(this.arrayDelimiter)){
                let arr = elementName.split(this.arrayDelimiter).reverse();
                return this._getElementByPos(arr[0], arr[1], state.getState());
            }else {
                return state.getState()[elementName];
            }
        }
    }


    _getElementPositionInArray(element){
        let position = element.match(/#?(\d+)/)[1];
        return parseInt(position) - 1;
    }

    _getElementByPos(root, element, state){
        return state[root].get(this._getElementPositionInArray(element));
    }


}

module.exports = new Query();