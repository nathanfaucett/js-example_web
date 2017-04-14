var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    propTypes = require("prop-types"),
    Header = require("./Header"),
    Footer = require("./Footer");


var HomePrototype;


module.exports = Home;


function Home(props, context) {
    React.Component.call(this, props, context);
}
inherits(Home, React.Component);
HomePrototype = Home.prototype;

Home.contextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired,
    i18n: propTypes.func.isRequired
};

HomePrototype.render = function() {
    return (
        React.createElement("div", {
                className: "Home"
            },
            React.createElement(Header, null),
            React.createElement("p", null, this.context.i18n("app.name")),
            React.createElement(Footer, null)
        )
    );
};