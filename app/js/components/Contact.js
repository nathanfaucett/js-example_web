var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    propTypes = require("prop-types"),
    Header = require("./Header"),
    Footer = require("./Footer");


var ContactPrototype;


module.exports = Contact;


function Contact(props, context) {
    React.Component.call(this, props, context);
}
inherits(Contact, React.Component);
ContactPrototype = Contact.prototype;

Contact.contextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired
};

ContactPrototype.render = function() {
    return (
        React.createElement("div", {
                className: "Contact"
            },
            React.createElement(Header, null),
            React.createElement("p", null, "Contact"),
            React.createElement(Footer, null)
        )
    );
};