let express = require('express');
let app = express();

const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

app.get('/now', middleware, (req, res) => {
    res.send( { time: req.time } );
})

app.use((req, res, next) => {
    console.log( `${req.method} ${req.path} - ${req.ip}` );
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" 
        ? res.json({ message: "Hello json".toUpperCase() })
        : res.json({ message: "Hello json" });
});

























 module.exports = app;
