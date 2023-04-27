import React from "react";
import Chart from "react-apexcharts";

let chartOptions = {
  chart: {},

  labels: ["Apples", "Oranges", "Bananas", "Mangos", "Pineapples"],
  legend: {
    position: "right",
  },

  colors: ["#6c757d", "#007bff", "#28a745", "#ffc107", "#dc3545"],
};

let chartData = [44, 55, 41, 17, 15];

export default function Donut() {
  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="donut"
        height="100%"
        width="100%"
      />
    </div>
  );
}
