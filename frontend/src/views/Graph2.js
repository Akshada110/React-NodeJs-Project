import React, { Component, useEffect } from "react";
// import getAllUsers from "../service";
import getAllUsers from "../services/channel";
//const url = "http://localhost:3001/api/charts";
//"proxy": "http://localhost:3001/api/charts",
import BarChart2 from "./BarChart2";
// import BarChart3 from "./BarChart3";
// import BarChart4 from "./BarChart4";

class Graph2 extends Component {
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
      //console.log("################   data   ##############", result);
      // console.log(userAPIClient);
      // console.log(loadData);
      // console.log("######################", this.state.users);
      // console.log("######################", this.state.low);
      // console.log("######################", this.state.medium);
      // console.log("######################", this.state.high);
    });
  }

  render() {
    console.log("render Graph ", this.state);
    return (
      <>
        <div className="container">
          <BarChart2 channel={this.state} />
        </div>
      </>
    );
  }
}
export default Graph2;
