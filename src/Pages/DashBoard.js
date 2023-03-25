import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useContext, useState } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
import { useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  const [accounts_array, setAccounts_array] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/accounts?page_size=1000`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        setBankingDetails(res.data.results);
        const data = [];
        res.data.results.map((element, index) => {
          const dataobj = {
            key: index,
            Bank: element.bank_name,
            AccountNo: element.account_number,
            IFSC: element.ifsc,
            Account_type: element.account_type,
          };
          data.push(dataobj);
        });
        setAccounts_array(data);
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
  }, [bankingDetails]);
  useAuth();
  return (
    <>
      <DashboardTabs />
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <Reports />
      <hr
        className="block bg-orange-300 w-3/5 m-auto"
        style={{ height: "1.5px" }}
      ></hr>
      <BankNames bankNames={accounts_array} />
    </>
  );
};
export default Dashboard;
