import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
const BankDetails = ({ account, user }) => {
  return (
    <Card title="Bank Details" className='text-center' bordered={false} style={{ width: '100%', height: '100%' }}>
        <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-1 text-left'>Bank Name: </div>
        <div className='col-span-1 text-left'>{account.bankName}</div>
        <div className='col-span-1 text-left'>Account Number: </div>
        <div className='col-span-1 text-left'>{account.accountNumber}</div>
        <div className='col-span-1 text-left'>Account Type: </div>
        <div className='col-span-1 text-left'>{account.accountType}</div>
        <div className='col-span-1 text-left'>Branch Name: </div>
        <div className='col-span-1 text-left'>{account.branchName}</div>
        <div className='col-span-1 text-left'>Branch Address: </div>
        <div className='col-span-1 text-left'>{account.branchAddress}</div>
        <div className='col-span-1 text-left'>IFSC Code: </div>
        <div className='col-span-1 text-left'>{account.ifscCode}</div>
        <div className='col-span-1 text-left'>Account Holder Name: </div>
        <div className='col-span-1 text-left'>{user.name}</div>
        <div className='col-span-1 text-left'>Account Holder Address: </div>
        <div className='col-span-1 text-left'>{user.address}</div>
        <div className='col-span-1 text-left'>Account Holder Phone Number: </div>
        <div className='col-span-1 text-left'>{user.phone}</div>
        <div className='col-span-1 text-left'>Account Holder Email: </div>
        <div className='col-span-1 text-left'>{user.email}</div>
        </div>
        <Button type="primary" className='rounded hover:rounded-lg my-2' danger>
            Delete Account
        </Button>
    </Card>
  )
}

BankDetails.propTypes = {
    account: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default BankDetails