import { Children } from "react";

const data=[
    {
        title: 'Month',
        width: '20%',
        dataIndex: 'month',
        key: 'month',
        fixed: 'left',
        align:'center',
        className: 'bordered-table',
        ellipsis: false,
      },
      
      {
        title: 'Average Daywise Expense',
        width: '20%',
        dataIndex: 'averageDayWiseExpense',
        key: 'averageDayWiseExpense',
        align:'center',
        className: 'bordered-table',
        ellipsis: false,
      },

      {
        title: 'Average Daywise Income',
        width: '20%',
        dataIndex: 'averageDayWiseIncome',
        key: 'averageDayWiseIncome',
        align:'center',
        className: 'bordered-table',
        ellipsis: false,
      },

      {
        title: 'Spending-Income Ratio',
        width: 50,
        dataIndex: 'spendingExpenseRatio',
        key: 'spendingExpenseRatio',
        align:'center',
        ellipsis: false,
      },
      
      
      {
        title: 'Category of Transactions',
        width: '20%',
        dataIndex: 'category',
        key: 'category',
        align:'center',
        className: 'bordered-table',
        ellipsis: false,
        children: [
          {
            title: 'Travel',
            key: 'travelling',
            width: '10%',
            dataIndex: 'travelling',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          },
          {
            title: 'Shopping and Food',
            key: 'shoppingAndFood',
            width: '10%',
            dataIndex: 'shoppingAndFood',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          },
          {
            title: 'Investment & Saving',
            key: 'investmentAndSaving',
            width: '10%',
            dataIndex: 'investmentAndSaving',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          },
          {
            title: 'Medical & Healthcare',
            key: 'medicalAndHealthcare',
            width: '10%',
            dataIndex: 'medicalAndHealthcare',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          },
          {
            title: 'Utilities',
            key: 'utilities',
            width: '10%',
            dataIndex: 'utilities',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          },
          {
            title: 'Others',
            key: 'others',
            width: '10%',
            dataIndex: 'others',
            align:'center',
            className: 'bordered-table',
            ellipsis: false,
          }
        ]
      },
 
 ]
 export default data;