export default {

    getUsers() {
        return new Promise((resolve) => {
            let users = require('data/users.json');
            resolve(users);
        })
    }

};