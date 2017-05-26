//SORT RESULTS OF MONGODB TABLES

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //declare sort, name field - alphabetical (-1 is descending)
  var mysort = { name: 1 };
  //Sort database "members"
  //Sort method takes one parameter - object defining sorting order
  db.collection("members").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
