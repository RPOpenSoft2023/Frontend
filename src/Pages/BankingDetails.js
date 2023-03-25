import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BankDetails from '../Components/BankingDetails/BankDetails';
import BankTransaction from '../Components/BankingDetails/BankTransaction';
import { useNavigate } from 'react-router';
import useAuth from '../Components/Auth'
import { useLocation } from 'react-router-dom';
const BANKING_API=process.env.REACT_APP_BANKING_API // this is the URL for the banking API
const USER_API=process.env.REACT_APP_USER_API // this is the URL for the user API

const BankingDetails = () => {
    useAuth();
    const location = useLocation();
    const [user, setUser] = useState({loading:true});
    const [account, setAccount] = useState({loading:true});
    const [transaction, setTransaction] = useState({loading:true});
    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        axios.get(`${USER_API}/verify_token/`, config)
            .then(res => {
                setUser({
                    ...res.data,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err);
            })
        
        const accountConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        // const account_number = localStorage.getItem('account_number');
        // const account_number = 65749567438;
        
        setAccount({
            ...location.state,
            loading: false
        });
        console.log(account)
        const transactionConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        console.log(location.state)
        // const start_date = '2020-01-01';
        // const end_date = '2020-11-24';
        axios.get(`${BANKING_API}/banking/api/transactions?account_number=${location.state.AccountNo}`, transactionConfig)
            .then(res => {
                console.log(res.data.results);
                setTransaction({
                    result: res.data.results,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err);
                // navigate('/dashboard');
            })
        console.log(transaction)
    }, []);
        
    useEffect(() => {

    }, [transaction]);
    return (
        <div className='w-3/5 mx-auto my-2'>
            <BankDetails user={user} />
            <BankTransaction account={account} transaction={transaction} />
        </div>
  );
};

export default BankingDetails;
