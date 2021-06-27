const app = require('./app');

app.listen(app.get('port'), () => {
	console.clear;
	console.log('Server listen on : http://localhost:' + app.get('port'));
});
