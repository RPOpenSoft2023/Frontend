import React from "react";
import axios from "axios";
import BankDetails from "../Components/BankingDetails/BankDetails";
import BankTransaction from "../Components/BankingDetails/BankTransaction";
// import user from '../Data/UserData';
// import account from '../Data/AccountData';
import { useState, useEffect } from "react";
// import transaction from '../Data/ColumnData';
const BANKING_API = process.env.REACT_APP_BANKING_API; // this is the URL for the banking API
const USER_API = process.env.REACT_APP_USER_API; // this is the URL for the user API
import useAuth from "../Components/Auth";
//   const transaction = [
//     {
//         key: '1',
//         date: '2021-01-01',
//         desc: 'Salary',
//         debit: 0,
//         credit: 10000,
//         balance: 10000,
//     },
//     {
//         key: '2',
//         date: '2021-01-02',
//         desc: 'Rent',
//         debit: 1000,
//         credit: 0,
//         balance: 9000,
//     },
//     {
//         key: '3',
//         date: '2021-01-03',
//         desc: 'Electricity Bill',
//         debit: 500,
//         credit: 0,
//         balance: 8500,
//     },
//     {
//         key: '4',
//         date: '2021-01-04',
//         desc: 'Grocery',
//         debit: 1000,
//         credit: 0,
//         balance: 7500,
//     },
//     {
//         key: '5',
//         date: '2021-01-05',
//         desc: 'Shopping',
//         debit: 2000,
//         credit: 0,
//         balance: 5500,
//     },
//     {
//         key: '6',
//         date: '2021-01-06',
//         desc: 'Food',
//         debit: 500,
//         credit: 0,
//         balance: 5000,
//     },
//     {
//         key: '7',
//         date: '2021-01-07',
//         desc: 'Shopping',
//         debit: 2000,
//         credit: 0,
//         balance: 3000,
//     },
//     {
//         key: '8',
//         date: '2021-01-08',
//         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         debit: 1000,
//         credit: 0,
//         balance: 2000,
//     }
// ];

const BankingDetails = () => {
  useAuth();
  const [user, setUser] = useState({ loading: true });
  const [account, setAccount] = useState({ loading: true });
  const [transaction, setTransaction] = useState({ loading: true });
  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${USER_API}/verify_token/`, config)
      .then((res) => {
        console.log(res.data);
        setUser({
          ...res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const accountConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // const account_number = localStorage.getItem('account_number');
    const account_number = 87654319010;
    axios
      .get(
        `${BANKING_API}/banking/api/accounts?account_number=${account_number}`,
        accountConfig
      )
      .then((res) => {
        setAccount({
          ...res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const transactionConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // console.log(account)
    const start_date = "2020-01-01";
    const end_date = "2020-11-24";
    axios
      .get(
        `${BANKING_API}/banking/api/transactions?account_number=${account_number}&start_date=${start_date}&end_date=${end_date}`,
        transactionConfig
      )
      .then((res) => {
        console.log(res.data.results);
        setTransaction({
          result: res.data.results,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(transaction);
    // console.log(user);

    // console.log(data);
  }, []);

  return (
    <div className="w-3/5 mx-auto my-2">
      {/* <div className='m-auto grid grid-cols-2 lg:grid-cols-3 '>
                <div className='col-span-2 lg:col-span-1 md:text-center lg:text-left md:mx-2 lg:mx-2 lg:ml-4 my-2'> */}
      <BankDetails user={user} />
      {/* </div>
                <div className='col-span-2 md:mx-2 lg:mx-2 lg:mr-4 my-2'> */}
      <BankTransaction account={account} transaction={transaction} />
      {/* </div>
            </div> */}
    </div>
  );
};

export default BankingDetails;
