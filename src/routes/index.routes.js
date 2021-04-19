const express = require('express');
const path = require('path');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.post('/process', async (req, res) => {
	console.log(req.body);
	const obj = getJSONFromString(req.body); //Parametro recibido en la solicitud
	const arr = Object.values(obj);
	const resultado = await functions.ProcesaRespuestas(arr);
	console.log(resultado);
	res.render('results', {
		resultado,
	});
});

module.exports = router;
