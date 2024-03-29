const { response } = require('express');
const path = require('path');
const fs = require('fs');
const { debug } = require('console');
const { networkInterfaces } = require('os');
var moment = require('moment');

var Arr_Comunas = new Array();
var Arr_Candidatos = new Array();
var Arr_Preguntas = new Array();
var Arr_Respuestas;
var Arr_Resultado;
var FechaImpresa= new Date;
let name;

var cColR; //contador columna respuesta
var Distr; //distrito del encuestado
var MaxPreg; // numero de preguntas validas
var NCand; //numero de candidatos del distrito
var NCons; //numeros de constituyentes elegidos
var Pobl; //poblacion del distrito
var MaxDisC = 0; //Distancia al candidato mas lejano
var pMaxDis = 0; //Puntero al candidato mas lejano

const N_Candidatos = 1279; //Numero de Candidatos totales
//-----------------------------------------------------------------------------------------------------------------------------------------
function CargaBD() {
	leeArchivo(path.join(__dirname, '../database/Comunas.csv')).then((algo) => {
		CP_Array(algo, Arr_Comunas);
		leeArchivo(path.join(__dirname, '../database/Candidatos.csv')).then((Arr_Lineas) => {
			CP_Array(Arr_Lineas, Arr_Candidatos);
			leeArchivo(path.join(__dirname, '../database/Preguntas.csv')).then((Arr_Lineas) => {
				CP_Array(Arr_Lineas, Arr_Preguntas);
				Arr_Respuestas = new Array(Arr_Preguntas.length - 1);
				console.log('BD Cargadas...');
			});
		});
	});
}
exports.CargaBD = CargaBD;
//-----------------------------------------------------------------------------------------------------------------------------------------
function ProcesaRespuestas(Respuestas) {
	return new Promise(function (resolve, reject) {
		//leeArchivo(Respuestas).then( Arr_Lineas=> {
		console.log(Respuestas.length);
		if (Respuestas.length > 0) {
			name = Respuestas[0];
			Arr_Resultado = new Array();
			Arr_Respuestas = new Array(Arr_Preguntas.length - 1);
			CP_Array(Respuestas, Arr_Respuestas);
			Arr_Respuestas[Arr_Respuestas.length - 2] = 1;
			Arr_Respuestas[Arr_Respuestas.length - 1] = 5;
			RecomiendaCandidato().then((Respuesta) => resolve(Respuesta));
		} else {
			reject(error);
		}
		//})
	});
}
exports.ProcesaRespuestas = ProcesaRespuestas;
//-----------------------------------------------------------------------------------------------------------------------------------------
function leeArchivo(archivo) {
	//Lee archivo y entrega como matriz separada por punto y coma
	var datos;
	var Arr_Lineas = new Array();
	return new Promise(function (resolve, reject) {
		if (fs.existsSync(archivo)) {
			console.log('Archivo ' + archivo + ' Existe');
			fs.readFile(archivo, 'utf8', (error, datos) => {
				if (error) {
					reject(error);
				} else {
					Arr_Lineas = datos.split('\r\n');
					for (var i = 0; i < Arr_Lineas.length; i++) {
						Arr_Lineas[i] = Arr_Lineas[i].split(',');
					}
					resolve(Arr_Lineas);
				}
			});
		} else {
			console.log('No se Encontro Archivo');
		}
	});
}
exports.leeArchivo = leeArchivo;
//-----------------------------------------------------------------------------------------------------------------------------------------
function EscribeArchivo(archivo, contenido) {
	var stream = fs.createWriteStream(archivo,{'flags': 'a','encoding': null,'mode': 0666});
	stream.once('open', function (fd) {
		contenido.forEach(function (linea) {
			var Auxlinea = linea;
			stream.write(Auxlinea + ',');
		});
		stream.write('\r\n');
		stream.end();
	});
	return;
}
exports.EscribeArchivo = EscribeArchivo;
function MarcaDeTiempo(archivo) {
	var stream = fs.createWriteStream(archivo,{'flags': 'a','encoding': null,'mode': 0666});
	var ahora = new Date()
	var mahora = moment(ahora)
	var mimpreso=moment(FechaImpresa)
	console.log("FechaImpresa: "+FechaImpresa)
	console.log("Ahora: "+ahora)
	console.log("Diferencia en dias = "+mahora.diff(mimpreso,'days'))
	if (mahora.diff(mimpreso,'days')>0) { 
		stream.once('open', function (fd) {
			stream.write(ahora+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\r\n");
			stream.end();
		});
		FechaImpresa=ahora
	}
	console.log("Fecha ipresa : "+FechaImpresa)
	return;
}
exports.MarcaDeTiempo = MarcaDeTiempo;

function CodeArchivo(archivo) {
	return new Promise(function (resolve, reject) {
		if (fs.existsSync(archivo)==false) {resolve(false);}
		fs.readFile(archivo, 'utf8', (error, datos) => {
			if (error) {
				reject(error);
			} else {
				var stream = fs.createWriteStream(archivo+".bin");
				Arr_Lineas = datos.split('\r\n');
				stream.once('open', function (fd) {
					Arr_Lineas.forEach(function (linea){
						//console.log("Linea Recibida "+linea)
						var EncLinea=EncDecData(linea+'\r\n');
						//console.log("Linea Codificada "+EncLinea)
						stream.write(EncLinea);
					});
					stream.end
				});
			}
			resolve(true);
		});
	});
}
exports.CodeArchivo = CodeArchivo;
//-----------------------------------------------------------------------------------------------------------------------------------------
function CP_Array(Arr_origen, Arr_Destino) {
	for (var i = 0; i < Arr_origen.length - 1; i++) {
		Arr_Destino[i] = Arr_origen[i];
	}
}
exports.CP_Array = CP_Array;
//-----------------------------------------------------------------------------------------------------------------------------------------
function BuscaDistrito() {
	var Comuna;
	var res = false;
	return new Promise(function (resolve, reject) {
		try {
			Comuna = Arr_Respuestas[1];
			for (var cFil = 2; cFil < 347; cFil++) {
				if (Comuna == Arr_Comunas[cFil][2]) {
					Distr = Arr_Comunas[cFil][4]; //distrito del encuestado
					NCand = Arr_Comunas[cFil][6]; //numero de candidatos del distrito
					NCons = Arr_Comunas[cFil][5]; //numeros de constituyentes elegidos
					Pobl = Arr_Comunas[cFil][7]; //poblacion del distrito
					res = true;
					resolve(res);
					//console.log("Encontrado");
					return;
				}
			}
		} catch (e) {
			reject(e);
		}
	});
}
exports.BuscaDistrito = BuscaDistrito;
//-----------------------------------------------------------------------------------------------------------------------------------------
function CalculaDistanciaCandidato(filp) {
	var Dis = 0; //distancia vectoriaal
	var cFilR = 0; //contador fila en hoja respuestas
	var NotaR = 0; //nota de la hoja de rspuestas
	var NotaC = 0; //nota del candidato
	var Ponde = 0; //ponderacion de la pregunta
	const FilToCol = 68;
	try {
		for (cFilR = 1; cFilR < Arr_Preguntas.length - 1; cFilR++) {
			//recorre todas las preguntas
			if (Arr_Preguntas[cFilR][1].length != 0) {
				//caso la pregunta es valida
				if (Arr_Respuestas[cFilR + 1].length == 0) {
					NotaR = 99; //caso casilla vacía
				} else {
					NotaR = Arr_Respuestas[cFilR + 1]; //caso casilla buena
				}
				Ponde = Arr_Preguntas[cFilR][6]; //lee ponderacion de  las pregunta
				NotaC = Arr_Candidatos[filp][cFilR + FilToCol]; //lee nota individual del candidato
			}
			Dis = Dis + Math.pow(Ponde * (NotaR - NotaC), 2); //suma distancia parcial
		}
		res = Math.sqrt(Dis); //distancia vectorial
		return res;
	} catch (e) {
		console.log('Error en DistanciaCandidato ' + e.message);
	}
}
exports.CalculaDistanciaCandidato = CalculaDistanciaCandidato;
//-----------------------------------------------------------------------------------------------------------------------------------------
function CalculaDistanciaLista(filp) {
	var Dis = 0; //distancia vectoriaal
	var cFilR; //contador fila en hoja respuestas
	var NotaR; //nota de la hoja de rspuestas
	var NotaC; //nota del candidato
	var Ponde; //ponderacion de la pregunta
	const FilToCol = 16; //constante fila respuesta to Arr_Candidatos
	try {
		for (cFilR = 1; cFilR < Arr_Preguntas.length - 1; cFilR++) {
			//recorre todas las preguntas
			if (Arr_Preguntas[cFilR][1].length != 0) {
				//caso la pregunta es valida
				if (Arr_Respuestas[cFilR + 1].length == 0) {
					//Caso Respesta es valida
					NotaR = 99; //caso casilla vacía
				} else {
					NotaR = Arr_Respuestas[cFilR + 1]; //caso casilla buena
				}
				Ponde = Arr_Preguntas[cFilR][5]; //lee ponderacion de  las pregunta
				NotaC = Arr_Candidatos[filp][cFilR + FilToCol]; //lee nota individual del candidato
			}
			Dis = Dis + Math.pow(Ponde * (NotaR - NotaC), 2); //suma distancia parcial
		}

		res = Math.sqrt(Dis); //distancia vectorial
		return res;
	} catch (e) {
		console.log('Error en CalculaDistanciaLista: ' + e.message);
	}
}
exports.CalculaDistanciaLista = CalculaDistanciaLista;
//-----------------------------------------------------------------------------------------------------------------------------------------
function RecorreCandidatos() {
	var res = false;
	var cFilC; //contador candidatos
	var cFilW = 0; //contador fila Write
	var DisL; //distancia a la lista
	var DisC; //distancia al candidato

	try {
		MaxDisC = 0;
		pMaxDis = 0;
		for (cFilC = 1; cFilC < N_Candidatos; cFilC++) {
			//recorre candidatos
			if (Distr !== Arr_Candidatos[cFilC][3]) {
				continue;
			} // solo los candidatos del distrito
			DisL = CalculaDistanciaLista(cFilC); //calcula distancia con lista
			DisC = CalculaDistanciaCandidato(cFilC);

			if (DisL < 100) {
				Arr_Resultado.push([
					Arr_Candidatos[cFilC][4], //nom1
					Arr_Candidatos[cFilC][5], //nom2
					Arr_Candidatos[cFilC][6], //apell1
					Arr_Candidatos[cFilC][7], //apell2
					Arr_Candidatos[cFilC][8], //lista
					Arr_Candidatos[cFilC][9], //Partido
					Arr_Candidatos[cFilC][14],//Web
					Arr_Candidatos[cFilC][0], //Code Candidato
					DisL,                     //Distancia Lista
					DisC,					  //Distancia Candidato
				]);
				cFilW++;
			}
		} //proximo candidato
		return cFilW;
	} catch (e) {
		console.log('Error en CalculaDistanciaLista: ' + e.message);
		return e;
	}
}
exports.RecorreCandidatos = RecorreCandidatos;
//-----------------------------------------------------------------------------------------------------------------------------------------
function RecomiendaCandidato() {
	var FCerca = new Array(5); //Fila de los mas cercanos
	var DCerca = new Array(5); //Distancia de los mas cercanos
	var MaxFil; //fila maxima
	var objeSalida = new Object();
	var Arr_Res_Peor = new Array();
	var Arr_Cand_Salida = new Array();
	return new Promise(function (resolve, reject) {
		Arr_Resultado = [];
		MaxPreg = 45;
		console.log('Buscando Distrito');
		BuscaDistrito().then((res) => {
			if ((res = true)) {
				console.log('Distrito Encontrado');
				//guarda Mejor****************************************************************************
				console.log('Recorriendo Candidatos  ');
				res = RecorreCandidatos();
				console.log('RecorreCandidatos Res: ' + res);
				if (res > 0) {
					console.log('Ordenando Segun Notas');
					//Ordena segun Notas*********************************************************************
					MaxFil = res - 1; //ultima fila escrita
					Arr_Resultado = Arr_Resultado.sort(function comparar(a, b) {
						return a[9] - b[9];
					});
					Arr_Resultado = Arr_Resultado.sort(function comparar(a, b) {
						return a[8] - b[8];
					});
					//Ordena La escritura del archivo de Salida
					//Datos de comunas *****************************************************
					Arr_Res_Peor.push(Arr_Resultado[Arr_Resultado.length - 1]); //Ultimo elemento guardado como el peor
					Arr_Resultado.pop(); //Elimina ultimo elemento
					objeSalida.name = name;
					objeSalida.informacion = { N_Candidatos: NCand, Cupos: NCons, Poblacion_del_distrito: Pobl, Distrito: Distr };
					if (Arr_Resultado[0][8] + Arr_Resultado[0][9] > 18) {
						objeSalida.coherencia = 'PIENSA TUS RESPUESTAS, PARECEN INCOHERENTES';
					} else {
						objeSalida.coherencia = null;
					}
					//resultados Mejores Candidatos**********************************************************
					objeSalida.mejoresCandidatos = [
						{
							Nombre1: Arr_Resultado[0][0],
							Nombre2: Arr_Resultado[0][1],
							Apellido1: Arr_Resultado[0][2],
							Apellido2: Arr_Resultado[0][3],
							Lista: Arr_Resultado[0][4],
							Partido: Arr_Resultado[0][5],
							Web: Arr_Resultado[0][6],
							Codigo_candidato: Arr_Resultado[0][7],
							Porcentaje_Cercania: PorcentajeCercania(Arr_Resultado[0][8], Arr_Resultado[0][9]),
						},
						{
							Nombre1: Arr_Resultado[1][0],
							Nombre2: Arr_Resultado[1][1],
							Apellido1: Arr_Resultado[1][2],
							Apellido2: Arr_Resultado[1][3],
							Lista: Arr_Resultado[1][4],
							Partido: Arr_Resultado[1][5],
							Web: Arr_Resultado[1][6],
							Codigo_candidato: Arr_Resultado[1][7],
							Porcentaje_Cercania: PorcentajeCercania(Arr_Resultado[1][8], Arr_Resultado[1][9]),
						},
						{
							Nombre1: Arr_Resultado[2][0],
							Nombre2: Arr_Resultado[2][1],
							Apellido1: Arr_Resultado[2][2],
							Apellido2: Arr_Resultado[2][3],
							Lista: Arr_Resultado[2][4],
							Partido: Arr_Resultado[2][5],
							Web: Arr_Resultado[2][6],
							Codigo_candidato: Arr_Resultado[2][7],
							Porcentaje_Cercania: PorcentajeCercania(Arr_Resultado[2][8], Arr_Resultado[2][9]),
						},
					];
					//Peor Candidato**********************************************************************************

					objeSalida.peorCandidato = {
						Nombre1: Arr_Res_Peor[0][0],
						Nombre2: Arr_Res_Peor[0][1],
						Apellido1: Arr_Res_Peor[0][2],
						Apellido2: Arr_Res_Peor[0][3],
						Lista: Arr_Res_Peor[0][4],
						Partido: Arr_Res_Peor[0][5],
						Web: Arr_Res_Peor[0][6],
						Codigo_candidato: Arr_Res_Peor[0][7],
						Porcentaje_Cercania: PorcentajeCercania(Arr_Res_Peor[0][8], Arr_Res_Peor[0][9]),
					};
					//guarda Peor****************************************************************************
					//console.log(Arr_Salida)
					Arr_Cand_Salida.push(Arr_Respuestas[0],Arr_Resultado[0][7],Arr_Resultado[1][7],Arr_Resultado[2][7])
					EscribeArchivo(path.join(__dirname, '../database/Resul.csv'), Arr_Cand_Salida);
					resolve(objeSalida);
				}
			} else {
				console.log('No Se Encontro Distrito');
				reject();
			}
		});
	});
}
exports.RecomiendaCandidato = RecomiendaCandidato;
//var Arr_Resultado=new Array;
function GetResultado() {
	return Arr_Resultado;
}
exports.GetResultado = GetResultado;
function PorcentajeCercania(DistL, DistC) {
	return (-2.56 * (DistL + DistC) + 112).toFixed(1) + '%';
}
exports.PorcentajeCercania = PorcentajeCercania;
function EncDecData(szData){
	const KEY_TEXT ="BrujulaConstituyente"
	const KEY_OFFSET=38
	var bytKey=new Array()
	var bytData=new Array()
	var szKey=""
	for (lNum = 1; lNum < (Math.trunc(szData.length/KEY_TEXT.length)+1); lNum++) {
		szKey=szKey+KEY_TEXT
	}
	bytKey=szKey.substring(0,szData.length);
	bytData=szData
	for (lNum = 0; lNum < bytData.length-1; lNum++) {
		if (lNum % 2 == 0){
			bytData[lNum]=bytData[lNum] ^ bytKey[lNum]+KEY_OFFSET 
		}else{
			bytData[lNum]=bytData[lNum] ^ bytKey[lNum]-KEY_OFFSET 

		}
	}
	return (bytData)
}
exports.EncDecData=EncDecData;
