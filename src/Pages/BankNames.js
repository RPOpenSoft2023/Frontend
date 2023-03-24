import { Modal, Table, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import UpdateForm from "../Components/UpdateForm";
import { useState } from "react";
import {
  DeleteOutlined,
  FormOutlined,
  LineChartOutlined,
  RightOutlined,
} from "@ant-design/icons";
export default function BankNames(props) {
  const navigate = useNavigate();
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
      title: "Reports Created",
      dataIndex: "Reports",
      key: "Reports",
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
            onClick={() => navigate("/banking",{state:record.AccountNo})}
          ></Button>
        </>
      ),
    },
  ];

  return (
    <div className="m-1 ">
      <Table columns={columns} dataSource={props.bankNames} pagination={false} className="m-3"/>
    </div>
  );
}
