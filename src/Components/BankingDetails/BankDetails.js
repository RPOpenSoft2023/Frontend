import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Typography } from 'antd'
const BankDetails = ({ account }) => {
  if(!account.loading){
  return (
    <div className='flex flex-wrap'>
      <Avatar
        style={{
          backgroundColor: 'red',
          verticalAlign: 'middle',
          margin:'2.5em'
        }}
        className='w-44 h-44'
        gap={4}
      >
        <div className='h-44 flex items-center'>
          <div className='w-full text-center text-7xl'>
            {(account.Bank)?account.Bank[0]:'A'}
          </div>
        </div>
      </Avatar>
      <div className="flex flex-col" style={{margin:'2.5rem'}}>
        <div className="flex">
          <Typography.Title level={4} style={{ margin: '0.5rem' }}>
            {/* Name svg*/}
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-bank text-center h-8 w-8" viewBox="0 0 24 24"> <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/> </svg>          </Typography.Title>

          <Typography.Title level={4} className='' style={{ margin: '0.3rem' }}>
            {account.Bank}
          </Typography.Title>
        </div>
        <div className="flex">
          <Typography.Title level={4} style={{ margin: '0.5rem' }}>
            {/* Email svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-credit-card text-center h-9 w-9" viewBox="0 0 24 24">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
          </Typography.Title>
          <Typography.Title level={4} className='' style={{ margin: '0.3rem' }}>
            {account.AccountNo}
          </Typography.Title>
        </div>
        <div className="flex">
          <Typography.Title level={4} style={{ margin: '0.5rem' }}>
            {/* Phone svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-upc-scan text-center h-8 w-8" viewBox="0 0 24 24">
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
            </svg>
          </Typography.Title>
          <Typography.Title level={4} className='' style={{ margin: '0.3rem' }}>
            {account.IFSC}
          </Typography.Title>
        </div>
        <div className="flex">
          <Typography.Title level={4} style={{ margin: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill text-center w-8 h-8" viewBox="0 0 24 24">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
          </Typography.Title>
          <Typography.Title level={4} className='' style={{ margin: '0.3rem' }}>
            {account.BranchAddress}
          </Typography.Title>
        </div>
      </div>
    </div>
  )
  }
}

BankDetails.propTypes = {
  account: PropTypes.object.isRequired,
}

export default BankDetails