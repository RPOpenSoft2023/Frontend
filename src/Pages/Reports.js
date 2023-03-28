import { Card } from "antd";
import CategoryChartDashboard from "../Components/CategoryChartDashboard";
const Reports = (props) => (
  <div className="grid grid-cols-2 md:grid-cols-3">
    <Card title="Credit" size="large" className="text-center m-4 h-[250px]">
      <CategoryChartDashboard data={props.transaction} type={"credit"} />
    </Card>
    <Card
      title="Debit"
      size="large"
      className=" flex flex-col text-center m-4"
    >
      <CategoryChartDashboard data={props.transaction} type={"debit"} />
    </Card>
    <Card
      title="Transactions"
      size="large"
      className="text-center m-4 col-span-2 md:col-span-1 h-[250px] overflow-x-scroll [&::-webkit-scrollbar]:hidden overflow-y-scroll"
    >
      <div className="flex justify-center flex-col">
        <div className="flex justify-between gap-5 m-2 font-semibold">
          <div>Account_No</div>
          <div className="overflow-hidden flex justify-center w-full">Date</div>
          <div>Amount</div>
        </div>
          {props.transaction.slice(0,10).map((element) => {
            return (
              <div className="flex justify-between gap-5 m-2">
                <div>{element.account}</div>
                <div className="overflow-hidden flex justify-center w-full">
                  {element.date}
                </div>
                <div
                  className={`${
                    element.credit < 0.01 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {element.credit < 0.01
                    ? `-${(Math.round(element.debit * 100) / 100).toFixed(2)}`
                    : `+${(Math.round(element.credit * 100) / 100).toFixed(2)}`}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
export default Reports;
