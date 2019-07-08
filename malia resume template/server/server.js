const express = require( "express" );
const cors = require( "cors" );
const mongoose = require("mongoose");

var server = express( );
var port = process.env.PORT || 3000 ;

//Data
//var data = require("./data.js")
var dataModel = require("./schema.js");

// Middleware
server.use( express.urlencoded( {
    extended: false
} ) );
server.use( cors( ) );
server.use (express.json());

mongoose.connect("server_url", {
  useNewUrlParser: true
}).then(function () {
  server.listen (port, function () {
    console.log(`listening on port ${port}`);
  });

});
