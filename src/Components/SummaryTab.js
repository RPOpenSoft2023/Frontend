import { Switch, Table } from 'antd';
import { useState } from 'react';
import Data from '../Data/SummaryColumn'
import SummaryData from '../Data/SummaryData'
const data = [];
for (let i = 0; i < SummaryData.length; i++) {
 data.push({
   key: i,
   month: SummaryData[i].month+' '+SummaryData[i].year,
   LoanCredit:(SummaryData[i].loanDetails.credit.amount*100)/100,
   LoanDebit:(SummaryData[i].loanDetails.debit.amount*100)/100,
   averageDayWiseExpense:(SummaryData[i].averageDayWiseExpense).toFixed(3),
   averageDayWiseIncome:SummaryData[i].averageDayWiseExpense.toFixed(3),
   totalMonthIncome:SummaryData[i].totalMonthExpense,
   spendingExpenseRatio:SummaryData[i].spendingExpenseRatio.toFixed(3),
 });
}
const SummaryTab = () => {
//   const [fixedTop, setFixedTop] = useState(false);
 return (
   <Table
     columns={Data}
     dataSource={data}
     align='center'
    //  scroll={{
    //    x: 1500,
    //  }}


  
   />
 );
};
export default SummaryTab;