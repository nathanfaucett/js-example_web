var immutable = require("immutable"),
    extend = require("@nathanfaucett/extend"),
    createActions = require("../utils/createActions");


module.exports = sizeStore;


function sizeStore(state, action) {
    switch (action.type) {
        case sizeStore.UPDATE:
            return update(state, action.width, action.height);
    }
    return state;
}

function update(state, width, height) {
    return state
        .set("width", width)
        .set("height", height);
}

extend(sizeStore, createActions("sizeStore", [
    "UPDATE"
]));

sizeStore.initialState = function() {
    return new immutable.Map({
        width: window.innerWidth,
        height: window.innerHeight
    });
};