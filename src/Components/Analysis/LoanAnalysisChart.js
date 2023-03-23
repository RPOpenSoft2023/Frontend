// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Area } from '@ant-design/plots';
import data from '../../Data/LoanAnalysisData'
// const LoanAnalysisChart = () => {

//   const config = {
//     data,
//     xField: 'Month',
//     yField: 'value',
//     seriesField: 'category',
//     color: ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#bfdbfe'],
//     // xAxis: {
//     //   type: 'month',
//     //   mask: 'YYYY',
//     // },
//     // yAxis: {
//     //   label: {
//     //     // 数值格式化为千分位
//     //     formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
//     //   },
//     // },
//     legend: {
//       position: 'top',
//     },
//   };

//   return <Area {...config} />;
// };

// export default LoanAnalysisChart

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const LoanAnalysisChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
  const config = {
    data,
    xField: 'Month',
    yField: 'value',
    seriesField: 'category',
    // yAxis: {
    //   label: {
    //     formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
    //   },
    // },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default LoanAnalysisChart
