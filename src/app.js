const express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config');

// Routers
const indexRouter = require('./api/index/router'),
      usersRouter = require('./api/users/router');

 // Connct to MongoDB
const database = require('./database')(mongoose, config);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static('public'));

// Routing
app.use('/', indexRouter);
app.use('/api/users', usersRouter);


module.exports = app;
