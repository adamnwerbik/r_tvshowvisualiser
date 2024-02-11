"use client";
import React from "react"; // Importing the React library
import Chart from "chart.js/auto"; // Importing the Chart.js library
import { Scatter } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library
import chartTrendline from "chartjs-plugin-trendline";

// Setting up the labels for the x-axis of the chart

const options = {
  elements: { line: { borderWidth: 2, borderDash: [1, 0] } },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Episode Rating",
      },
    },
    x: {
      title: { display: true, text: "Episode Number" },
      min: 1,
      ticks: {
        // forces step size to be 50 units
        precision: 0,
      },
    },
  },
};

function convertToChartableData(data) {
  //Assumes data is {{id:{data:{fetchAllData(id)}}}, ...}
  const chartableData = [];
  data.forEach((e) => {});
  data;

  return chartableData;
}
// Defining the LineChart component
const MyChart = ({ tvshowdata }) => {
  const TVShowDataTest = [
    {
      label: "XXXX", // Setting up the label for the dataset
      data: [5, 2, 6, 4, null, 6.7, 9, 10, 6.7, 9, 10, 6.7, 9, 10], // Setting up the data for the dataset
      tension: 0.3,
      showLine: true,
      trendlineLinear: {
        style: "rgb(43 ,66 ,255, 0.3)",
        lineStyle: "dotted",
        width: 2,
      },
    },
    {
      label: "YYYYY", // Setting up the label for the dataset
      data: [6.7, 9, 10, 5, null, 6, 4], // Setting up the data for the dataset
      tension: 0.3,
      showLine: true,
      trendlineLinear: {
        style: "rgb(43 ,66 ,25, 0.3)",
        lineStyle: "dotted",
        width: 2,
      },
    },
    {
      label: "AAAA", // Setting up the label for the dataset
      data: [6.7, 5, null, 6, 4, 9, 10], // Setting up the data for the dataset
      tension: 0.3,
      showLine: true,
      trendlineLinear: {
        style: "rgb(43 ,66 ,215, 0.3)",
        lineStyle: "dotted",
        width: 2,
      },
    },
  ];
  const data = {
    labels: [...Array(100).keys()],
    datasets: TVShowDataTest,
  };

  return (
    <>
      <Scatter data={data} options={options} plugins={[chartTrendline]} />
    </>
  );
};

export default MyChart; // Exporting the LineChart component as the default export of the module
