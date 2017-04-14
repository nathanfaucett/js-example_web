var React = require("react"),
    inherits = require("@nathanfaucett/inherits"),
    arrayMap = require("@nathanfaucett/array-map"),
    propTypes = require("prop-types");


var LINKS = [{
        href: "/",
        name: "home"
    }, {
        href: "/contact",
        name: "contact"
    }],
    HeaderPrototype;


module.exports = Header;


function Header(props, context) {

    React.Component.call(this, props, context);
}
inherits(Header, React.Component);
HeaderPrototype = Header.prototype;

Header.contextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired
};

HeaderPrototype.render = function() {
    return (
        React.createElement("div", {
                className: "Header"
            },
            arrayMap(LINKS, function map(link) {
                return React.createElement("a", {
                    key: link.name,
                    href: link.href
                }, link.name);
            })
        )
    );
};