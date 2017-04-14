var Home = require("../components/Home"),
    Contact = require("../components/Contact"),
    NotFound = require("../components/NotFound"),

    i18nLoader = require("./middleware/i18nLoader"),

    app = require("../app");


app.router.use(i18nLoader);

app.route("/", "index", Home);
app.route("/contact", "contact", Contact);
app.route("/not_found", "not_found", NotFound);