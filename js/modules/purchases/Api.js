export default {

    getPurchases() {
        return new Promise((resolve) => {
            let purchases = require('data/purchases.json');
            resolve(purchases);
        })
    }

};