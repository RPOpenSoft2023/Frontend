import { Card } from "antd";
import AnalyseChartDashboard from "../Components/AnalyseChartDashboard";
import CategoryChartDashboard from "../Components/CategoryChartDashboard";
const Reports = (props) => (
  <div className="grid grid-cols-2 md:grid-cols-3">
    <Card title="Credit" size="large" className="text-center m-4 h-[250px]">
      <CategoryChartDashboard data={props.transaction} type={"credit"} />
    </Card>
    <Card title="Debit" size="large" className=" flex flex-col text-center m-4">
      <CategoryChartDashboard data={props.transaction} type={"debit"} />
    </Card>
    <Card
      title="Transactions"
      size="large"
      className="text-center m-4 col-span-2 md:col-span-1 h-[250px]"
    >
      <AnalyseChartDashboard data={props.transaction} />
    </Card>
  </div>
);
export default Reports;
