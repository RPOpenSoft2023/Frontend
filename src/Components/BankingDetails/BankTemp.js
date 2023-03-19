import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Typography } from 'antd'
const BankDetails = ({ account, user }) => {
  return (
    <div>
      <div className='p-5 grid grid-cols-3'>

        <div className='col-span-1 text-center'>
          {/* <Avatar 
            className='w-72 h-72' 
            style={{
              backgroundColor: "red",
              verticalAlign: 'middle',
            }}
          >
            <div className='h-72 flex items-center'>
              <div className='w-full text-center text-9xl'>
                {user.name[0]}
              </div>
            </div>
          </Avatar> */}

          <Avatar
            style={{
              backgroundColor: 'red',
              verticalAlign: 'middle',
            }}
            className='w-44 h-44'
            gap={4}
          >
            <div className='h-44 flex items-center'>
              <div className='w-full text-center text-7xl'>
                {user.name[0]}
              </div>
            </div>
          </Avatar>


        </div>
        {/* <div className='col-span-1'>
        </div> */}
        <div className='col-span-1 my-auto ml-10'>

          <div className='grid grid-cols-4 h-full'>
            <div className='col-span-1'>
              <Typography.Title level={4} style={{margin:'0.3rem'}}>
                Name:
              </Typography.Title>
              <Typography.Title level={4} style={{margin:'0.3rem'}}>
                Email:
              </Typography.Title>
              <Typography.Title level={4} style={{margin:'0.3rem'}}>
                Phone:
              </Typography.Title>
              <Typography.Title level={4} style={{margin:'0.3rem'}}>
                Address:
              </Typography.Title>
            </div>
            <div className='col-span-3'>
              <Typography.Title level={4} className='' style={{margin:'0.3rem'}}>
                {user.name}
              </Typography.Title>
              <Typography.Title level={4} className='' style={{margin:'0.3rem'}}>
                {user.email}
              </Typography.Title>
              <Typography.Title level={4} className='' style={{margin:'0.3rem'}}>
                {user.phone}
              </Typography.Title>
              <Typography.Title level={4} className='' style={{margin:'0.3rem'}}>
                {user.address}
              </Typography.Title>
            </div>
          </div>
        </div>

      </div>
      {/* <Card title="Bank Details" className='text-center col-span-1' bordered={false} style={{ width: '100%', height: '100%' }}>
          <Descriptions
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
              <Descriptions.Item label={<b>Branch Name</b>} >{account.branchName}</Descriptions.Item>
              <Descriptions.Item label={<b>Branch Address</b>} >{account.branchAddress}</Descriptions.Item>
          </Descriptions>
       
    </Card>
    <Card title="Account Details" className='text-center col-span-1' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Card.Grid style={{width:'100%'}} className='col-span-2 text-left whitespace-nowrap'>
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
              <Descriptions.Item label={<b>Account Number</b>} >{account.accountNumber}</Descriptions.Item>
              <Descriptions.Item label={<b>Account Type</b>} >{account.accountType}</Descriptions.Item>
              <Descriptions.Item label={<b>IFSC Code</b>} >{account.ifscCode}</Descriptions.Item>
          </Descriptions>
          <Button type="primary" className='bg-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-l hover:rounded-full mx-auto my-5' danger>
              Delete Account
          </Button> 
        </Card.Grid>
    </Card>
    <Card title="Account Holder's Details" className='text-center col-span-1' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Card.Grid style={{width:'100%', height:'100%'}} className='col-span-2 text-left whitespace-nowrap overflow-x-auto'>
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
              style={{width:'100%', height:'100%'}}
          >
            <Descriptions.Item label={<b>Account Holder's Name</b>} >{user.name}</Descriptions.Item>
            <Descriptions.Item label={<b>Account Holder's Address</b>} >{user.address}</Descriptions.Item>
            <Descriptions.Item label={<b>Phone Number</b>} >{user.phone}</Descriptions.Item>
            <Descriptions.Item label={<b>Email</b>} >{user.email}</Descriptions.Item>
          </Descriptions>
        </Card.Grid>
    </Card> */}
    </div>
  )
}

BankDetails.propTypes = {
  account: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default BankDetails