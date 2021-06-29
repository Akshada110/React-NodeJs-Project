import React from "react";
import { Bar } from "react-chartjs-2";
// import Graphs from "./Graphs";
// import { Bar } from "react-chartjs-2";
// var Chart = require("react-chartjs").Bar;

const BarChart4 = (props) => {
  console.log("1.props.channel", props.channel);
  // console.log("BarChart####BarChart", props.channel.low);
  // console.log("BarChart####BarChart", props.channel.medium);
  // console.log("BarChart####BarChart", props.channel.high);
  const state1 = {
    labels: props.channel.users,
    datasets: [
      {
        label: "high riskfactor",
        backgroundColor: "hsl(0, 100%, 50%)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: props.channel.high,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state1}
        options={{
          title: {
            display: true,
            text: "channelname vs high riskFactor.",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default BarChart4;
