import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useContext, useState } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
import { useEffect } from "react";
import { showToastMessage } from "../Components/Toast";
import { useLocation } from "react-router";
import axios from "axios";
const Dashboard = () => {
  const location = useLocation();
  const [
    BankingDetails,
    setBankingDetails,
    userData,
    setUserData,
    Categories,
    setCategories,
  ] = useContext(BankingdetailsContext);
  const [Transactions, setTransactions] = useState([]);
  useEffect(() => {
    if (location.state) setUserData(location.state);
  }, [location.state]);
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
        showToastMessage(error.message, "negative");
      });
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/transactions/?page_size=2000`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        setTransactions(res.data.results);
      })
      .catch((error) => {
        showToastMessage(error.message, "negative");
      });
  }, []);

  axios({
    method: "get",
    url: `${process.env.REACT_APP_BANKING_API}/banking/api/get_categories`,
    headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
  })
    .then((res) => {
      setCategories(res.data);
    })
    .catch((error) => {
      console.log("error.message", error.message);
    });

  useAuth();
  return (
    <>
      <DashboardTabs user={userData} />
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <Reports transaction={Transactions} />
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <BankNames />
    </>
  );
};
export default Dashboard;
