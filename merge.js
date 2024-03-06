import * as signup from "../js/signup.js";
import * as login from "../js/login.js";
import * as hack3 from "../js/hack3.js";
import * as confirm from "../js/confirm.js";

signup.Change();
login.Event();
hack3.datepicker();
confirm.Confirm();

const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "rooot",
  password: "Sourav@123",
  database: "train_booking",
});

pool.query("SELECT * FROM booking", (error, results, fields) => {
  if (error) {
    console.error("Error fetching data:", error);
    return;
  }
  console.log("Booking data:", results);
});

pool.end((error) => {
  if (error) {
    console.error("Error closing pool:", error);
    return;
  }
  console.log("Connection pool closed");
});
