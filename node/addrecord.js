//INSERT RECORD INTO MONGODB TABLE CUSTOMERS

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Ryan", email: "ryan.a.stivers@gmail.com", character: "Bepis" };
  db.collection("members").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
