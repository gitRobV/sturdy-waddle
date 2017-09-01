// **** App Required Modules ****
var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var session     = require('express-session');

// Import Mongo Connection
require('./server/config/mongoose_conf.js');

// Require Routes
// var indexRoutes = require('./server/routes/index.js');
var authRoutes = require('./server/routes/api/index.js');
var profileRoutes = require('./server/routes/api/profile.js');


// **** Define App ****
var app = express();
// Define Session Config for Express-Session
var sessionConfig = {
    secret: "Coding Dojo Rocks",
    resave: false,
    saveUninitialized: false
}
// **** App Configuration ****
// Set
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// Use
app.use(session(sessionConfig));
app.use(bodyParser.json({extended: true}));
app.use('/css', express.static(path.join(__dirname, '/static/css')));
app.use('/js', express.static(path.join(__dirname,'/static/js')));
app.use('/img', express.static(path.join(__dirname, '/static/img')));
app.use(express.static(path.join(__dirname, '/RobUi/dist')));

// Initialize routes
// indexRoutes(app);
authRoutes(app);
profileRoutes(app);

// **** App Run Server **** 
app.listen(8000, function () {
        console.log('App is running on Port: 8000');
    
});
