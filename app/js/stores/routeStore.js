var immutable = require("immutable"),
    extend = require("@nathanfaucett/extend"),
    createActions = require("../utils/createActions");


module.exports = routeStore;


function routeStore(state, action) {
    switch (action.type) {
        case routeStore.UPDATE:
            return update(state, action.error, action.ctx);
    }
    return state;
}

function update(state, error, ctx) {
    return state
        .set("error", error)
        .set("fullUrl", ctx.fullUrl)
        .set("pathname", ctx.pathname)
        .set("query", ctx.query)
        .set("params", ctx.params)
        .set("name", ctx.name);
}

extend(routeStore, createActions("routeStore", [
    "UPDATE"
]));

routeStore.initialState = function() {
    return new immutable.Map({
        name: "index"
    });
};