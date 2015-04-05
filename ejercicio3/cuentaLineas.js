//Uso de módulo fs para tratar ficheros.
//
var fs=require('fs');
var contenidoFichero=fs.readFileSync(process.argv[2]);
lineas = contenidoFichero.toString().split('\n');

console.log(lineas.length-1);