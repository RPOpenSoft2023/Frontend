import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import Plus from './Plus';

const Join = ({matches}) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <li>
              <Link
                class="md:p-4 py-2 block text-white hover:text-purple-400 font-mono"
                onClick={showModal}
              >
                {!matches ? (
                  <p>Add</p>
                ) : (
                  <i class="bx bx-plus-circle bx-sm text-white"></i>
                )}
              </Link>
            </li>
            
            <Modal
                open={open}
                title="Add Bank Details"
                onCancel={handleCancel}
                footer={[]}
            >

                <Plus />

            </Modal>
        </>
    );
};
export default Join;