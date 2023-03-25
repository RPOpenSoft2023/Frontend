const LoanAnalysisData=[
    {
        "Month": "October",
        "value": 110,
        "category": "Credit"
    },
    {
        "Month": "October",
        "value": 55,
        "category": "Debit"
    },
    {
        "Month": "November",
        "value": 105,
        "category": "Credit"
    },
    {
        "Month": "November",
        "value": 60,
        "category": "Debit"
    },
    {
        "Month": "December",
        "value": 90,
        "category": "Credit"
    },
    {
        "Month": "December",
        "value": 40,
        "category": "Debit"
    },
    {
        "Month": "January",
        "value": 110,
        "category": "Credit"
    },
    {
        "Month": "January",
        "value": 80,
        "category": "Debit"
    },
    {
        "Month": "February",
        "value": 100,
        "category": "Credit"
    },
    {
        "Month": "February",
        "value": 50,
        "category": "Debit"
    },
    {
        "Month": "March",
        "value": 125,
        "category": "Credit"
    },
    {
        "Month": "March",
        "value": 95,
        "category": "Debit"
    },
]
export default LoanAnalysisData

// const data = [{
//     'analytics': {

//         "month": 0,
//         "year": 2020,
//         "loanDetails": {
//             "credit": {
//                 "amount": 0.0
//             },
//             "debit": {
//                 "amount": 0.0
//             }
//         },
//         "transactionTypes": {
//             "upi": 1,
//             "cheque": 1,
//             "neft": 3,
//             "rdgs": 0,
//             "others": 6
//         },
//         "averageDayWiseExpense": 7963.433333333333,
//         "averageDayWiseIncome": 7046.2,
//         "creditDebitFrequency": {
//             "creditFreq": 4,
//             "debitFreq": 7
//         },
//         "totalMonthIncome": 211386.0,
//         "totalMonthExpense": 238903.0,
//         "spendingExpenseRatio": 0.8848193618330452,
//         "categorizedData": {
//             "shoppingAndFood": {
//                 "transactionTypes": {
//                     "upi": 0,
//                     "cheque": 0,
//                     "neft": 0,
//                     "rdgs": 0,
//                     "others": 0
//                 },
//                 "totalSectorMonthIncome": 0.0,
//                 "totalSectorMonthExpense": 0.0,
//                 "count": 0
//             }
//         }
//     }
// },
// {
//     'analytics': {

//         "month": 1,
//         "year": 2020,
//         "loanDetails": {
//             "credit": {
//                 "amount": 52.0
//             },
//             "debit": {
//                 "amount": 70.0
//             }
//         },
//         "transactionTypes": {
//             "upi": 1,
//             "cheque": 1,
//             "neft": 3,
//             "rdgs": 0,
//             "others": 6
//         },
//         "averageDayWiseExpense": 7963.433333333333,
//         "averageDayWiseIncome": 7046.2,
//         "creditDebitFrequency": {
//             "creditFreq": 4,
//             "debitFreq": 7
//         },
//         "totalMonthIncome": 211386.0,
//         "totalMonthExpense": 238903.0,
//         "spendingExpenseRatio": 0.8848193618330452,
//         "categorizedData": {
//             "shoppingAndFood": {
//                 "transactionTypes": {
//                     "upi": 0,
//                     "cheque": 0,
//                     "neft": 0,
//                     "rdgs": 0,
//                     "others": 0
//                 },
//                 "totalSectorMonthIncome": 0.0,
//                 "totalSectorMonthExpense": 0.0,
//                 "count": 0
//             }
//         }
//     }

// },
// {
//     'analytics': {

//         "month": 2,
//         "year": 2020,
//         "loanDetails": {
//             "credit": {
//                 "amount": 5.0
//             },
//             "debit": {
//                 "amount": 10.0
//             }
//         },
//         "transactionTypes": {
//             "upi": 1,
//             "cheque": 1,
//             "neft": 3,
//             "rdgs": 0,
//             "others": 6
//         },
//         "averageDayWiseExpense": 7963.433333333333,
//         "averageDayWiseIncome": 7046.2,
//         "creditDebitFrequency": {
//             "creditFreq": 4,
//             "debitFreq": 7
//         },
//         "totalMonthIncome": 21655386.0,
//         "totalMonthExpense": 238903.0,
//         "spendingExpenseRatio": 0.8848193618330452,
//         "categorizedData": {
//             "shoppingAndFood": {
//                 "transactionTypes": {
//                     "upi": 0,
//                     "cheque": 0,
//                     "neft": 0,
//                     "rdgs": 0,
//                     "others": 0
//                 },
//                 "totalSectorMonthIncome": 0.0,
//                 "totalSectorMonthExpense": 0.0,
//                 "count": 0
//             },
//             "Education": {
//                 "transactionTypes": {
//                     "upi": 0,
//                     "cheque": 0,
//                     "neft": 0,
//                     "rdgs": 0,
//                     "others": 0
//                 },
//                 "totalSectorMonthIncome": 0.0,
//                 "totalSectorMonthExpense": 0.0,
//                 "count": 0
//             }
//         }
//     }

// }
// ]
// let v = [];
// for (let i = 0; i < data.length; i++) {
//     v.push({ "Month": data[i].analytics.month, "value": loanDetailsfunc(data[i].analytics.month).credit.amount, "category": "Debit" });
//     v.push({ "Month": data[i].analytics.month, "value": loanDetailsfunc(data[i].analytics.month).debit.amount, "category": "Credit" });
// }
// function loanDetailsfunc(Month) {
//     let LoanD;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].analytics.month == Month) {
//             LoanD = data[i].analytics.loanDetails;
//             // console.log(LoanD);
//         }
//     }
//     return LoanD;
// }
// const LoanAnalysisData = [
//     {
//         "Month": "October",
//         "value": 55,
//         "category": "Debit"
//     },
//     {
//         "Month": "October",
//         "value": 110,
//         "category": "Credit"
//     },
//     {
//         "Month": "November",
//         "value": 105,
//         "category": "Credit"
//     },
//     {
//         "Month": "November",
//         "value": 60,
//         "category": "Debit"
//     },
//     {
//         "Month": "December",
//         "value": 90,
//         "category": "Credit"
//     },
//     {
//         "Month": "December",
//         "value": 40,
//         "category": "Debit"
//     },
//     {
//         "Month": "January",
//         "value": 110,
//         "category": "Credit"
//     },
//     {
//         "Month": "January",
//         "value": 80,
//         "category": "Debit"
//     },
//     {
//         "Month": "February",
//         "value": 100,
//         "category": "Credit"
//     },
//     {
//         "Month": "February",
//         "value": 50,
//         "category": "Debit"
//     },
//     {
//         "Month": "March",
//         "value": 125,
//         "category": "Credit"
//     },
//     {
//         "Month": "March",
//         "value": 95,
//         "category": "Debit"
//     },
// ]


// export default v;