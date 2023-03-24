import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
import { useContext } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
const Dashboard = () => {
  useAuth();
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  console.log(bankingDetails);
  return (
    <>
      <DashboardTabs/>
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <Reports />
      <button onClick={() => {
        setBankingDetails(bankingDetails + 1)
      }}>update</button>
      {bankingDetails}
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <BankNames />
    </>
  );
};

export default Dashboard;
