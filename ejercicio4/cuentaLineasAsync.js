//Callbacks de operaciones asíncronas. File System tiene métodos syncronos y asíncronos. Estos últimos son más óptimos
var fs=require('fs');
var contenidoFichero=fs.readFile(process.argv[2],'utf8',function cb(error,data){
	if(!error){
		console.log(data.split('\n').length-1);
	}
});