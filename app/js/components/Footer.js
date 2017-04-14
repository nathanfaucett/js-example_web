var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    propTypes = require("prop-types");


var FooterPrototype;


module.exports = Footer;


function Footer(props, context) {
    React.Component.call(this, props, context);
}
inherits(Footer, React.Component);
FooterPrototype = Footer.prototype;

Footer.contextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired,
    i18n: propTypes.func.isRequired
};

FooterPrototype.render = function() {
    return (
        React.createElement("div", {
                className: "Footer"
            },
            React.createElement("p", null, "Footer")
        )
    );
};