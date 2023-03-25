import { Card } from "antd";
const Reports = (props) => (
  <div className="grid grid-cols-2 md:grid-cols-3">
    <Card title="Quick Links" size="large" className="text-center m-4">
      <div className="flex">
        <i className="bx bx-plus bx-sm mt-1 mr-3"></i>
        <p className="flex justify-center items-center">New Report</p>
      </div>
      <div className="flex">
        <i class="bx bx-cart bx-sm mt-1 mr-3"></i>
        <p className="flex justify-center items-center">Subscribe Now</p>
      </div>
      <div className="flex">
        <i class="bx bx-question-mark bx-sm mt-1 mr-3"></i>
        <p className="flex justify-center items-center">Help Documentation</p>
      </div>
      <div className="flex">
        <i class="bx bx-cog bx-sm mt-1 mr-3"></i>
        <p className="flex justify-center items-center">API Documentation</p>
      </div>
    </Card>
    <Card
      title="Report Status"
      size="large"
      className=" flex flex-col text-center m-4"
    >
      <div className="flex justify-between font-semibold mt-2 mb-2">
        <p>Analysed</p>
        <p>2</p>
      </div>
      <div className="flex justify-between font-semibold mt-2 mb-2">
        <p>In Progress</p>
        <p>3</p>
      </div>
      <div className="flex justify-between font-semibold mt-2 mb-2">
        <p>On hold</p>
        <p>0</p>
      </div>
    </Card>
    <Card
      title="Transactions"
      size="large"
      className="text-center m-4 col-span-2 md:col-span-1 h-[250px] overflow-x-scroll [&::-webkit-scrollbar]:hidden overflow-y-scroll"
    >
      <div className="flex justify-center flex-col">
        <div className="flex justify-between gap-5 m-2">
          <div>Account_No</div>
          <div className="overflow-hidden flex justify-center w-full">
            Description
          </div>
          <div>
              Amount
          </div>
        </div>
        {props.transaction.map((element) => {
          return (
            <div className="flex justify-between gap-5 m-2">
              <div>{element.account}</div>
              <div className="overflow-hidden flex justify-start w-full">
                {element.description}
              </div>
              <div
                className={`${
                  element.credit === 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {element.credit === 0
                  ? `+${element.debit}`
                  : `-${element.credit}`}
              </div>
            </div>
          );
        })}
        {/* <div>23456789097</div>
        <div>kljfdlfjfjdioidnfififnfi</div>
        <div>+100</div> */}
      </div>
    </Card>
  </div>
);
export default Reports;
