//Use fs (File System) Module
var fs = require('fs');
//Read JSON file, else throw error
fs.readFile('members.json', 'utf-8', function(err, data) {
  if (err) throw err;
//JSON.parse() method converts contents to JS object
  var memberObjectArray = JSON.parse(data);
//Write data to array using push() method
  memberObjectArray.members.push(
    { }
  );
  //display contents of variable
    console.log(memberObjectArray);
  //json.stringify convert contents of variable into JSON
  //write data into JSON file or throw error
  fs.writeFile('members.json', JSON.stringify(memberObjectArray), 'utf-8', function(err) {
    if (err) throw err;
    console.log('Data written to JSON successfully!')
  });
});
