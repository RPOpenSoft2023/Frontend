import { Card } from "antd";
const Reports = () => (
  <div className="grid grid-cols-3">
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
        <p>Analysis on hold</p>
        <p>0</p>
      </div>
    </Card>
    <Card title="Transactions" size="large" className="text-center m-4">
      <div className="flex justify-between">
        <div className="text-left">
          <p>Canara Bank</p>
          <p>Yes Bank</p>
          <p>State Bank Of India</p>
          <p>Punjab National Bank</p>
          <p>Indian Overseas Bank</p>
        </div>
        <div className="text-left">
          <p>Insurance</p>
          <p>Amazon</p>
          <p>Salary</p>
          <p>EMI</p>
          <p>Insurance</p>
        </div>
        <div>
          <p className="text-green-400">+100$</p>
          <p className="text-red-400">-100$</p>
          <p className="text-green-400">+100$</p>
          <p className="text-red-400">-100$</p>
          <p className="text-green-400">+100$</p>
        </div>
      </div>
    </Card>
  </div>
);
export default Reports;
