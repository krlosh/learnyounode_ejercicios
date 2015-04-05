
/*
 HTTP JSON API SERVER
 Exercise 13 of 13

Write an HTTP server that serves JSON data when it receives a GET request to the
 path '/api/parsetime'. Expect the request to contain a query string with a key
'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties.
For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query st
ring but returns UNIX epoch time in milliseconds (the number of milliseconds sin
ce 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your pro
gram.

*/
var url =require('url');
var http=require('http');
var port = Number(process.argv[2]);

function parseDate(fecha){		
	return {
		hour:fecha.getHours(),
		minute:fecha.getMinutes(),
		second:fecha.getSeconds()
	}
}

function toUnixtime(fecha){	
	return {unixtime:fecha.getTime()};
}

var server = http.createServer(function procesar(req,resp){
	var parsedObject = url.parse(req.url,true);	
	var value = parsedObject.query.iso;
	var fecha = new Date(value);
	var resultado
	if(parsedObject.pathname =='/api/parsetime'){
		resultado = parseDate(fecha);
	}
	else if(parsedObject.pathname=='/api/unixtime'){
		resultado=toUnixtime(fecha);
	}
	else{
		resp.writeHead(404);
		resp.end();
		return;
	}
	var jsonObject = JSON.stringify(resultado);
	resp.writeHead(200,{'content-type':'application/json'});
	resp.end(jsonObject);
});

server.listen(port);