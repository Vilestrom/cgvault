var http = require('http');
var express = require('express');
var fs = require('fs');
var url = require('url');
var path = require('path');
var json = require('JSON');
var app = express();
var mtg = require('mtgsdk');
var x;
var jj;
app.use('/images',express.static('images'))
app.use('/css/',express.static('css'))

app.get('/get', function(req,res) {
	mtg.card.where(req.query).then(body => {
	/*
	for (var x of body){
		fs.appendFile("./cards/" + x.name.replace(/\W/g, ''),json.stringify(x), function (err) {
			if (err) throw err
			console.log('Saved!');
		})
	}
	*/
	res.send(body)})
})

app.get('/myCollection.html',function(req,res){
	res.sendFile(path.join(__dirname,'html/myCollection.html'));
})


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'html/index.html'));
})

var server = app.listen(30300,function(){
	var host = server.address().address
	var port = server.address().port
	console.log('server online');
})
