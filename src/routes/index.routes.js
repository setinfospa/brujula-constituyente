const express = require('express');
const path = require('path');
const router = express.Router();

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/funciones');

let json = getQuestions();

router.post('/', (req, res) => {
	res.send('hola');
	const obj = getJSONFromString(req.body);
	console.log(Object.values(obj));
});

router.post('/process', (req, res) => {
	const obj = getJSONFromString(req.body); //Parametro recibido en la solicitud
	const arr = Object.values(obj);
	console.log('Solicitud recibida');
	console.log(Object.values(obj));
	functions.ProcesaRespuestas(arr).then((resultado) => {
		console.log(resultado);
		res.json(resultado);
	});
	res.render('results');
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
