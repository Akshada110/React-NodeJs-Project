const express = require("express");
const router = express.Router();
const fs = require("fs");

const getServiceChart = () => {
  const fPath = `${process.cwd()}/data/servicename.json`;
  console.log("path==", fPath);
  var jsonData = fs.readFileSync(fPath);
  //When receiving data from a web server, the data is always a string.
  //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  return JSON.parse(jsonData);
};

router.get("/", (req, res) => {
  //console.log("JSON Parse", getChartData());
  res.send(getServiceChart());
});

module.exports = router;
