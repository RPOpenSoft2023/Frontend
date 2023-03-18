import React from 'react';
// import axios from 'axios';
import { Row, Col } from 'antd';
import BankDetails from '../Components/BankingDetails/BankDetails';
import BankTransaction from '../Components/BankTransaction';
  const user = {
    name: 'John Doe',
    address: 'Kolkata, West Bengal, India',
    phone: '9876543210',
    email: 'johndoe@gmail.com',
    aadharNumber: '123456789012',
    age: 30,
  }
  const account = {
    bankName: 'HDFC',
    accountNumber: '1234567890',
    accountType: 'Savings',
    branchName: 'Kolkata',
    branchAddress: 'Kolkata, West Bengal, India',
    accountOpenDate: '2021-01-01',
    ifscCode: 'HDFC1234',
  }

  const transaction = [
    {
        key: '1',
        date: '2021-01-01',
        desc: 'Salary',
        debit: 0,
        credit: 10000,
        balance: 10000,
    },
    {
        key: '2',
        date: '2021-01-02',
        desc: 'Rent',
        debit: 1000,
        credit: 0,
        balance: 9000,
    },
    {
        key: '3',
        date: '2021-01-03',
        desc: 'Electricity Bill',
        debit: 500,
        credit: 0,
        balance: 8500,
    },
    {
        key: '4',
        date: '2021-01-04',
        desc: 'Grocery',
        debit: 1000,
        credit: 0,
        balance: 7500,
    },
    {
        key: '5',
        date: '2021-01-05',
        desc: 'Shopping',
        debit: 2000,
        credit: 0,
        balance: 5500,
    },
    {
        key: '6',
        date: '2021-01-06',
        desc: 'Food',
        debit: 500,
        credit: 0,
        balance: 5000,
    },
    {
        key: '7',
        date: '2021-01-07',
        desc: 'Shopping',
        debit: 2000,
        credit: 0,
        balance: 3000,
    },

];

const BankingDetails = () => {
    return (
        <div>
            <Row justify="space-between">
                <Col span={8}>
                    <BankDetails account={account} user={user} />
                </Col>
                <Col span={16}>
                    <BankTransaction transaction={transaction} />
                </Col>
            </Row>
        </div>
    );
}

export default BankingDetails;