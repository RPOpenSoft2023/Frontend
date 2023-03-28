import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { useContext } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
const CategoryChartDashboard = (props) => {
  let type = props.type;
  let data = props.data;
  const [
    BankingDetails,
    setBankingDetails,
    userData,
    setUserData,
    Categories,
    setCategories,
  ] = useContext(BankingdetailsContext);
  // console.log("data", data);
  let categoryChartData = new Array();
  for (let i = 0; i < Categories.length; i++) {
    let sum = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].category === Categories[i]) {
        if (props.type === "credit") {
          sum += Number(data[j].credit);
        } else {
          sum += Number(data[j].debit);
        }
      }
    }
    if (sum > 0) {
      categoryChartData.push({
        type: Categories[i],
        value: sum,
      });
    }
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
    height: 150,
  };
  return <Pie {...config} />;
};

// ReactDOM.render(<DemoPie />, document.getElementById('container'));
export default CategoryChartDashboard;
