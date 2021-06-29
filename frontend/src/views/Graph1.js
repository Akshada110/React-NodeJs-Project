import React, { Component, useEffect } from "react";
import getAllUsers from "../services/channel";
//const url = "http://localhost:3001/api/charts";
//"proxy": "http://localhost:3001/api/charts",
import BarChart from "./BarChart";

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      low: [],
      medium: [],
      high: [],
      childRender: false,
      flag: true,
    };
  }

  componentDidMount() {
    getAllUsers(this.state.flag)
      .then((result) => {
        console.log("Graph1.js Component didmount getallusers", result);
        this.setState({
          users: result.map((ele) => ele.serviceName, +" "),
          low: result.map((ele) => ele.lowRisk, +" "),
          medium: result.map((ele) => ele.mediumRisk, +" "),
          high: result.map((ele) => ele.highRisk, +" "),
          childRender: true,
        });
      })
      .catch((err) => {
        console.log(" Graph1.js catch inside componentDidMount");
      });
  }

  handleFlagChange = () => {
    this.setState({ flag: true });
  };

  render() {
    console.log("render Graph1 ", this.state);
    return (
      <>
        <button onClick={this.handleFlagChange}>
          Click for Database page {this.state.flag}
        </button>

        {this.state.childRender && (
          <>
            <div className="container">
              <BarChart channel={this.state} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default Graphs;
