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
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
      
  )
  }
}

BankTransaction.propTypes = {
  account: PropTypes.object.isRequired,
  transaction: PropTypes.array.isRequired,
}

export default BankTransaction;
