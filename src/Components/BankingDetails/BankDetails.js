import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Descriptions } from 'antd'
const BankDetails = ({ account, user }) => {
  return (
    <Card title="Bank Details" className='text-center' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Card.Grid style={{width:'100%'}} className='col-span-2 text-left whitespace-nowrap overflow-x-auto'>
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
        </Card.Grid>
        <Card.Grid style={{width:'100%'}} className='col-span-2 text-left whitespace-nowrap overflow-x-auto'>
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
            <Descriptions.Item label={<b>Account Holder's Name</b>} >{user.name}</Descriptions.Item>
            <Descriptions.Item label={<b>Account Holder's Address</b>} >{user.address}</Descriptions.Item>
            <Descriptions.Item label={<b>Phone Number</b>} >{user.phone}</Descriptions.Item>
            <Descriptions.Item label={<b>Email</b>} >{user.email}</Descriptions.Item>
          </Descriptions>
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