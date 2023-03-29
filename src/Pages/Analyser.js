import AnalyserCard from "../Components/AnalyserCard";
import StackedPlot from "../Components/StackedPlot";
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import { Card, Table, Spin } from "antd";
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
  const [start_month, set_start_month] = useState(
    location.state.StartMonth - 1
  );
  const navigate = useNavigate();
  const [start_year, ] = useState(location.state.StartYear);
  const [end_month, ] = useState(location.state.EndMonth - 1);
  const [end_year, ] = useState(location.state.EndYear);
  const [data, setData] = useState({});
  const [user, setUser] = useState({ loading: true });
  const [cardBlocksData, setCardData] = useState([]);
  const [ transactionData, setTransactionData ] = useState([]);
  useEffect(() => {
    // console.log('Hi')
    if (!location.state.file) {
      console.log("location.sate", location.state);
      const account_number = location.state.AccountNo;
      console.log("account_number", account_number);
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
          'Content-Type': 'multipart/form-data',
        }

      })
        .then((res) => {
          console.log(res.data);
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
          location.state.file = null;
        })
        .catch((error) => {
          console.log("error", error)
          console.log("error.message", error.message);
        });
    }
  }, [location.state]);

  // useAuth();
  if (!user.loading) {
    const items = [
      {
        key: "1",
        label: `Overview`,
        children: (
          <div>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-4/5 flex justify-center">
            {/* <Card
              bordered={true}
              style={{ width: "75%", height: "auto", textAlign: "center" }}
              // className=".overflow-scroll"
            > */}
              <SummaryTab data={data} />
            </div>
            {/* </Card> */}
          </div>
        ),
      },
      {
        key: '4',
        label: `Suspicious Activities`,
        children: <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Card bordered={true} style={{ width: '75%', height: 'auto', textAlign: "center" }} className='.overflow-scroll'> */}
            <div className="w-4/5 flex justify-center">
              <SuspiciousActivities data={data} />
            </div>
            {/* </Card> */}
        </div>,
    },
    ];
    if(transactionData && transactionData.length > 0){
      items.push({
        key: "2",
        label: `Recent Transactions`,
        children: (
          <div style={{ display: "flex", justifyContent: "center" }}>
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
      })
    }
    return (
      <div className="p-0">
        <div className="my-3">
          <div className="grid grid-cols-10 gap-4 font-sans">
            <div className="col-span-3 md:col-span-2 grid justify-items-end text-md md:text-xl lg:text-2xl font-mono text-blue-800">
              {">"} BANK ANALYSIS
            </div>
            {start_month ? 
            <div className="col-span-5 md:col-span-5 grid grid-cols-5 flex items-center ml-4 flex">
              <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit mx-2 flex items-center justify-items-end bg-white">
                <i class="bx bx-calendar mr-2"></i>
                <span>
                  {start_month + 1}/{start_year}
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit  flex items-center justify-items-start bg-white">
                <i class="bx bx-calendar mr-2"></i>
                <span>
                  {end_month + 1}/{end_year}
                </span>
              </div>
            </div> : <></>}
            {/* <div className="col-span-2 md:col-span-3 flex justify-end pr-4 items-center text-xl mr-4">
              <Link>
                <i class="bx bx-download mx-2"></i>
                <span>Analysis</span>
              </Link>
            </div> */}
          </div>
        </div>
        <Tabs animated defaultActiveKey="1" items={items} />
      </div>
    );
  } else {
    return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
  }
};
export default Analyser;
