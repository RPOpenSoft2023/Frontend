import { Modal, Table, Button, Spin } from "antd";
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
      render: (_, record) => (
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
            onClick={() => navigate("/banking", { state: record })}
          ></Button>
        </>
      ),
    },
  ];
  console.log("bankingDetails.loading", bankingDetails);
  if (bankingDetails.loading) {
    return (
      <div className="text-center">
        <Spin size="large" className="text-center" />
      </div>
    );
  } else {
    if (bankingDetails.length === 0) {
      return (
        <div className="m-1 ">
          <Table
            columns={columns}
            dataSource={null}
            pagination={false}
            className="p-3"
          />
        </div>
      );
    } else {
      return (
        <div className="m-1 ">
          <Table
            columns={columns}
            dataSource={bankingDetails}
            pagination={false}
            className="p-3"
          />
        </div>
      );
    }
  }
}
