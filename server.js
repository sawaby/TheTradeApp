// Require our dependencies
var express = require('express');
var mongoose = require("mongoose");
var path = require('path');
var Trade = require("./api/models/trade");
var User = require("./api/models/user");
var bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const apiRouter = require("./api/routes/index.routes");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();


// Require our routes file pass our router object
//require("./config/routes")(router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
//var db = process.env.MONGODB_URI || "mongodb://localhost/mongoTrades";

// Connect mongoose to our database
// mongoose.connect(db, function (error) {
//     // Log any errors connecting with mongoose
//     if (error) {
//         console.log(error);
//     }
//     // Or log a success message
//     else {
//         console.log("mongoose connection is successful");
    
//     }
// });

var databaseUri = "mongodb://localhost/mongoTrades";
if(process.env.MONGODB_URI){
  console.log("NOT LOCAL")
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect(databaseUri);
}
//mongoose.connect("mongodb://localhost/week18day3mongoose");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/*", function(req, res) {
 res.sendFile(__dirname + "/public/index.html");
});

apiRouter(app);
// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});