<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import { InboxOutlined } from '@ant-design/icons';
import { Table, Form, Typography, Tabs, Button, Upload, Modal } from "antd";
import { useState } from "react";
import account from "../../Data/AccountData";
import { useNavigate } from "react-router-dom";
import AddTransaction from "../AddTransaction";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    align: "center",
    // sorter: (a, b) => a.date > b.date ? 1 : a.date <div b.date ? -1 : 0,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    // ellipsis: true,
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "desc",
    align: "center",
    render: (text) => (
      <div className="text-center whitespace-nowrap overflow-hidden	">
        {text}
      </div>
    ),
    ellipsis: true,
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    // sorter: (a, b) => a.debit - b.debit,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    // sorter: (a, b) => a.credit - b.credit,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    // sorter: (a, b) => a.balance - b.balance,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
];

const BankTransaction = ({ transaction }) => {
  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);

  const onAnalyseClick = () => {
    navigate("/Analyser");
  };

  const onTransactionClick = () => {
    setOpen1(true);
  };

  const handleCancel = () =>{
    setOpen1(false);
  }

  transaction.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div>
        <Tabs defaultActiveKey="2" className="text-center">
          <Tabs.TabPane tab="Account Details" key="0">
            <Typography.Text>
              Account Number: {account.accountNumber}
            </Typography.Text>
            <br />
            <Typography.Text>
              Account Type: {account.accountType}
            </Typography.Text>
            <br />
            <Typography.Text>IFSC Code: {account.ifscCode}</Typography.Text>
            <br />
            {/* </div> */}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Bank Details" key="1">
            {/* <Typography.Title level={5} className=" text-center">
              Bank Details
            </Typography.Title> */}
            <Typography.Text className=" text-center">
              Bank Name: {account.bankName}
            </Typography.Text>
            <br />
            <Typography.Text className=" text-center">
              Branch Name: {account.branchName}
            </Typography.Text>
            <br />
            <Typography.Text className=" text-center">
              Branch Address: {account.branchAddress}
            </Typography.Text>
            <br />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Transaction History" className="mx-auto" key="2">
            {/* <Typography.Title level={5} className=" text-center">
              Transaction History
            </Typography.Title> */}
            <Table
              size={"middle"}
              columns={columns}
              bordered={false}
              dataSource={transaction}
              pagination={false}
            />
            <Button
              type="primary"
              className="m-5 bg-blue-600 hover:bg-blue-900"
              onClick={onAnalyseClick}
            >
              Analyse
            </Button>
            <Button
              type="primary"
              className="m-5  bg-blue-600  hover:bg-blue-900"
              onClick={onTransactionClick}
            >
              Add Transaction
            </Button>
            <Modal
              open={open1}
              title="Add Transaction"
              onCancel={handleCancel}
              footer={[]}
            >
              <AddTransaction />
            </Modal>
=======
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tabs, Button, Card, Descriptions } from 'antd'
import account from '../../Data/AccountData';


const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        align : "center",
                // sorter: (a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0,
        render: (text) => <div className='text-center whitespace-nowrap	overflow-hidden'>{text}</div>,
        // ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      align : "center",
      render: (text) => <div className='text-center whitespace-nowrap overflow-hidden	'>{text}</div>,
      ellipsis: true,
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit',
      // sorter: (a, b) => a.debit - b.debit,
      render: (text) => <div className='text-center whitespace-nowrap	overflow-hidden'>{text}</div>,
      align : "center",
      // ellipsis: true,
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      // sorter: (a, b) => a.credit - b.credit,
      render: (text) => <div className='text-center whitespace-nowrap	overflow-hidden'>{text}</div>,
      align : "center",
      // ellipsis: true,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => <div className='text-center whitespace-nowrap	overflow-hidden'>{text}</div>,
      align : "center",
      // ellipsis: true,
    },
  ];


const BankTransaction = ({ account, transaction }) => {
  if(!account.loading && !transaction.loading){
    transaction.result.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log([...transaction.result])
  return (
    <>
      <div >
        <Tabs defaultActiveKey='0' className='mx-auto text-center'>
          <Tabs.TabPane tab="Bank Details" key="0">
              <Card bordered={true} style={{ width: '100%', height: '50%', fontSize: "16px" }} className="mx-auto my-4">
                <Descriptions
                    bordered
                    column={{
                        xxl: 2,
                        xl: 2,
                        lg: 1,
                        md: 1,
                        sm: 1,
                        xs: 1,
                    }}
                >
                    <Descriptions.Item className='overflow-hidden' label={<b>Account Number</b>} >{account.account_number}</Descriptions.Item>
                    <Descriptions.Item className='overflow-hidden' label={<b>Account Type</b>} >{account.account_type}</Descriptions.Item>
                    <Descriptions.Item className='overflow-hidden' label={<b>IFSC Code</b>} >{account.ifsc}</Descriptions.Item>
                    <Descriptions.Item className='overflow-hidden' label={<b>Bank Name</b>} >{account.bank_name}</Descriptions.Item>
                    <Descriptions.Item className='overflow-hidden' label={<b>Branch Name</b>} >{account.branch_name}</Descriptions.Item>
                    <Descriptions.Item className='overflow-hidden' label={<b>Branch Address</b>} >{account.branch_address}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" danger className="m-5  bg-red-600 hover:bg-red-900">Delete Account</Button>
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Transaction History" className='mx-auto' key="1">
            <Table size = {"middle"} columns={columns} bordered = {false}  dataSource={transaction.result} pagination={false} />
            <Button type="primary" className="m-5 bg-blue-600 hover:bg-blue-900">Analyse</Button>
            <Button type="primary" className="m-5  bg-blue-600  hover:bg-blue-900">Add Transaction</Button>
>>>>>>> 7e8d15ff351a55918f0d8c13533c2d7987af522d
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
<<<<<<< HEAD
  );
};

BankTransaction.propTypes = {
  transaction: PropTypes.array.isRequired,
};
=======
      
  )
  }
}

BankTransaction.propTypes = {
  account: PropTypes.object.isRequired,
  transaction: PropTypes.array.isRequired,
}
>>>>>>> 7e8d15ff351a55918f0d8c13533c2d7987af522d

export default BankTransaction;
