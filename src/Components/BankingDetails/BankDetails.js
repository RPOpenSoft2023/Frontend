import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
const BankDetails = ({ account, user }) => {
  return (
    <Card title="Bank Details" bordered={false} style={{ width: '100%', height: '100%' }}>
        <p>Bank Name: {account.bankName}</p>
        <p>Account Number: {account.accountNumber}</p>
        <p>Account Type: {account.accountType}</p>
        <p>Branch Name: {account.branchName}</p>
        <p>Branch Address: {account.branchAddress}</p>
        <p>IFSC Code: {account.ifscCode}</p>
        <p>Account Holder Name: {user.name}</p>
        <p>Account Holder Address: {user.address}</p>
        <p>Account Holder Phone Number: {user.phone}</p>
        <p>Account Holder Email: {user.email}</p>
        <Button type="primary" danger>
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