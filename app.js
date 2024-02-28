const Sequelize = require('sequelize');
// sessionとpassportを入れて、ログイン機能を作ろうとしたけど、一旦保留。ゆくゆく作ればいいかな…
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database');
const { username, password, database, host, dialect } = config.development;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// TODO: ゆくゆくは環境に応じてdatabase情報を変えたいため、環境変数で管理したい
// sequelizeの初期化（DBの接続）
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});

// データベースとの接続を確立する
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ルーティング設定
// routes/で作成されたモジュールをここでインポートすることで、ルーティング設定する。
app.use('/', indexRouter);
app.use('/users', usersRouter);

// リクエストの確認
// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
