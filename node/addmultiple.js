//ADD MULTIPLE RECORDS TO MONGODB TABLE

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //insert multiple records
  var myobj = [
    { name: "", email: "", character: "" },
    { name: "", email: "", character: "" },
  ];
  db.collection("members").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
