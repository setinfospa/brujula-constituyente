const express = require('express');
const path = require('path');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.post('/', (req, res) => {
	res.send('hola');
	const obj = getJSONFromString(req.body);
	console.log(Object.values(obj));
});

router.post('/api/responses', (req, res) => {
	res.send('hola');

	let par_recibido = functions.leeArchivo(path.join(__dirname, './Respuestas.csv'));
	functions.ProcesaRespuestas(par_recibido).then((resultado) => {
		console.log(resultado);
		res.json(resultado);
	});
});

module.exports = router;
