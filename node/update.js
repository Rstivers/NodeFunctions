//UPDATE DATA IN MONGODB TABLE

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = "mongodb://localhost:27017/mydb";
// Use connect method to connect to the server
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //select field to update
  var query = { character: 'Bepis' };
  //new values to be updated
  var newvalues = { name: 'Bitchboy', email: 'fuck@gmail.com', character: 'Pebis'};
  db.collection("members").update(query, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
