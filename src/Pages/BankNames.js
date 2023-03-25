import { Modal, Table, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import UpdateForm from "../Components/UpdateForm";
import { useContext, useState } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
import {
  DeleteOutlined,
  FormOutlined,
  LineChartOutlined,
  RightOutlined,
} from "@ant-design/icons";
export default function BankNames(props) {
  const navigate = useNavigate();
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  const columns = [
    {
      title: "Bank Name",
      dataIndex: "Bank",
      key: "Bank",
      width: "30%",
    },
    {
      title: "Account number",
      dataIndex: "AccountNo",
      key: "AccountNo",
      width: "20%",
    },
    {
      title: "IFSC Code",
      dataIndex: "IFSC",
      key: "IFSC",
      width: "20%",
    },
    {
      title: "Account Type",
      dataIndex: "Account_type",
      key: "Type",
      width: "15%",
    },
    {
      title: "Actions",
      key: "action",
      width: "15%",
      render: (_,record) => (
        <>
          <Button
            type="primary"
            className="mx-3 my-1"
            style={{
              backgroundColor: "transparent",
              color: "#ff8400",
              border: "white",
              strokeWidth: "200",
              stroke: "#ff8400",
              boxShadow: "none",
            }}
            icon={<RightOutlined />}
            onClick={() => navigate("/banking",{state:record})}
          ></Button>
        </>
      ),
    },
  ];

  return (
    <div className="m-1 ">
      <Table columns={columns} dataSource={bankingDetails} pagination={false} className="m-3"/>
    </div>
  );
}
