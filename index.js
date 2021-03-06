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
app.listen( process.env.PORT || 9999 ,function(){
  if(process.env.PORT)
    console.log("express server running in http://localhost:"+process.env.PORT);
  else
  console.log("express server running in http://localhost:9999");
});


app.get('/test/:server',function(request,response){
  response.render('handle',{ "name" : "naveen kumar" , "outdata" : { "data" : [ {"key":"nodeval"},{"key":"pythonvalue"}] } , "complex" : { "ar" : ["sdf"] } });
  //response.send("get request working for "+request.params.server);

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://naveen:root@cluster0-y7o64.mongodb.net/EazyChare?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect((err,client) => {
    if(err)
      console.log(err);
    else{
      const collection = client.db("EazyChare").collection("accounts");
      var cursor = collection.find();
      cursor.each(function(err, doc) {
            console.log(doc);
        });
    }
    client.close();
  });
});
