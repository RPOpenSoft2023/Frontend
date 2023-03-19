import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
const BankDetails = ({ account, user }) => {
  return (
    <Card title="Bank Details" className='text-center' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Card.Grid style={{width:'100%'}} className='col-span-2 text-left whitespace-nowrap overflow-x-auto'>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='col-span-1 font-semibold overflow-hidden'>Bank Name: </div>
          <div className='col-span-1'>{account.bankName}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Number: </div>
          <div className='col-span-1'>{account.accountNumber}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Type: </div>
          <div className='col-span-1'>{account.accountType}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Branch Name: </div>
          <div className='col-span-1'>{account.branchName}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Branch Address: </div>
          <div className='col-span-1'>{account.branchAddress}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>IFSC Code: </div>
          <div className='col-span-1'>{account.ifscCode}</div>
        </div>
        </Card.Grid>
        <Card.Grid style={{width:'100%'}} className='col-span-2 text-left whitespace-nowrap overflow-x-auto'>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Holder Name: </div>
          <div className='col-span-1'>{user.name}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Holder Address: </div>
          <div className='col-span-1'>{user.address}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Holder Phone Number: </div>
          <div className='col-span-1'>{user.phone}</div>
          <div className='col-span-1 font-semibold overflow-hidden'>Account Holder Email: </div>
          <div className='col-span-1'>{user.email}</div>
        </div>
        </Card.Grid>

        <Button type="primary" className='bg-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-l hover:rounded-full mx-auto my-5' danger>
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