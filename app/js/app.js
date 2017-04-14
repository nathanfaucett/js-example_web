var React = require("react"),
    ReactDOM = require("react-dom"),

    i18n = require("@nathanfaucett/i18n"),
    page = require("@nathanfaucett/page"),
    layers = require("@nathanfaucett/layers_browser"),
    eventListener = require("@nathanfaucett/event_listener"),

    createDispatcher = require("./utils/createDispatcher"),
    createStates = require("./utils/createStates"),
    route = require("./utils/route"),

    App = require("./components/App"),
    config = require("./config"),
    stores = require("./stores");


var app = global.app = exports;


app.page = page;
app.stores = stores;
app.dispatcher = createDispatcher(stores);
app.router = new layers.Router();
app.route = route;
app.components = {};
app.states = createStates(app.dispatcher.setState);

app.init = function() {

    eventListener.on(window, "resize orientationchange", function onResize() {
        app.dispatcher.dispatch({
            type: stores.sizeStore.UPDATE,
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

    page.setHtml5Mode(config.html5Mode);
    page.on("request", function onRequest(ctx) {
        app.router.handler(ctx, function onHandle(error, ctx) {
            if (!ctx.forceEnd) {
                ctx.name = "not_found";
            }

            app.dispatcher.dispatch({
                type: stores.routeStore.UPDATE,
                error: error,
                ctx: ctx
            });
        });
    });
    page.listen();
    console.log(page);

    i18n.throwMissingError(config.throwMissingTranslationError);

    app.dispatcher.addListener(function onChange(state) {
        app.states.record(state);
    });

    app.dispatcher.addListener(function onFirst() {
        ReactDOM.render(React.createElement(App), document.getElementById("app"));
        app.dispatcher.removeListener(onFirst);
    });
};