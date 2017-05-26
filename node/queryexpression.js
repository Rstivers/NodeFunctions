//FILTER QUERY FOR RECORDS FROM MONGODB TABLE BY EXPRESSION
//Regular expressions can ONLY be used to query STRINGS
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //Set query, start with letter "". Case-Sensitive
  var query = { name: };
  //Query database "members"
  //First argument of find() method is a query object, declared above
  db.collection("members").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
