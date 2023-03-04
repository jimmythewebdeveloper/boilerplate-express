let express = require('express');
let app = express();
require('dotenv').config()

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" 
        ? res.json({ message: "Hello json".toUpperCase() })
        : res.json({ message: "Hello json" });
});

























 module.exports = app;
