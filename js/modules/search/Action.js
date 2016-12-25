import Dispatcher from 'dispatcher/dispatcher';
import Constants from './Constants';
import Api from './Api';
let {ActionTypes} = Constants;

export default {

    findUser(data) {

        Promise.resolve()
            .then(() => {
                data = data.trim();
                return data !== '' ? Api.getUsers() : [];
            })
            .then(users => {
                let regexp = new RegExp(data, 'i');
                return users.filter(user => {
                    let searchString =
                        `${user['firstName']} ${user['lastName']} ${user['middleName']} ${user['cardNumber']}`;
                    return regexp.test(searchString);
                })
            })
            .then(users => {
                Dispatcher.dispatch({
                    type: ActionTypes.FOUND_USERS,
                    users
                })
            })
            .catch((e) => {
                console.log(e);
            });

    },

    selectUser(user) {
        Dispatcher.dispatch({
            type: ActionTypes.SELECT_USER,
            user
        })
    }

};
