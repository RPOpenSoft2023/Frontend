import AnalyserCard from "../Components/AnalyserCard";
import StackedPlot from "../Components/StackedPlot";
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import { Card, Table, Spin, Button } from "antd";
import { Tabs } from "antd";
import AnalyseChart from "../Components/AnalyseChart";
import CategoryChart from "../Components/CategoryChart";
import { useLocation, useNavigate } from "react-router";
import LoanAnalysisChart from "../Components/Analysis/LoanAnalysisChart";
import SummaryTab from "../Components/SummaryTab";
import { useEffect, useState } from "react";
import axios from "axios";
import SuspiciousActivities from "../Components/SuspiciousActivities";
import { showToastMessage } from "../Components/Toast";
import { Link } from "react-router-dom";
import { CSVLink, CSVDownload } from "react-csv";
function averageIncome(data) {
  var avg = 0;
  for (let i = 0; i < data.analytics.length; i++) {
    avg += data.analytics[i].averageDayWiseIncome;
  }
  return avg / data.analytics.length;
}
function averageSpending(data) {
  var avg = 0;
  for (let i = 0; i < data.analytics.length; i++) {
    avg += data.analytics[i].averageDayWiseExpense;
  }
  return avg / data.analytics.length;
}
function IncomeSpend(data) {
  var num = averageSpending(data) / averageIncome(data);
  num = num.toString(); //If it's not already a String
  num = num.slice(0, num.indexOf(".") + 3); //With 3 exposing the hundredths place
  return Number(num);
}
function CreditFrequency(data) {
  var avg = 0;
  for (let i = 0; i < data.analytics.length; i++) {
    avg += data.analytics[i].creditDebitFrequency.creditFreq;
  }
  return avg / data.analytics.length;
}
function DebitFrequency(data) {
  var avg = 0;
  for (let i = 0; i < data.analytics.length; i++) {
    avg += data.analytics[i].creditDebitFrequency.debitFreq;
  }
  return avg / data.analytics.length;
}
function CreditDebit(data) {
  return CreditFrequency(data) / DebitFrequency(data);
}
const Analyser = (props) => {
  const location = useLocation();
  const [start_month, setStartMonth] = useState(location.state.StartMonth - 1);
  const navigate = useNavigate();
  const [start_year, setStartYear] = useState(location.state.StartYear);
  const [end_month, setEndMonth] = useState(location.state.EndMonth - 1);
  const [end_year, setEndYear] = useState(location.state.EndYear);
  const [data, setData] = useState({});
  const [user, setUser] = useState({ loading: true });
  const [cardBlocksData, setCardData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [TableData, setTableData] = useState([]);
  const [Download, setDownload] = useState(false);
  const headers = [
    { label: "Month", key: "month" },
    { label: "Average Day Wise Expense", key: "averageDayWiseExpense" },
    { label: "Average Day Wise Income", key: "averageDayWiseIncome" },
    { label: "Spending Expense Ratio", key: "spendingExpenseRatio" },
    { label: "Travelling", key: "travelling" },
    { label: "Shopping And Food", key: "shoppingAndFood" },
    {
      label: "Investment And Saving",
      key: "investmentAndSaving",
    },
    {
      label: "Medical and Healthcare",
      key: "medicalAndHealthcare",
    },
    { label: "Utilities", key: "utilities" },
    { label: "Others", key: "others" },
  ];
  const MonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    // console.log('Hi')
    if (!location.state.file) {
      console.log("location.sate", location.state);
      const account_number = location.state.AccountNo;
      console.log("account_number", account_number);
      setStartMonth(location.state.StartMonth - 1);
      setStartYear(location.state.StartYear);
      setEndMonth(location.state.EndMonth - 1);
      setEndYear(location.state.EndYear);
      axios({
        method: "get",
        url: `${process.env.REACT_APP_ANALYSER_API}/analyse/api/bank-analysis`,
        params: {
          account_number: account_number,
          start_month: start_month,
          start_year: start_year,
          end_month: end_month,
          end_year: end_year,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt_token"),
          "content-type": "application/json",
        },
      })
        .then((res) => {
          setCardData([
            {
              key: 1,
              num: averageIncome(res.data).toFixed(2),
              title: "Average Day Income",
            },
            {
              key: 2,
              num: averageSpending(res.data).toFixed(2),
              title: "Average Day Expense",
            },
            {
              key: 3,
              num: IncomeSpend(res.data).toFixed(2),
              title: "Spending/Income",
            },
            {
              key: 4,
              num: CreditFrequency(res.data).toFixed(2),
              title: "Credit Frequency",
            },
            {
              key: 5,
              num: DebitFrequency(res.data).toFixed(2),
              title: "Debit Frequency",
            },
          ]);
          setUser({
            ...user,
            loading: false,
          });
          setData(res.data);
          const SummaryData = res.data.analytics;
          const arr = [];
          for (let i = 0; i < SummaryData.length; i++) {
            arr.push({
              key: i,
              month:
                MonthNames[SummaryData[i].month] + " " + SummaryData[i].year,
              averageDayWiseExpense:
                SummaryData[i].averageDayWiseExpense.toFixed(2),
              averageDayWiseIncome:
                SummaryData[i].averageDayWiseIncome.toFixed(2),
              spendingExpenseRatio:
                SummaryData[i].spendingExpenseRatio.toFixed(2),
              travelling:
                SummaryData[
                  i
                ].categorizedData.travelling.totalSectorMonthExpense.toFixed(2),
              shoppingAndFood:
                SummaryData[
                  i
                ].categorizedData.shoppingAndFood.totalSectorMonthExpense.toFixed(
                  2
                ),
              investmentAndSaving:
                SummaryData[
                  i
                ].categorizedData.investmentAndSaving.totalSectorMonthExpense.toFixed(
                  2
                ),
              medicalAndHealthcare:
                SummaryData[
                  i
                ].categorizedData.medicalAndHealthcare.totalSectorMonthExpense.toFixed(
                  2
                ),
              utilities:
                SummaryData[
                  i
                ].categorizedData.utilities.totalSectorMonthExpense.toFixed(2),
              others:
                SummaryData[
                  i
                ].categorizedData.others.totalSectorMonthExpense.toFixed(2),
            });
          }
          setTableData(arr);
        })
        .catch((error) => {
          showToastMessage(error.response.data.message, "negative");
          navigate("/dashboard");
          console.log(error);
        });
      setTransactionData(location.state.transactions);
    } else {
      console.log("location.sate", location.state.file);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_ANALYSER_API}/analyse/api/statement-analyse/`,
        data: {
          file: location.state.file,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          setCardData([
            {
              key: 1,
              num: averageIncome(res.data).toFixed(2),
              title: "Average Day Income",
            },
            {
              key: 2,
              num: averageSpending(res.data).toFixed(2),
              title: "Average Day Expense",
            },
            {
              key: 3,
              num: IncomeSpend(res.data).toFixed(2),
              title: "Spending/Income",
            },
            {
              key: 4,
              num: CreditFrequency(res.data).toFixed(2),
              title: "Credit Frequency",
            },
            {
              key: 5,
              num: DebitFrequency(res.data).toFixed(2),
              title: "Debit Frequency",
            },
          ]);
          setUser({
            ...user,
            loading: false,
          });
          setData(res.data);
          const SummaryData = res.data.analytics;
          const arr = [];
          for (let i = 0; i < SummaryData.length; i++) {
            arr.push({
              key: i,
              month:
                MonthNames[SummaryData[i].month] + " " + SummaryData[i].year,
              averageDayWiseExpense:
                SummaryData[i].averageDayWiseExpense.toFixed(2),
              averageDayWiseIncome:
                SummaryData[i].averageDayWiseIncome.toFixed(2),
              spendingExpenseRatio:
                SummaryData[i].spendingExpenseRatio.toFixed(2),
              travelling:
                SummaryData[
                  i
                ].categorizedData.travelling.totalSectorMonthExpense.toFixed(2),
              shoppingAndFood:
                SummaryData[
                  i
                ].categorizedData.shoppingAndFood.totalSectorMonthExpense.toFixed(
                  2
                ),
              investmentAndSaving:
                SummaryData[
                  i
                ].categorizedData.investmentAndSaving.totalSectorMonthExpense.toFixed(
                  2
                ),
              medicalAndHealthcare:
                SummaryData[
                  i
                ].categorizedData.medicalAndHealthcare.totalSectorMonthExpense.toFixed(
                  2
                ),
              utilities:
                SummaryData[
                  i
                ].categorizedData.utilities.totalSectorMonthExpense.toFixed(2),
              others:
                SummaryData[
                  i
                ].categorizedData.others.totalSectorMonthExpense.toFixed(2),
            });
          }
          setTableData(arr);
          location.state.file = null;
        })
        .catch((error) => {
          console.log("error", error);
          console.log("error.message", error.message);
        });
    }
  }, []);
  const downloadFile = (e) => {
    const input1 = document.getElementById("1");
    const input2 = document.getElementById("2");
    const input3 = document.getElementById("3");
    const input4 = document.getElementById("4");
    window.print();
  };
  // useAuth();
  if (!user.loading) {
    const items = [
      {
        key: "1",
        label: `Overview`,
        children: (
          <div id="1">
            <div className="my-3 flex justify-center flex-wrap gap-3">
              {cardBlocksData.map((data) => (
                <AnalyserCard
                  key={data.key}
                  id={data.key}
                  data={data.num}
                  title={data.title}
                  style={{ width: "100%", maxWidth: "400px", margin: "0.5rem" }}
                />
              ))}
            </div>

            <div
              className="bg-inherit space-x-4 p-8"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                title="Credit & Expenditure"
                className="shadow-lg"
                bordered={true}
                style={{
                  width: "50%",
                  height: "50%",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <AnalyseChart data={data} />
              </Card>
              <Card
                title="Transaction Types"
                className="shadow-lg"
                bordered={true}
                style={{
                  width: "50%",
                  height: "50%",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <StackedPlot data={data} />
              </Card>
            </div>
            <div
              className="bg-inherit space-x-4 p-8"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                title="Category Chart"
                className="shadow-lg"
                bordered={true}
                style={{
                  width: "50%",
                  height: "50%",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <CategoryChart data={data} />
              </Card>
              <Card
                title="Loan details"
                className="shadow-lg h-inherit"
                bordered={true}
                style={{
                  width: "50%",
                  height: "50%",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <LoanAnalysisChart data={data} />
              </Card>
            </div>
          </div>
        ),
      },
      {
        key: "3",
        label: `Monthly Summary`,
        children: (
          <div style={{ display: "flex", justifyContent: "center" }} id="3">
            <div className="w-4/5 flex justify-center">
              {/* <Card
              bordered={true}
              style={{ width: "75%", height: "auto", textAlign: "center" }}
              // className=".overflow-scroll"
            > */}
              <SummaryTab data={TableData} />
            </div>
            {/* </Card> */}
          </div>
        ),
      },
      {
        key: "4",
        label: `Suspicious Activities`,
        children: (
          <div style={{ display: "flex", justifyContent: "center" }} id="4">
            {/* <Card bordered={true} style={{ width: '75%', height: 'auto', textAlign: "center" }} className='.overflow-scroll'> */}
            <div className="w-4/5 flex justify-center">
              <SuspiciousActivities data={data} />
            </div>
            {/* </Card> */}
          </div>
        ),
      },
    ];
    if (transactionData && transactionData.length > 0) {
      items.push({
        key: "2",
        label: `Recent Transactions`,
        children: (
          <div style={{ display: "flex", justifyContent: "center" }} id="2">
            {/* <Card
              bordered={true}
              style={{ width: "70%", height: "auto", textAlign: "center" }}
            > */}
            <div className="flex justify-center w-4/5">
              <Table
                size={"middle"}
                columns={ColumnData}
                dataSource={transactionData}
                pagination={false}
                bordered={false}
              />
            </div>
            {/* </Card> */}
          </div>
        ),
      });
    }
    return (
      <div className="p-0">
        <div className="my-3">
          <div className="grid grid-cols-10 gap-4 font-sans">
            <div className="col-span-3 md:col-span-2 grid text-center text-md md:text-xl lg:text-2xl font-mono text-blue-800">
              BANK ANALYSIS
            </div>
            <div className="col-span-6 md:col-span-6 grid grid-cols-10 flex items-center ml-4 flex">
              {start_month ? (
                <>
                  <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit mx-auto flex items-center justify-items-end bg-white">
                    <i class="bx bx-calendar mr-auto"></i>
                    <span>
                      {start_month + 1}/{start_year}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-1 rounded-md p-1 shadow-md w-fit mx-auto flex items-center justify-items-center bg-white">
                    <i class="bx bx-right-arrow-alt"></i>
                  </div>
                  <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit mx-auto flex items-center justify-items-start bg-white">
                    <i class="bx bx-calendar ml-auto"></i>
                    <span>
                      {end_month + 1}/{end_year}
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-2 md:col-span-2 flex justify-end pr-4 items-center text-xl mr-4">
              {/* <Button  className="bg-blue-800 text-white font-mono font-bold rounded-md shadow-md"> */}
              {!Download && (
                <button>
                  <CSVLink data={TableData} headers={headers}>
                    <i
                      class="bx bx-download mx-2"
                      onClick={() => {
                        downloadFile();
                      }}
                    ></i>
                    <span
                      onClick={() => {
                        downloadFile();
                      }}
                    >
                      Download
                    </span>
                  </CSVLink>
                </button>
              )}
              {/* </Button> */}
            </div>
          </div>
        </div>
        <Tabs
          animated
          defaultActiveKey="1"
          items={items}
          onTabClick={(key, event) => {
            console.log(key);
            if (key === "2") {
              setDownload(true);
            }
            if (key === "3") {
              setDownload(true);
            }
            if (key === "4") {
              setDownload(true);
            }
            if (key === "1") {
              setDownload(false);
            }
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }
};
export default Analyser;
