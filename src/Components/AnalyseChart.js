import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Month } from "../constants/Month";
const AnalyseChart = (props) => {
  let { data } = props;
  data = data.analytics;
  let chartData = [];
  for (let i = 0; i < data.length; ++i) {
    const monthEntry1 = {};
    monthEntry1.value = data[i].totalMonthExpense;
    monthEntry1.name = "Expense";
    monthEntry1.date =
      Month[Number(data[i].month) + 1] + "," + String(data[i].year);
    chartData.push(monthEntry1);
    const monthEntry2 = {};
    monthEntry2.value = data[i].totalMonthIncome;
    monthEntry2.name = "Credit";
    monthEntry2.date =
    Month[Number(data[i].month) + 1] + "," + String(data[i].year);
    chartData.push(monthEntry2);
  }

  const config = {
    data: chartData,
    xField: "date",
    yField: "value",
    seriesField: "name",
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default AnalyseChart;
