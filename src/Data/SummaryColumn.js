const data=[
    {
        title: 'Month',
        width: '20%',
        dataIndex: 'month',
        key: 'month',
        fixed: 'left',
        align:'center',
        className: 'bordered-table',
      },
      
      {
        title: 'Average Daywise Expense',
        width: '20%',
        dataIndex: 'averageDayWiseExpense',
        key: 'averageDayWiseExpense',
        align:'center',
        className: 'bordered-table',
      },

      {
        title: 'Average Daywise Income',
        width: '20%',
        dataIndex: 'averageDayWiseIncome',
        key: 'averageDayWiseIncome',
        align:'center',
        className: 'bordered-table',
      },

      {
        title: 'Spending-Income Ratio',
        width: '20%',
        dataIndex: 'spendingExpenseRatio',
        key: 'spendingExpenseRatio',
        align:'center',
        className: 'bordered-table',
      },
      
      
      {
        title: 'Category of Transactions',
        width: '20%',
        dataIndex: 'category',
        key: 'category',
        align:'center',
        className: 'bordered-table',
        children: [
          {
            title: 'Travel',
            key: 'travelling',
            width: '10%',
            dataIndex: 'travelling',
            align:'center',
            className: 'bordered-table',
          },
          {
            title: 'Shopping and Food',
            key: 'shoppingAndFood',
            width: '10%',
            dataIndex: 'shoppingAndFood',
            align:'center',
            className: 'bordered-table',
          },
          {
            title: 'Investment & Saving',
            key: 'investmentAndSaving',
            width: '10%',
            dataIndex: 'investmentAndSaving',
            align:'center',
            className: 'bordered-table',
          },
          {
            title: 'Medical & Healthcare',
            key: 'medicalAndHealthcare',
            width: '10%',
            dataIndex: 'medicalAndHealthcare',
            align:'center',
            className: 'bordered-table',
          },
          {
            title: 'Utilities',
            key: 'utilities',
            width: '10%',
            dataIndex: 'utilities',
            align:'center',
            className: 'bordered-table',
          },
          {
            title: 'Others',
            key: 'others',
            width: '10%',
            dataIndex: 'others',
            align:'center',
            className: 'bordered-table',
          }
        ]
      },
 
 ]
 export default data;