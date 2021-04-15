const express = require('express');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.get('/', (req, res) => {
	res.render('index', {
		json,
	});
});

module.exports = router;
