var mysql = require('mysql');
var db = require('./dbproperties');
module.exports = {
    getConnection: () => {
        return mysql.createConnection({
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.database
        })
    }
}