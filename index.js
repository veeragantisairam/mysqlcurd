const express = require('express');
const app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var fetch = require('./fetch/fetch');
var inse = require('./inse/inser');
var update = require('./update/update');
var dele = require('./delete/delete')

const portnum = 3001;

app.get('/', (req, res) => {
    res.send('welcome');
});
app.use('getdata', fetch);
app.use('insert', inse);
app.use('update', update);
app.use('delete', dele);

app.listen(portnum, () => {
    console.log(`server listening port number at : ${portnum}`);
})