module.exports = createStates;


function createStates(setState) {
    var states = {},
        _states = [],
        _settingState = false,
        _stateIndex = 0;


    states.setState = function(state) {
        _settingState = true;
        setState(state);
        _settingState = false;
    };

    states.prevState = function() {
        if (_stateIndex > 0) {
            _stateIndex -= 1;
            states.setState(_states[_stateIndex]);
        }
    };
    states.nextState = function() {
        if (_stateIndex < _states.length) {
            _stateIndex += 1;
            states.setState(_states[_stateIndex]);
        }
    };

    states.record = function(state) {
        if (!_settingState) {
            _stateIndex = _states.length;
            _states.push(state);
        }
    };

    states.get = function() {
        return _states;
    };

    return states;
}