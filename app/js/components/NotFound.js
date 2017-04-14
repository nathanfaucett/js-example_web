var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    propTypes = require("prop-types"),
    Header = require("./Header"),
    Footer = require("./Footer");


var NotFoundPrototype;


module.exports = NotFound;


function NotFound(props, context) {
    React.Component.call(this, props, context);
}
inherits(NotFound, React.Component);
NotFoundPrototype = NotFound.prototype;

NotFound.contextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired,
    i18n: propTypes.func.isRequired
};

NotFoundPrototype.render = function() {
    return (
        React.createElement("div", {
                className: "NotFound"
            },
            React.createElement(Header, null),
            React.createElement("p", null, this.context.i18n("errors.not_found")),
            React.createElement(Footer, null)
        )
    );
};