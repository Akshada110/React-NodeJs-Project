import React, { Component } from "react";
import Chart from "react-apexcharts";

class EnvBarChart extends Component {
  constructor(props) {
    super(props);
    console.log("barchart - props", props);
    this.state = {
      options: {
        chart: {
          id: "ML - chart",
          // colors: ["#4CAF50", "#FEB019", "#f38b4a"],
          // redrawOnParentResize: true,
        },
        fill: {
          colors: ["#479700", "#0000FF", "#F41605"],
        },
        xaxis: {
          categories: props.environment.users,
        },
      },
      series: [
        {
          name: "low-riskFactor",
          data: props.environment.low,
          color: "#479700",
        },
        {
          name: "medium-riskFactor",
          data: props.environment.medium,
          color: "#0000FF",
        },
        {
          name: "high-riskFactor",
          data: props.environment.high,
          color: "#F41605",
        },
      ],
    };
  }
  render() {
    console.log("barchart render");
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={950}
        height={550}
      />
    );
  }
}

export default EnvBarChart;
