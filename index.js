// var http = require("http")
// http.createServer(function(request,response){
//   console.log("server running at http://localhost:9999");
//   response.end("Simple node server");
// }).listen(9999);

var express = require('express');
var path = require('path')
var serveStatic = require('serve-static')
var app = express();
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('views',path.join(__dirname, 'views'));
//app.engine('html', require('hbs').render);
app.set("view engine","hbs");
//app.set("views",__dirname+"views");
app.listen(9999,function(){
  console.log("express server running in http://localhost:9999");
});


app.get('/test/:server',function(request,response){
  response.render('handle',{ "name" : "naveen kumar" , "outdata" : { "data" : [ {"key":"nodeval"},{"key":"pythonvalue"}] } , "complex" : { "ar" : ["sdf"] } });
  //response.send("get request working for "+request.params.server);
});
