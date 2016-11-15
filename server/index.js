const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('../routes/index');
const users = require('../routes/users');

// const widgets = require( './routes/widgets' )
const api = require( '../routes/api/manifest').v1

const appRoot = process.env.APP_ROOT
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.set('env', process.env.PORT || '3000')
if( process.env.NODE_ENV !== 'test' ) app.use( logger( 'dev' ))
// app.use( cookieSession({
//   name: 'session',
//   keys: [[ process.env.SESSION_KEY ]]
// }))
// app.use(express.static(buildpath+'/public'))
app.use(bodyParser.json())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../front_end/public')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use( '/api/v1/dashboards', api.dashboards )
app.use( '/api/v1/users', api.users )


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
