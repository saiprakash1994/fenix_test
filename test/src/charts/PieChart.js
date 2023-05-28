import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["India", 1200],
    ['China',1400],
  ];

export const options = {
  title: "Country Population",
  pieHole: 0.4,
  is3D: false,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
