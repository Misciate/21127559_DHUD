var express = require('express');
var app = express();
var path = require('http://localhost/3000');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
