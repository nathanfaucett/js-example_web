var React = require("react"),
    i18n = require("@nathanfaucett/i18n"),
    fastSlice = require("@nathanfaucett/fast_slice"),
    inherits = require("@nathanfaucett/inherits"),
    propTypes = require("prop-types"),
    app = require("../app");


var AppPrototype;


function i18nWrapper(key) {
    return i18n(
        app.dispatcher.getState().get("userStore").get("locale"),
        key,
        fastSlice(arguments, 1)
    );
}


module.exports = App;


function App(props, context) {
    var _this = this;

    React.Component.call(this, props, context);

    this.state = {
        ctx: app.dispatcher.getState().get("routeStore"),
        size: app.dispatcher.getState().get("sizeStore")
    };

    this.onChange = function() {
        return _this._onChange();
    };
}
inherits(App, React.Component);
AppPrototype = App.prototype;

App.childContextTypes = {
    ctx: propTypes.object.isRequired,
    size: propTypes.object.isRequired,
    i18n: propTypes.func.isRequired
};

AppPrototype.getChildContext = function() {
    var state = this.state;

    return {
        ctx: state.ctx,
        size: state.size,
        i18n: i18nWrapper
    };
};

AppPrototype._onChange = function() {
    this.setState({
        ctx: app.dispatcher.getState().get("routeStore"),
        size: app.dispatcher.getState().get("sizeStore")
    });
};

AppPrototype.componentDidMount = function() {
    app.dispatcher.addListener(this.onChange);
};

AppPrototype.componentWillUnmount = function() {
    app.dispatcher.removeListener(this.onChange);
};

AppPrototype.render = function() {
    var Component = app.components[this.state.ctx.get("name")];

    return (
        React.createElement("div", {
                className: "App"
            },
            React.createElement(Component)
        )
    );
};