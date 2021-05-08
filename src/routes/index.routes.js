const express = require('express');
const path = require('path');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.post('/process', async (req, res) => {
	const obj = getJSONFromString(req.body); //Parametro recibido en la solicitud
	const arr = Object.values(obj);
	for (let index = 0; index < 6; index++) {
		let string = '';
		arr.push(string);
	}
	const resultado = await functions.ProcesaRespuestas(arr);
	res.render('results', {
		resultado,
	});
});

module.exports = router;
