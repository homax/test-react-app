import Dispatcher from 'dispatcher/dispatcher';
import {EventEmitter} from 'events';
import Constants from './Constants';
let {Store: StoreTypes, ActionTypes} = Constants;
let _storage = {
    purchases: []
};

var Store = Object.assign({}, EventEmitter.prototype, {

    setPurchases(purchases) {
        _storage['purchases'] = purchases;
    },

    getPurchases() {
        return _storage['purchases'];
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

        case ActionTypes.GOT_PURCHASES:
            Store.setPurchases(action.purchases);
            Store.emitChange();
            break;

    }
});

export default Store;
