var indexOf = require("@nathanfaucett/index_of"),
    arrayForEach = require("@nathanfaucett/array-for_each"),
    objectForEach = require("@nathanfaucett/object-for_each"),
    immutable = require("immutable");


module.exports = createDispatcher;


function createDispatcher(stores) {
    var _state = new immutable.Map(),
        _reducers = [],
        _listeners = [],
        dispatcher = {};


    function addStore(storeFunction, storeKey) {
        _reducers.push(function wrappedStore(state, action) {
            var prevStoreState = state.get(storeKey);
            nextStoreState = storeFunction(prevStoreState, action);

            return state.set(storeKey, nextStoreState);
        });
    }

    function initialState(storeFunction, storeKey) {
        _state = _state.set(storeKey, storeFunction.initialState());
    }

    objectForEach(stores, addStore);
    objectForEach(stores, initialState);


    dispatcher.addListener = function(listener) {
        _listeners.push(listener);
    };
    dispatcher.removeListener = function(listener) {
        var index = indexOf(_listeners, listener);
        _listeners.splice(index, 1);
    };

    function callListener(listener) {
        listener(_state);
    }

    dispatcher.dispatch = function(action) {
        var state = _state,
            reducers = _reducers,
            i = -1,
            il = reducers.length - 1;

        while (i++ < il) {
            state = reducers[i](state, action);
        }

        dispatcher.setState(state);
    };

    dispatcher.getState = function() {
        return _state;
    };

    dispatcher.setState = function(state) {
        _state = state;
        arrayForEach(_listeners, callListener);
    };

    return dispatcher;
}