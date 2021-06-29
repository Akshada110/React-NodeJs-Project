import React, { Component, useEffect } from "react";
import getAllUsers from "../services/servicename";
//const url = "http://localhost:3001/api/charts";
//"proxy": "http://localhost:3001/api/charts",
import SNBarChart from "./SNBarChart";
class SNGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      low: [],
      medium: [],
      high: [],
      childRender: false,
    };
  }
  componentDidMount() {
    console.log("Component didmount");
    getAllUsers().then((result) => {
      this.setState({
        users: result.service.map((ele) => ele.servicename, +" "),
        low: result.service.map((ele) => ele.lowRisk, +" "),
        medium: result.service.map((ele) => ele.mediumRisk, +" "),
        high: result.service.map((ele) => ele.highRisk, +" "),
        childRender: true,
      });
    });
  }

  render() {
    console.log("render Graph1 ", this.state);
    return (
      <>
        {this.state.childRender && (
          <>
            <div className="container">
              <SNBarChart service={this.state} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default SNGraph;
