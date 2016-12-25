import Dispatcher from 'dispatcher/dispatcher';
import Constants from './Constants';
import Api from './Api';
let {ActionTypes} = Constants;

export default {

    loadPurchasesForUser(user) {

        Promise.resolve()
            .then(() => {
                return user ? Api.getPurchases() : [];
            })
            .then(purchases => purchases.filter(purchase => purchase.cardNumber === user.cardNumber))
            .then(purchases => {
                Dispatcher.dispatch({
                    type: ActionTypes.GOT_PURCHASES,
                    purchases
                })
            })
            .catch((e) => {
                console.log(e);
            });

    }

};
