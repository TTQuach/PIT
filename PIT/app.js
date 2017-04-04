var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        // normal static file request
        next();
    }
    else {
        // should force return `index.html` for angular.js
        req.url = '/index.html';
        next();
    }
});

// Static files
app.use(express.static('public'));

var server = app.listen(8001, function() {
    console.log( 'Server listening on port ' + server.address().port );
});