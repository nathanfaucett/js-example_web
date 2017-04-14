var i18n = require("@nathanfaucett/i18n"),
    request = require("@nathanfaucett/request"),
    isString = require("@nathanfaucett/is_string"),
    app = require("../../app");


module.exports = i18nLoader;


function i18nLoader(ctx, next) {
    var userStore = app.dispatcher.getState().get("userStore");
    var locale = userStore.get("locale");

    if (userStore.get("localeCache").get(locale) === true) {
        next();
    } else {
        request.get("locale/" + locale + ".json", {
            success: function(response) {
                if (isString(response.data)) {
                    response.data = JSON.parse(response.data);
                }
                i18n.add(locale, response.data);

                app.dispatcher.dispatch({
                    type: app.stores.userStore.SET_LOCALE_CACHE,
                    locale: locale
                });

                next();
            },
            error: function(response) {
                next(response.data);
            }
        });
    }
}