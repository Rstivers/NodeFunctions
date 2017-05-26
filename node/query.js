//FILTER QUERY FOR RECORDS FROM MONGODB TABLE BY FIELD

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //Set query specifications
  var query = { email: "" };
  //Query database "members"
  //First argument of find() method is a query object, declared above
  db.collection("members").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
