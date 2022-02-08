const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var currentDay = new Date().getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = days[currentDay];

  res.render("list", { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
