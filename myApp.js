let express = require('express');
let app = express();

console.log( "Hello World" );

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/', function(req, res) {
    res.send('Hello Express');
});





























 module.exports = app;
