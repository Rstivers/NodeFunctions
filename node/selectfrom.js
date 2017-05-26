//SELECT RECORD FROM MONGODB TABLE

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //Retrieve from table
  //findOne() method, {} Empty Query Object, selects all records but returns first.
  db.collection("members").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
