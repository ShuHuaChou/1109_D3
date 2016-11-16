function drawline() {
dataPath = 'https://shuhuachou.github.io/1109_D3/';
dataFile = 'table.csv'
dataUrl = dataPath + dataFile;
var width  = 1024;
var height = 800; 
d3.csv(dataFile, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
	});
	var hshift = -100;
	var maxy = d3.max(data, function(d) { return d.Open; });
	var ln = data.length;
	var ctrl  = d3.select(".smallBox").append("svg").attr("width", width).attr("height", height);
	
	var lines1 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height - d.Open * (height/maxHigh) ; });
	
	var lines2 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height - d.Open * (height/maxHigh) ; });

	var lines3 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height - d.Open * (height/maxHigh) ; });

	var lines4 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height - d.Open * (height/maxHigh) ; });

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "open").
	attr("d", lines1);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "high").
	attr("d", lines2);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "low").
	attr("d", lines3);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "close").
	attr("d", lines4);

});
}
