import { Card, useState } from "antd";
import AnalyseChartDashboard from "../Components/AnalyseChartDashboard";
import CategoryChartDashboard from "../Components/CategoryChartDashboard";
const Reports = (props) => {
  if (props.transaction.loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3">
        <Card title="Credit" size="large" className="text-center m-4 h-[250px]">
          <p>Data loading!!!</p>
        </Card>
        <Card
          title="Debit"
          size="large"
          className="flex flex-col text-center m-4"
        >
          <p>Data loading!!!</p>
        </Card>
        <Card
          title="Transactions"
          size="large"
          className="text-center m-4 col-span-2 md:col-span-1 h-[250px]"
        >
          <p>Data loading!!!</p>
        </Card>
      </div>
    );
  } else{
    if (props.transaction.length === 0) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3">
          <Card
            title="Credit"
            size="large"
            className="text-center m-4 h-[250px]"
          >
            <p>No Data is present</p>
          </Card>
          <Card
            title="Debit"
            size="large"
            className="flex flex-col text-center m-4"
          >
            <p>No Data is present</p>
          </Card>
          <Card
            title="Transactions"
            size="large"
            className="text-center m-4 col-span-2 md:col-span-1 h-[250px]"
          >
            <p>No Data is present</p>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3">
          <Card
            title="Credit"
            size="large"
            className="text-center m-4 h-[250px]"
          >
            <CategoryChartDashboard data={props.transaction} type={"credit"} />
          </Card>
          <Card
            title="Debit"
            size="large"
            className="flex flex-col text-center m-4"
          >
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
    }
  }
};
export default Reports;
