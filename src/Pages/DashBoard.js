import BankNames from "./BankNames";
import Reports from "./Reports";
import DashboardTabs from "../Components/DashboardTabs";
import useAuth from "../Components/Auth";
const Dashboard = () => {
  useAuth();
  return (
    <>
      <DashboardTabs/>
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <Reports />
      <hr className="block bg-orange-300 w-3/5 m-auto" style={{height: "1.5px"}}></hr>
      <BankNames />
    </>
  );
};

export default Dashboard;
