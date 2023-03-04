let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE == "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
    });

























 module.exports = app;
