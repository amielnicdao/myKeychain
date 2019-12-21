var orm = require("../config/orm");

var pass = {
    create: function(cols, vals, cb) {
        orm.create("users", cols, vals, function(res) {
            cb(res);
    });
},
    all: function(cb) {
        orm.all("users", function(res) {
            cb(res);
        });
    },

    allAcc: function(cb) {
        orm.allAcc("passwords", function(res) {
            cb(res);
        });
    },
    displayOne: function(cols, cb) {
        orm.displayOne("passwords", cols, function(res) {
            cb(res);
        });
    }
};

module.exports = pass;