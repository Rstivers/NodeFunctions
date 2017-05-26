//SELECT ALL RECORDS FROM MONGODB TABLE

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //Retrieve from table
  //find() method, {} Empty Query Object, selects all records - returns all occurrences
  db.collection("members").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result); //console.log(result[2].email); --Returns email of 2nd record.
    db.close();
  });
});
