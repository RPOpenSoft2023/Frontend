import React from 'react';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormCom from './form';

const Add = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Bank Account
      </Button>
      <Modal
        open={open}
        title="Add Bank Details"
        onCancel={handleCancel}
         footer={[]}
      >

        <FormCom />
        
      </Modal>
    </>
  );
};
export default Add;