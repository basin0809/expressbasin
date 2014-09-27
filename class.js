
var http = require("http");
var express = require("express");
var app = express();
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
app.all("*", function(req, res, next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Request-With");
	next();
});

var web = {name: "Web Development", prof:"Jose G. Annunziato"};
var glass = {name: "Health Interface Design", prof:"Stephen S Intille"};
var classes = [web, glass];

var section1 = {name: "Monday"};
var section2 = {name: "Wednesday"};
var section3 = {name: "Wednesday"};

web.sections = [section1, section2]
glass.sections = [section3]

app.get("/classes", function(req,res){
	res.json(classes);
});


app.get("/classes/:index", function(req,res){
	var index = req.params.index;
	res.json(classes);
});

app.get("/classes/:index/section:sectionIndex", function(req,res){
	var index = req.params.index;
	var sectionIndex = req.params.sectionIndex;
	res.json(classes[index].section[sectionIndex]);
});
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080); 
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

var server = app.listen(port, address,function() {
    console.log('Listening on port %d', server.address().port);
});
