import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';
import data from '../Data/TransactionTypeData'
const StackedPlot = (props) => {
  let {data} = props;
  data  = data.analytics
  let stackData = new Array()
  for(let i=0; i<data.length; ++i){
    for(let key in data[i].transactionTypes){
      let newEntry = {}
      if(data[i].transactionTypes[key] != 0){
        newEntry.date = String(Number(data[i].month) + 1) + " " + String(data[i].year)
        newEntry.value = data[i].transactionTypes[key]
        newEntry.type = key
        stackData.push(newEntry)
      }
    }
  }
  const config = {
    data: stackData.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'date',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Bar {...config}/>;
};

export default StackedPlot