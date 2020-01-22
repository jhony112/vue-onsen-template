let SecureLS = require('secure-ls');
let _ = require('underscore');
var ls = new SecureLS();
export default {
    set(key, data) {
        if (_.isObject(data)) {
            ls.set(key, data);
        }
        else {
            data = JSON.parse(data)
            ls.set(key, data);
        }

    },
    get(key) {
        ls.get(key);
    }
};
