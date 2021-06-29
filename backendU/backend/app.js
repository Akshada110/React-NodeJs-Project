const debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const logger = require("./middleware/logger");
const charts = require("./routes/charts");
const envCharts = require("./routes/envCharts");
const serviceCharts = require("./routes/serviceCharts");

const home = require("./routes/home");
const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

app.use(cors());

app.set("view engine", "pug");
app.set("views", "./views"); // default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(logger);



app.use("/api/charts/:flag", charts);
app.use("/api/env", envCharts);
app.use("/api/servicename", serviceCharts);

app.use("/", home);
console.log("Akshada");
// Configuration

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("error in app.js at 51 line");
  var err = new Error("Route Not Found");
  err.status = 404;
  next(err);

  // next(createError.NotFound(404, "Route Does Not Exist"));
});

// error handler
app.use(function (err, req, res) {
  console.log("error in app.js at 61 line", err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page Internal Server Error
  res.status(err.status || 500);
  res.render("Errror-- Inrernal Server Error");
});

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
