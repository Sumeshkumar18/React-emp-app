import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Widget",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/widgetData")
      .then((result) => {
        //console.log(result)
        const widgetData = result.data;
        //console.log(widgetData)
        if (Array.isArray(widgetData)) {
          setChartData({
            options: {
              chart: {
                id: "basic-line",
              },
              xaxis: {
                categories: widgetData.map((data) => data.title),
              },
            },
            series: [
              {
                name: "widget",
                data: widgetData.map((data) => data.count),
              },
            ],
          });
        } else {
          //console.error("widgetData is not an array");
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  );
}
