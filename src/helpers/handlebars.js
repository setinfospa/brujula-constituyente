const csvToJson = require('convert-csv-to-json');
const path = require('path');

function getQuestions() {
	let json = csvToJson.getJsonFromCsv(
		path.join(__dirname, '/../public/csv/preguntas.csv')
	);
	return json;
}

function getJSONFromString(json) {
	return JSON.parse(JSON.stringify(json));
}

module.exports = { getQuestions, getJSONFromString };
