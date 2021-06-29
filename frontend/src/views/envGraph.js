import React, { Component, useEffect } from "react";
import getAllUsers from "../services/environment";
//const url = "http://localhost:3001/api/charts";
//"proxy": "http://localhost:3001/api/charts",
import EnvBarChart from "./EnvBarChart";
class envGraph extends Component {
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
        users: result.environment.map((ele) => ele.environmentname, +" "),
        low: result.environment.map((ele) => ele.lowRisk, +" "),
        medium: result.environment.map((ele) => ele.mediumRisk, +" "),
        high: result.environment.map((ele) => ele.highRisk, +" "),
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
              <EnvBarChart environment={this.state} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default envGraph;
