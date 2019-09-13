var conn = require("../config/dbconnection");
var connection = conn.getConnection();
connection.connect();
const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var username = req.body.username;
    connection.query("delete from userinfo  where username= '" + username + "' ", (err, result) => {
        if (err) {
            console.log(err);
            throw err;

        } else {
            res.send("delete success");
        }
    })
})

module.exports = router