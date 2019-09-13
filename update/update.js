var conn = require("../config/dbconnection");
var connection = conn.getConnection();
connection.connect();
const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var username = req.body.username;
    var roolnum = req.body.roolnum;
    var branch = req.body.branch;

    connection.query("update userinfo set username ='" + username + "', roolnum='" + roolnum + "', branch='" + branch + "' where username='" + username + "'", (err, result) => {
        if (err) {
            console.log(err);
            throw err;

        } else {
            res.send("update success");
        }
    })
});

module.exports = router;