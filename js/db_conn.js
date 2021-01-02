var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.1.119",
  port: "49154",
  user: "pathfinder",
  password: "immogen"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log("Party Time!")
});




