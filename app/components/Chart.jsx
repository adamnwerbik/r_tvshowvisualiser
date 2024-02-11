"use client";
import React from "react"; // Importing the React library
import Chart from "chart.js/auto"; // Importing the Chart.js library
import { Scatter } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library
import chartTrendline from "chartjs-plugin-trendline";

// Setting up the labels for the x-axis of the chart

// Setting up the data for the chart, including the labels and datasets
const TVShowData = [
  {
    label: "The Wire", // Setting up the label for the dataset
    data: [6, 4, 1, 8, 10, 2], // Setting up the data for the dataset
    tension: 0.3,
    showLine: true,
    trendlineLinear: {
      style: "rgb(43 ,66 ,255, 0.3)",
      lineStyle: "dotted",
      width: 2,
    },
  },
  {
    label: "The Sopranos", // Setting up the label for the dataset
    data: [10, 9, 4, 7, 6], // Setting up the data for the dataset
    tension: 0.3,
    showLine: true,
    trendlineLinear: {
      style: "rgb(43 ,66 ,255, 0.3)",
      lineStyle: "dotted",
      width: 2,
    },
  },
];

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
      min: 0,
      ticks: {
        // forces step size to be 50 units
        precision: 0,
      },
    },
  },
};

// Defining the LineChart component
const Chart = ({ tvshowdata }) => {
  const TVShowDataTest = [
    {
      label: "XXXX", // Setting up the label for the dataset
      data: [1, 2, 3], // Setting up the data for the dataset
      tension: 0.3,
      showLine: true,
      trendlineLinear: {
        style: "rgb(43 ,66 ,255, 0.3)",
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
      //{console.log(tvshowdata)}
    </>
  );
};

export default Chart; // Exporting the LineChart component as the default export of the module
