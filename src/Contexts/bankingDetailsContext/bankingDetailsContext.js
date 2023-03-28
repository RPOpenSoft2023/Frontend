import React, { useState, createContext } from "react";
export const BankingdetailsContext = createContext();
export const BankingDetailsProvider = (props) => {
  const [BankingDetails, setBankingdetailsContext] = useState([]);
  const [userData, setUserData] = useState();
  return (
    <BankingdetailsContext.Provider value={[BankingDetails, setBankingdetailsContext, userData, setUserData]}>
      {props.children}
    </BankingdetailsContext.Provider>
  );
};