const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Meet@123",
  database: process.env.DB_PASS,
});

// db.connect((err) => {
//   if (err) {
//     console.log("there is something wrong", err);
//   } else {
//     console.log("database is connected");
//   }
// });

module.exports = db;
