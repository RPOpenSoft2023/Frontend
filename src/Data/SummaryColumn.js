import { Children } from "react";

const data=[
    {
        title: 'Month',
        width: 50,
        dataIndex: 'month',
        key: 'month',
        fixed: 'left',
        align:'center'
      },
      {
        title: 'averageDayWiseIncome',
        width: 50,
        dataIndex: 'averageDayWiseIncome',
        key: 'averageDayWiseIncome',
        align:'center'
      },
      {
        title: 'averageDayWiseExpense',
        width: 50,
        dataIndex: 'averageDayWiseIncome',
        key: 'averageDayWiseIncome',
        align:'center'
      },
      {
        title: 'TotalMonthlyIncome',
        width: 50,
        dataIndex: 'totalMonthIncome',
        key: 'totalMonthIncome',
        align:'center'
      },
      {
        title: 'Categories',
        width: 50,
        dataIndex: 'spendingExpenseRatio',
        key: 'spendingExpenseRatio',
        align:'center',
        children:[
          {
            title:"Food",
            dataIndex:"food"
          }
        ]
      },
    //   {
    //     title: 'Travel',
    //     width: 50,
    //     dataIndex: 'travel',
    //     key: 'travel',
    //     align:'center'
    //     // fixed: 'left',
    //   },
 
 
 ]
 export default data;