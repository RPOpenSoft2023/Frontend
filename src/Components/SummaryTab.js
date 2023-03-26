import { Switch, Table } from 'antd';
import { useState } from 'react';
import Data from '../Data/SummaryColumn'

const SummaryTab = (props) => {

const SummaryData = props.data.analytics;
const MonthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const data = [];
for (let i = 0; i < SummaryData.length; i++) {
 data.push({
   key: i,
   month: MonthNames[SummaryData[i].month]+' '+SummaryData[i].year,
   averageDayWiseExpense:(SummaryData[i].averageDayWiseExpense).toFixed(3),
   averageDayWiseIncome:SummaryData[i].averageDayWiseExpense.toFixed(3),
   totalMonthIncome:SummaryData[i].totalMonthExpense,
   spendingExpenseRatio:SummaryData[i].spendingExpenseRatio.toFixed(3),
   travelling:SummaryData[i].categorizedData.travelling.totalSectorMonthExpense.toFixed(3),
   shoppingAndFood:SummaryData[i].categorizedData.shoppingAndFood.totalSectorMonthExpense.toFixed(3),
   investmentAndSaving:SummaryData[i].categorizedData.investmentAndSaving.totalSectorMonthExpense.toFixed(3),
   medicalAndHealthcare:SummaryData[i].categorizedData.medicalAndHealthcare.totalSectorMonthExpense.toFixed(3),
   utilities:SummaryData[i].categorizedData.utilities.totalSectorMonthExpense.toFixed(3),
   others:SummaryData[i].categorizedData.others.totalSectorMonthExpense.toFixed(3),
 });
}

const rowClassName = (record, index) => {
  return index === 0 ? 'bold-row' : '';
};


 return (

   <Table
     columns={Data}
     dataSource={data}
     align='center'
     className='table-with-border'
     pagination={{ pageSize: 10 }}
     rowClassName={rowClassName}
    //  scroll={{
    //    x: 1500,
    //  }}
   />
 );
};
export default SummaryTab;