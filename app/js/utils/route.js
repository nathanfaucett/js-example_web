var app = require("../app");


module.exports = route;


function route(path, state, Component) {

    app.components[state] = Component;

    app.router.route(path, function onRoute(ctx, next) {
        ctx.name = state;
        ctx.end();
        next();
    });
}