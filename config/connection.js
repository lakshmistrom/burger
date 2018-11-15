// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
//https://www.google.com/search?q=inspector+clouseau+in+pink+panther+films+pronouncing+hamburger&tbm=isch&tbs=rimg:CS8oMKRMLhT2IjgQewwPvV3_18I-dN37Arc-2kMDP6mk3ukTW6ahHoSHsRDrZQVHkHqDUw8Z0fh0jwRv2azvkzQ3GmSoSCRB7DA-9Xf_1wEXlJo9w31MdAKhIJj503fsCtz7YRrRJwhu2F5FwqEgmQwM_1qaTe6RBFbzeVdJF1hnioSCdbpqEehIexEEX3zsNO42W07KhIJOtlBUeQeoNQRJQEwbvubNI0qEgnDxnR-HSPBGxEyHmObWeYqPCoSCfZrO-TNDcaZEQ_1aXv3xbWys&tbo=u&sa=X&ved=2ahUKEwiZ_5nlzdDeAhX_HjQIHZh6Dt4Q9C96BAgBEBs&biw=1462&bih=978&dpr=2#imgrc=R5aTcK9L7HmW1M:
//https://giphy.com/gifs/ToMjGpQamoXkAtMsh0Y/html5