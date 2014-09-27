
var express = require("express");
var app = express();
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

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
