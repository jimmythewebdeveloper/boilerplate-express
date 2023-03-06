const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    console.log( `${req.method} ${req.path} - ${req.ip}` );
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.route('/name')
    .get((req, res) => {
        const { first: firstname, last: lastname } = req.query;
        res.json({
            name: `${firstname} ${lastname}`
        });
    })
    .post((req, res) => {
        const { first: firstname, last: lastname } = req.body;
        console.log(req.body.first, req.body.last);
        console.log(req.body);
        res.json({
            name: `${firstname} ${lastname}`
        });
    });

app.get('/:word/echo', (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word
    });
});

const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

app.get('/now', middleware, (req, res) => {
    res.send( { time: req.time } );
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" 
        ? res.json({ message: "Hello json".toUpperCase() })
        : res.json({ message: "Hello json" });
});

app.get('/', function(req, res) {
    res.send('Hello Express');
});


 module.exports = app;
