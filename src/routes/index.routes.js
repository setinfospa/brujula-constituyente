const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
var mime = require('mime');

const { getQuestions, getJSONFromString } = require('../helpers/handlebars');
const functions = require('../helpers/functions');

let json = getQuestions();

router.post('/process', async (req, res) => {
	const obj = getJSONFromString(req.body); //Parametro recibido en la solicitud
	const arr = Object.values(obj);
	/*for (let index = 0; index < 7; index++) {
		let string = '';
		arr.splice(26, 0, string);
	}
	for (let index = 0; index < 10; index++) {
		let string = '';
		arr.push(string);
	}
	console.log(arr);
	*/
	var aux = await functions.MarcaDeTiempo(path.join(__dirname, '../database/Rsp.csv'));
	var aux2 = await functions.EscribeArchivo(path.join(__dirname, '../database/Rsp.csv'), Object.values(obj));
	const resultado = await functions.ProcesaRespuestas(arr);
	res.render('results', {
		resultado,
	});
});
router.get('/Decode', async (req, res) => {
	var resultado = false;
	resultado = await functions.CodeArchivo(path.join(__dirname, '../database/Rsp.csv'));
	if (resultado == true) {
		var file = path.join(__dirname, '../database/Rsp.csv.bin');
		var filename = path.basename(file);
		var mimetype = mime.lookup(file);
		res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		res.setHeader('Content-type', mimetype);
		var filestream = fs.createReadStream(file);
		filestream.pipe(res);
	} else {
		res.send('Algo Salio Mal');
	}
});
router.get('/Decode2', async (req, res) => {
	var resultado = false;
	resultado = await functions.CodeArchivo(path.join(__dirname, '../database/Resul.csv'));
	if (resultado == true) {
		var file = path.join(__dirname, '../database/Resul.csv.bin');
		var filename = path.basename(file);
		var mimetype = mime.lookup(file);
		res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		res.setHeader('Content-type', mimetype);
		var filestream = fs.createReadStream(file);
		filestream.pipe(res);
	} else {
		res.send('Algo Salio Mal');
	}
});

module.exports = router;
