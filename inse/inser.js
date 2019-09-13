var conn = require("../config/dbconnection");
var connection = conn.getConnection();
connection.connect();
const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var username = req.body.username;
    var roolnum = req.body.roolnum;
    var branch = req.body.branch;

    connection.query("insert into userinfo values (" + username + ",'" + roolnum + "', " + branch + ")", (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send("insert success");
        }
    })
})

module.exports = router;