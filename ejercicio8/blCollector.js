//Usamos una librería que facilita la recogida de datos
//NeCesaria instalarla > npm install bl
//file:///C:/Users/krlosh/AppData/Roaming/npm/node_modules/learnyounode/docs/bl.html

var http=require('http');
var bl = require('bl');

var URL = process.argv[2];

http.get(URL, function callback(response){
	response.pipe(bl(function (err,data){
			if(err)
				return console.error(err);
			data=data.toString();
			console.log(data.length);
			console.log(data);
		}))
	});
