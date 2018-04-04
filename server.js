var http = require('http');
var express = require('express');
var fs = require('fs');
var url = require('url');
var path = require('path');
var app = express();
var mtg = require('mtgsdk');
var x;
var jj;
app.get('/', function(req,res){

	res.sendFile(path.join(__dirname,'html/search.html'));
})

app.get('/get', function(req,res){	

	
	mtg.card.where({name :req.query.name}).then(body => {res.send(body)})


})

var server = app.listen(30300,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("hey but face")
})
/*
http.createServer(function (req, res) {
	var q = url.parse(req.url,true);
	var filename = "." + q.pathname;
	console.log(q.pathname);
	fs.readFile(filename, function(err, data) {
		if(err){
			res.writeHead(404,{'Content-type':'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(30300); 
*/
