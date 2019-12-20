var orm = require("../config/orm");

var pass = {
    create: function(cols, vals, cb) {
        orm.create("users", cols, vals, function(res) {
            cb(res);
    });
}
};

module.exports = pass;