//DELETE RECORD IN MONGODB TABLE

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //declare selection, {field and data}
  var query = { character: 'Bepis' };
  //Database - Members
  //remove() method parameter is query object defining which document to delete
  db.collection("members").remove(query, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
