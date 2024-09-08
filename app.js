const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = require('./db'); // Import the database connection module

const app = express();

// Connect to MongoDB
connectDB();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Updated from 'jade' to 'pug'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const urlRouter = require('./routes/URLroute');
app.use('/', urlRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error'); // Ensure you have a Pug template named 'error.pug'
});

module.exports = app;
