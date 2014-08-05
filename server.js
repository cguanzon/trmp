var express = require('express');
var testrail = require('testrail');

var app = express();

app.get('/',function(req, res){
	var project = testrail.getProject(1);

	res.send(project);
});

app.listen(8989);