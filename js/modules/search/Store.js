import Dispatcher from 'dispatcher/dispatcher';
import {EventEmitter} from 'events';
import Constants from './Constants';
let {Store: StoreTypes, ActionTypes} = Constants;
let _storage = {
    users: [],
    selected: null
};

var Store = Object.assign({}, EventEmitter.prototype, {

    setUsers(users) {
        _storage['users'] = users;
    },

    getUsers() {
        return _storage['users'];
    },

    selectUser(user) {
        _storage.selected = user;
    },

    getSelectedUser() {
        return _storage.selected;
    },

    emitChange() {
        this.emit(StoreTypes.CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(StoreTypes.CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(StoreTypes.CHANGE_EVENT, callback);
    }

});

Store.dispatchToken = Dispatcher.register( action => {

    switch (action.type) {

        case ActionTypes.FOUND_USERS:
            Store.setUsers(action.users);
            Store.emitChange();
            break;

        case ActionTypes.SELECT_USER:
            Store.selectUser(action.user);
            Store.emitChange();
            break;

    }
});

export default Store;
