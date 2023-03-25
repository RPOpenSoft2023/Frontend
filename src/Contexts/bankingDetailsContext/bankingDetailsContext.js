import React, { useState, createContext } from "react";
export const BankingdetailsContext = createContext();
export const BankingDetailsProvider = (props) => {
  const [BankingDetails, setBankingdetailsContext] = useState([]);
  return (
    <BankingdetailsContext.Provider value={[BankingDetails, setBankingdetailsContext]}>
      {props.children}
    </BankingdetailsContext.Provider>
  );
};