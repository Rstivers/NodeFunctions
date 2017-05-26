var MongoClient = require('mongodb').MongoClient;
//Connection URL
var url = "mongodb://localhost:27017/mydb";
//Use connect() method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
