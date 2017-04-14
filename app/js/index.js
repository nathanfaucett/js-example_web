var environment = require("@nathanfaucett/environment"),
    eventListener = require("@nathanfaucett/event_listener"),
    app = require("./app");


require("./routes");


eventListener.on(environment.window, "load DOMContentLoaded", function() {
    app.init();
});