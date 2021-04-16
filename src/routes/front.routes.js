const express = require('express');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/questionnaire', (req, res) => {
	res.render('questionnaire', {
		json,
	});
});

module.exports = router;
