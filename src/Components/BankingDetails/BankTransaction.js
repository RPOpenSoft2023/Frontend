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
        <Tabs defaultActiveKey='0' className='mx-auto text-center'>
          <Tabs.TabPane tab="Bank Details" key="0">
              <Card bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px" }} className="mx-auto my-4">
                <Descriptions
                    bordered
                    column={{
                        xxl: 4,
                        xl: 1,
                        lg: 3,
                        md: 3,
                        sm: 2,
                        xs: 1,
                    }}
                >
                    <Descriptions.Item label={<b>Bank Name</b>} >{account.bankName}</Descriptions.Item>
                    <Descriptions.Item label={<b>Account Number</b>} >{account.accountNumber}</Descriptions.Item>
                    <Descriptions.Item label={<b>Account Type</b>} >{account.accountType}</Descriptions.Item>
                    <Descriptions.Item label={<b>Branch Name</b>} >{account.branchName}</Descriptions.Item>
                    <Descriptions.Item label={<b>Branch Address</b>} >{account.branchAddress}</Descriptions.Item>
                    <Descriptions.Item label={<b>IFSC Code</b>} >{account.ifscCode}</Descriptions.Item>
                </Descriptions>

            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Transaction History" className='mx-auto' key="1">
            {/* <Typography.Title level={5} className=" text-center">
              Transaction History
            </Typography.Title> */}
            <Table size = {"middle"} columns={columns} bordered = {false}  dataSource={transaction} pagination={false} />
            <Button type="primary" className="m-5 bg-blue-600 hover:bg-blue-900">Analyse</Button>
            <Button type="primary" className="m-5  bg-blue-600  hover:bg-blue-900">Add Transaction</Button>

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