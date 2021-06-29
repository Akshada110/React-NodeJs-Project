//const express = require("express");
const Graph = require("../model/Graph");
const mongoose = require("mongoose");
const fs = require("fs");
let flag;

mongoose
  .connect("mongodb://localhost:27017/graphs-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is successfull..!!");
  })
  .catch(() => {
    console.log("No connection...!!");
  });

const getChartData = async (req, res) => {
  // console.log("flagvalue", req);

  flag = req.params.flag;
  console.log("chart.js flag value : ", flag);
  console.log(typeof flag);

  if (flag) {
    try {
      console.log("data loading from JSON", flag);
      const fPath = `${process.cwd()}/data/servicename.json`;
      // console.log("path==", fPath);
      var jsonData = await fs.readFileSync(fPath);
      console.log("getChartData", JSON.parse(jsonData));
      res.status(200).send(JSON.parse(jsonData));
    } catch (err) {
      res.status(500).send("internal server error");
    }
  } else {
    try {
      const data = await Graph.find();
      console.log("data loading from mongoDB");
      console.log("Data", data);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

// const getChartData = async (req, res) => {
//   console.log("getChartData");
//   try {
//     const data = await Graph.find();
//     console.log("Data", data);
//     res.status(200).send(data);

//     // const result = data.map((ele) =>
//     //   console.log("Graph data:", ele.serviceName)
//     // );
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

module.exports = getChartData;
