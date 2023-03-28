import React, { useState, createContext } from "react";
export const BankingdetailsContext = createContext();
export const BankingDetailsProvider = (props) => {
  const [BankingDetails, setBankingdetailsContext] = useState([]);
  const [userData, setUserData] = useState();
  const [Categories, setCategories] = useState([]);
  return (
    <BankingdetailsContext.Provider
      value={[BankingDetails, setBankingdetailsContext, userData, setUserData,Categories,setCategories]}
    >
      {props.children}
    </BankingdetailsContext.Provider>
  );
};
