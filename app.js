require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();
const app = express();


let db_conn = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@navigateit-shard-00-00-gxke5.mongodb.net:27017,navigateit-shard-00-01-gxke5.mongodb.net:27017,navigateit-shard-00-02-gxke5.mongodb.net:27017/' + process.env.DB_NAME + '?ssl=true&replicaSet=NavigateIT-shard-0&authSource=admin'
mongoose.connect(db_conn);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes/api')(router));
app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;
