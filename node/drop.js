//DROP MONGODB TABLE (COLLECTION)

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //members table
  //drop() method takes a callback function containing the error object and the result parameter
  //which returns true if the collection was dropped successfully, otherwise it returns false.
  db.collection("members").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Table deleted");
    db.close();
  });
});
