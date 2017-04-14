module.exports = createActions;


function createActions(storeName, names) {
    var actions = {},
        i = -1,
        il = names.length - 1,
        action;

    while (i++ < il) {
        action = names[i];
        actions[action] = storeName + "." + action;
    }

    return actions;
}