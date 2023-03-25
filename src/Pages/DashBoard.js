import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useContext, useState } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
import { useEffect } from "react";
import {showToastMessage} from "../Components/Toast"
import axios from "axios";
const Dashboard = () => {
  const [BankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  const [Transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/accounts`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        const data = [];
        res.data.results.map((element, index) => {
          const dataobj = {
            key: index,
            Bank: element.bank_name,
            AccountNo: element.account_number,
            IFSC: element.ifsc,
            Account_type: element.account_type,
            OpeningDate: element.account_opening_date,
            BranchName: element.branch_name,
            BranchAddress: element.branch_address,
          };
          data.push(dataobj);
          setBankingDetails(data);
        });
      })
      .catch((error) => {
        showToastMessage(error.message,"negative");
      });
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/transactions`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        setTransactions(res.data.results);
      })
      .catch((error) => {
        showToastMessage(error.message,"negative");
      });
  }, []);
  useAuth();
  return (
    <>
      <DashboardTabs />
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <Reports transaction={Transactions}/>
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <BankNames />
    </>
  );
};
export default Dashboard;
