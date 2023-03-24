import data from '../../Data/LoanAnalysisData'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const LoanAnalysisChart = () => {
  // LoanGraphData(data);
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
      // let data = [{
      //     "analytics": {
      //       "month": 0,
      //         "year": 2020,
      //         "loanDetails": {
      //           "credit": {
      //             "amount": 0.0
      //           },
      //           "debit": {
      //             "amount": 0.0
      //           }
      //         },
      //         "transactionTypes": {
      //           "upi": 1,
      //           "cheque": 1,
      //           "neft": 3,
      //           "rdgs": 0,
      //           "others": 6
      //         },
      //         "averageDayWiseExpense": 7963.433333333333,
      //         "averageDayWiseIncome": 7046.2,
      //         "creditDebitFrequency": {
      //           "creditFreq": 4,
      //           "debitFreq": 7
      //         },
      //         "totalMonthIncome": 211386.0,
      //         "totalMonthExpense": 238903.0,
      //         "spendingExpenseRatio": 0.8848193618330452,
      //         "categorizedData": {
      //           "shoppingAndFood": {
      //             "transactionTypes": {
      //               "upi": 0,
      //               "cheque": 0,
      //               "neft": 0,
      //               "rdgs": 0,
      //               "others": 0
      //             },
      //             "totalSectorMonthIncome": 0.0,
      //             "totalSectorMonthExpense": 0.0,
      //             "count": 0
      //           }}}}]
      
      // let result=[];
      // function LoanGraphData(data){
      //     for(let i=0; i<data.analytics[0].month.length;i++){
      //         result+= ({"Month":data.analytics[0].month[i], "Value":data[i].analytics[0].month[i].debit.amount, "Category":"Debit"});
      //         result+= ({"Month":data.analytics[0].month[i], "Value":data[i].analytics[0].month[i].credit.amount, "Category":"Credit"});
      //     }
      // }
