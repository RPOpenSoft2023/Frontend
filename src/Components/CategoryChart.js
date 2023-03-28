import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
const CategoryChart = (props) => {
  let data = props.data.analytics;
  let categoryChartData = new Array();
  for (let key in data[0].categorizedData) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].categorizedData[`${key}`].totalSectorMonthExpense > 0) {
        sum += data[i].categorizedData[`${key}`].totalSectorMonthExpense;
      }
    }
    const newChartObj = {
      type: key,
      value: sum,
    };
    categoryChartData.push(newChartObj);
  }
  const config = {
    appendPadding: 10,
    data: categoryChartData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

// ReactDOM.render(<DemoPie />, document.getElementById('container'));
export default CategoryChart;
