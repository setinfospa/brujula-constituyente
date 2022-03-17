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

function changeColor(arg1) {
    if(arg1 > 0 && arg1 < 20){
		return 'ff5733'
	} else if(arg1 > 20 && arg1 < 30){
		return 'ff7433'
	} else if(arg1 > 30 && arg1 < 40){
		return 'ff9933'
	} else if(arg1 > 40 && arg1 < 50){
		return 'ffc733'
	} else if(arg1 > 50 && arg1 < 60){
		return 'e1ff33'
	} else if(arg1 > 60 && arg1 < 70){
		return 'b9ff33'
	} else if(arg1 > 70 && arg1 < 80){
		return '81ff33'
	} else if(arg1 > 80 && arg1 < 90){
		return '59ff33'
	} else {
		return '1acc26'
	}
}

module.exports = { getQuestions, getJSONFromString, changeColor };
