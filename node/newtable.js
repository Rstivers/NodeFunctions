//CREATE NEW MONGODB TABLE

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create new table "customers"
  db.createCollection("members", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
