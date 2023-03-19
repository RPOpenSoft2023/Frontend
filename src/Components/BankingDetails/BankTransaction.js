import React from 'react'
import PropTypes from 'prop-types'
import { Card, Table, Button, Space } from 'antd'

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0,
        render: (text) => <div className='whitespace-nowrap	'>{text}</div>,
        // ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
      sorter: (a, b) => a.desc < b.desc,
      render: (text) => <div className='whitespace-nowrap overflow-hidden	'>{text}</div>,
      ellipsis: true,
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit',
      sorter: (a, b) => a.debit - b.debit,
      render: (text) => <div className='whitespace-nowrap	'>{text}</div>,
      // ellipsis: true,
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      sorter: (a, b) => a.credit - b.credit,
      render: (text) => <div className='whitespace-nowrap	'>{text}</div>,
      // ellipsis: true,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      sorter: (a, b) => a.balance - b.balance,
      render: (text) => <div className='whitespace-nowrap	'>{text}</div>,
      // ellipsis: true,
    },
  ];


const BankTransaction = ({ transaction }) => {
  return (
    <Card title="Transaction Details" className='text-center'  bordered={false} style={{ width: '100%', height: '100%' }}>
        <Card.Grid  style={{width: '100%'}} className='col-span-2 overflow-x-auto break-normal	'>
          <Table columns={columns} className='' dataSource={transaction} pagination={{ pageSize: 10 }} />
        </Card.Grid>
            <div className='py-5 mx-auto space-x-5'>
              <Button type="primary" className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:bg-blue-800 hover:rounded-full mx-auto'> Add Transaction </Button>
              <Button type="primary" className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:bg-blue-800 hover:rounded-full mx-auto'> Analyse </Button> 
            </div>
    </Card>
  )
}

BankTransaction.propTypes = {
    transaction: PropTypes.array.isRequired,
}

export default BankTransaction