//ADD MULTIPLE RECORDS TO MONGODB TABLE

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //insert multiple records
  var myobj = [
    { name: "Ryan", email: "ryan.a.stivers@gmail.com", character: "Bepis" },
    { name: "David", email: "david@gmail.com", character: "Snoozer" },
    { name: "Brian", email: "brian@gmail.com", character: "Toxin" },
    { name: "Brendan", email: "brendan@gmail.com", character: "Yobo" },
    { name: "Rob", email: "rob@gmail.com", character: "MrMcMerrill" },
    { name: "Isaiah", email: "isaiah@gmail.com", character: "Sprocket" },
  ];
  db.collection("members").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
