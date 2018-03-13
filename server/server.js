var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
require('dotenv').config();

require('mongoose').connect(config.db.url);
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
