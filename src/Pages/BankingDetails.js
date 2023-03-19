import React from 'react';
// import axios from 'axios';
import { Row, Col } from 'antd';
import BankDetails from '../Components/BankingDetails/BankDetails';
import BankTransaction from '../Components/BankingDetails/BankTransaction';
import user from '../Data/UserData';
import account from '../Data/AccountData';
// import transaction from '../Data/ColumnData';
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
    {
        key: '8',
        date: '2021-01-08',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        debit: 1000,
        credit: 0,
        balance: 2000,
    }
];

const BankingDetails = () => {
    return (
        <div>
            {/* <div className='m-auto grid grid-cols-2 lg:grid-cols-3 '>
                <div className='col-span-2 lg:col-span-1 md:text-center lg:text-left md:mx-2 lg:mx-2 lg:ml-4 my-2'> */}
                    <BankDetails account={account} user={user} />
                {/* </div>
                <div className='col-span-2 md:mx-2 lg:mx-2 lg:mr-4 my-2'> */}
                    <BankTransaction transaction={transaction} />
                {/* </div>
            </div> */}
        </div>
    );
}

export default BankingDetails;