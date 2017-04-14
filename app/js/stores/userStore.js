var immutable = require("immutable"),
    extend = require("@nathanfaucett/extend"),
    createActions = require("../utils/createActions");


module.exports = userStore;


function userStore(state, action) {
    switch (action.type) {
        case userStore.SET_LOCALE:
            return setLocale(state, action.locale);
        case userStore.SET_LOCALE_CACHE:
            return setLocaleCache(state, action.locale);
    }
    return state;
}

function setLocale(state, locale) {
    return state
        .set("locale", locale);
}

function setLocaleCache(state, locale) {
    return state.set("localeCache",
        state.get("localeCache").set(locale, true));
}

extend(userStore, createActions("userStore", [
    "SET_LOCALE",
    "SET_LOCALE_CACHE"
]));

userStore.initialState = function() {
    return new immutable.Map({
        locale: "en",
        localeCache: new immutable.Map()
    });
};