require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbss = require('hbs');
const hbs = require('express-handlebars');
const path = require('path');

const functions = require('./helpers/functions');

// Initialization
const app = express();
functions.CargaBD();


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	hbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
		helpers: require('./helpers/handlebars'),
	})
);
app.set('view engine', '.hbs');

// Middlewaresdotenv express
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require('./routes/front.routes'));
app.use(require('./routes/index.routes'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
