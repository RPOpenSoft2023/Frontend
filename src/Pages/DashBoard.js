import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useContext } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
const Dashboard = () => {
  useAuth();
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
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
      <BankNames bankNames={bankingDetails}/>
    </>
  );
};

export default Dashboard;
