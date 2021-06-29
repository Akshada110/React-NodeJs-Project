import React, { Component, useEffect } from "react";
// import getAllUsers from "../service";
import getAllUsers from "../services/channel";
//const url = "http://localhost:3001/api/charts";
//"proxy": "http://localhost:3001/api/charts",

import BarChart3 from "./BarChart3";

class Graph3 extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], low: [], medium: [], high: [] };
  }

  componentDidMount() {
    console.log("Component didmount");
    getAllUsers().then((result) => {
      this.setState({
        users: result.channel.map((ele) => ele.channelname, +" "),
        low: result.channel.map((ele) => ele.lowRisk, +" "),
        medium: result.channel.map((ele) => ele.mediumRisk, +" "),
        high: result.channel.map((ele) => ele.highRisk, +" "),
      });
    });
  }

  render() {
    console.log("render Graph ", this.state);
    return (
      <>
        <div className="container">
          <BarChart3 channel={this.state} />
        </div>
      </>
    );
  }
}
export default Graph3;
