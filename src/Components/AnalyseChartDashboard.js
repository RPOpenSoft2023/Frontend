import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";

const AnalyseChartDashboard = (props) => {
  let data = props.data;
  //   data = data.analytics
  let chartData = [];
  //   for(let i=0; i<data.length; ++i){
  //     const monthEntry1 = {}
  //     monthEntry1.value = data[i].totalMonthExpense
  //     monthEntry1.name = "Expense"
  //     monthEntry1.date = String(Number(data[i].month) + 1) + "," + String(data[i].year)
  //     chartData.push(monthEntry1)
  //     const monthEntry2 = {}
  //     monthEntry2.value = data[i].totalMonthIncome
  //     monthEntry2.name = "Credit"
  //     monthEntry2.date = String(Number(data[i].month) + 1) + "," + String(data[i].year)
  //     chartData.push(monthEntry2)
  //   }
  for (let i = 0; i < 30; i++) {
    if (Number(data[i].credit) === 0) {
      chartData.push({
        name: "debit",
        value: Number(data[i].debit),
        index: i,
      });
    } else {
      chartData.push({
        name: "credit",
        value: Number(data[i].credit),
        index: i,
      });
    }
  }
  const config = {
    data: chartData,
    xField: "index",
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
    height: 150,
  };

  return <Line {...config} />;
};

export default AnalyseChartDashboard;
