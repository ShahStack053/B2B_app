import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: [
        "SAR",
        100000,
        120000,
        150000,
        130000,
        160000,
        175000,
        200000,
        250000,
      ],
    },
  ],
};

const options = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        suggestedMin: 0, // set the minimum value for the y-axis
        suggestedMax: 250000, // set the maximum value for the y-axis
        stepSize: 50000, // set the step size between ticks
        callback: function (value, index, values) {
          return "SAR " + value / 1000 + "K"; // format the tick label
        },
      },
    },
    x: {
      grid: {
        display: false, // Set display to false to remove the grid lines on the x-axis
      },
    },
  },
};

const LineChart = () => {
  return (
    <div>
      {/* <Line data={data} /> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
