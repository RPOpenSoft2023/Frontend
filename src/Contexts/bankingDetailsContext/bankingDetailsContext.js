import React, { useState, createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
export const BankingdetailsContext = createContext();
export const BankingDetailsProvider = (props) => {
  const [BankingDetails, setBankingdetailsContext] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BANKING_API}/banking/api/accounts`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
    .then((res) => {
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
        });
        setBankingdetailsContext(data);
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
  }, [BankingDetails]);
  const addAccount=()=>{
  }
  return (
    <BankingdetailsContext.Provider value={[BankingDetails, setBankingdetailsContext]}>
      {props.children}
    </BankingdetailsContext.Provider>
  );
};