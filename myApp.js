let express = require('express');
let app = express();

console.log( "Hello World" );

require('express')().get('/', function(req, res) {
    res.send('Hello Express');
});
































 module.exports = app;
