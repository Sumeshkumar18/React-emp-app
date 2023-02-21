import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Piechart() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "pie",
      },
      labels: [],
    },
    series: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/widgetData")
      .then((response) => {
        const data = response.data;
        console.log({data})
        const labels = data.map((item) => item.title);
        const series = data.map((item) =>
        item.count);
        console.log({series})
        setChartData({
          options: {
            chart: {
              type: "pie",
            },
            labels: labels,
          },
          series: series,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
}
