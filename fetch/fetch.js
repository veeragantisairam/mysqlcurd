var conn = require("../config/dbconnection");
var connection = conn.getConnection();
connection.connect();
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    connection.query("select * from userinfo", (err, records, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(records);
        }
    })
})

module.exports = router;