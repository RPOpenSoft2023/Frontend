import { Modal, Table, Button } from "antd";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import UpdateForm from "../Components/UpdateForm";

import {
  DeleteOutlined,
  FormOutlined,
  LineChartOutlined,
  RightOutlined
} from "@ant-design/icons";

export default function BankNames() {

  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);

  const handleCancel = () => {
    setOpen1(false);
  };

  const onUpdate = (record) => {
    console.log(`Updating record with key: ${record.key}`);
    setOpen1(true);
    // Handle update action here
  };

  const onAnalysis = (record) => {
    console.log(`Analysing record with key: ${record.key}`);
    navigate(`/Analyser`);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleOk = (record) => {
    console.log(record);
    // console.log(`Deleting record with key: ${record}`);
    const newData = dataSource.filter((item) => {
      // console.log(item);
      return item.key !== record.key;
    });
    setDataSource(newData);
    setModalVisible(false);
  };

  const handleCancel1 = () => {
    setModalVisible(false);
  };

  const onDelete = (record) => {
    console.log(record.key);
    setModalVisible(true);
  };

  const onMore = (record) => {
    console.log(`Updating record with key: ${record.key}`);
    navigate('/banking');
    // Handle update action here
  };

  const columns = [
    {
      title: "Bank Name",
      dataIndex: "Bank",
      key: "Bank",
      width: "30%",
      render: (text) => <Link to="/">{text}</Link>,
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
      render: (text, record) => (
        <>
          {/* <Button
            type="primary"
            className="mx-1 my-1"
            style={{ backgroundColor: "#ff8400" }}
            onClick={() => onUpdate(record)}
            icon={<FormOutlined />}
          ></Button>
          <Modal
            open={open1}
            title="Edit Bank Details"
            onCancel={handleCancel}
            footer={[]}
          >
            <UpdateForm />
          </Modal>

          <Button
            type="primary"
            className="mx-1 my-1"
            style={{ backgroundColor: "#ff8400" }}
            onClick={() => onAnalysis(record)}
            icon={<LineChartOutlined />}
          ></Button>

          <Button
            type="primary"
            className="mx-1 my-1"
            style={{ backgroundColor: "#ff8400" }}
            icon={<DeleteOutlined />}
            onClick={()=>onDelete(record)}
          ></Button>

          <Modal
            title="Confirm Delete"
            visible={modalVisible}
            width={400}
            onOk={() => handleOk(record)}
            onCancel={handleCancel1}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              style: { backgroundColor: "#d13241", borderColor: "red" },
            }}
          >
            <p>Are you sure you want to delete this item?</p>
          </Modal> */}
          <Button
            type="primary"
            className="mx-3 my-1"
            style={{ backgroundColor: "transparent", color: "#ff8400", border: "white", strokeWidth: "200", stroke: "#ff8400", boxShadow:"none" }}
            icon={<RightOutlined />}
            onClick={()=>onMore(record)}
          ></Button>
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      Bank: "J Brown",
      AccountNo: "15561361",
      IFSC: "CNBR1003876",
      Reports: 3,
    },
    {
      key: "2",
      Bank: "Dan Brown",
      AccountNo: "15561361",
      IFSC: "CNBR1003876",
      Reports: 3,
    },
    {
      key: "3",
      Bank: "Sam Brown",
      AccountNo: "15561361",
      IFSC: "CNBR1003876",
      Reports: 3,
    },
    {
      key: "4",
      Bank: "Johnny Brown",
      AccountNo: "15561361",
      IFSC: "CNBR1003876",
      Reports: 3,
    },
    {
      key: "5",
      Bank: "Tom Brown",
      AccountNo: "15561361",
      IFSC: "CNBR1003876",
      Reports: 3,
    },
  ];

  const [dataSource, setDataSource] = useState(data);

  return (
    <div className="m-1 ">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
}
