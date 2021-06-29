import React from "react";
import { Bar } from "react-chartjs-2";
// import Graphs from "./Graphs";
// import { Bar } from "react-chartjs-2";
// var Chart = require("react-chartjs").Bar;

const BarChart2 = (props) => {
  console.log("1.props.channel", props.channel);
  // console.log("BarChart####BarChart", props.channel.low);
  // console.log("BarChart####BarChart", props.channel.medium);
  // console.log("BarChart####BarChart", props.channel.high);

  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)'
  const state1 = {
    labels: props.channel.users,
    datasets: [
      {
        label: "low riskFactor",
        backgroundColor: "hsl(120, 100%, 25%)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: props.channel.low,
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
            text: "channelname vs low riskFactor.",
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
export default BarChart2;
