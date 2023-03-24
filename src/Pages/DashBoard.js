import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [Accounts_array,setAccounts_array]=useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/accounts`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
    .then((res) => {
      console.log('res', res)
      const data=[];
      res.data.results.map((element, index) => {
          const dataobj={
            key: index,
            Bank: element.bank_name,
            AccountNo: element.account_number,
            IFSC: element.ifsc,
            Reports: 3,
          };
          data.push(dataobj);
          console.log('data', data)
        });
        setAccounts_array(data);
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
  }, []);
  useAuth();
  return (
    <>
      <DashboardTabs/>
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <Reports />
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <BankNames bankNames={Accounts_array}/>
    </>
  );
};

export default Dashboard;
