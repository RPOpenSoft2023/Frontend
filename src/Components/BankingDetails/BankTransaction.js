import React from 'react'
import PropTypes from 'prop-types'
import { Table, Typography, Tabs, Button } from 'antd'
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
      dataIndex: 'desc',
      key: 'desc',
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


const BankTransaction = ({ transaction }) => {
  transaction.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div >
        <Tabs defaultActiveKey='2' className='text-center'>
          <Tabs.TabPane tab="Account Details" key="0">
              <Typography.Text>
                Account Number: {account.accountNumber}
              </Typography.Text>
              <br />
              <Typography.Text>
                Account Type: {account.accountType}
              </Typography.Text>
              <br />
              <Typography.Text>
                IFSC Code: {account.ifscCode}
              </Typography.Text>
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
          <Tabs.TabPane tab="Transaction History" className='mx-auto' key="2">
            {/* <Typography.Title level={5} className=" text-center">
              Transaction History
            </Typography.Title> */}
            <Table size = {"middle"} columns={columns} bordered = {false}  dataSource={transaction} pagination={false} />
            <Button type="primary" className="m-5">Analyse</Button>
            <Button type="primary" className="m-5">Add Transaction</Button>

          </Tabs.TabPane>
          {/* <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane> */}
        </Tabs>
      

      </div>
    </>
      
  )
}

BankTransaction.propTypes = {
    transaction: PropTypes.array.isRequired,
}

export default BankTransaction