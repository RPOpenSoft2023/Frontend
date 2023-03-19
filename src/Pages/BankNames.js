import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Bank Name",
    dataIndex: "Bank",
    key: "Bank",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "IFSC Code",
    dataIndex: "IFSC",
    key: "IFSC",
  },
  {
    title: "Accounts Analysed",
    dataIndex: "Accounts",
    key: "Accounts",
  },
  {
    title: "Reports Created",
    dataIndex: "Reports",
    key: "Reports",
  },
];
const data = [
  {
    key: "1",
    Bank: "John Brown",
    IFSC: "CNBR1003876",
    Accounts: 5,
    Reports: 3,
  },
  {
    key: "1",
    Bank: "John Brown",
    IFSC: "CNBR1003876",
    Accounts: 5,
    Reports: 3,
  },
  {
    key: "1",
    Bank: "John Brown",
    IFSC: "CNBR1003876",
    Accounts: 5,
    Reports: 3,
  },
  {
    key: "1",
    Bank: "John Brown",
    IFSC: "CNBR1003876",
    Accounts: 5,
    Reports: 3,
  },
  {
    key: "1",
    Bank: "John Brown",
    IFSC: "CNBR1003876",
    Accounts: 5,
    Reports: 3,
  },
];
const BankNames = () => (
  <div className="m-4">
    <Table columns={columns} dataSource={data} pagination={false} />
  </div>
);
export default BankNames;
