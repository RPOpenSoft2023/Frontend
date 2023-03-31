import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Month } from "../../constants/Month";
const LoanAnalysisChart = (props) => {
  let { data } = props;
  data = data.analytics;
  let LoanChartData = [];
  for (let i = 0; i < data.length; ++i) {
    const monthEntry1 = {};
    monthEntry1.value = data[i].loanDetails["credit"].amount;
    monthEntry1.Category = "Credit";
    monthEntry1.date =
      Month[Number(data[i].month) + 1] + "," + String(data[i].year);
    LoanChartData.push(monthEntry1);
    const monthEntry2 = {};
    monthEntry2.value = data[i].loanDetails["debit"].amount;
    monthEntry2.Category = "Debit";
    monthEntry2.date =
      Month[Number(data[i].month) + 1] + "," + String(data[i].year);
    LoanChartData.push(monthEntry2);
  }
  const config = {
    data: LoanChartData,
    xField: "date",
    yField: "value",
    seriesField: "Category",
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

export default LoanAnalysisChart;
