import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Dropdown } from "antd";
import { useState } from "react";
import Plus from "./Plus";
import FormCom from './form';
const Join = ({ matches }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const showModal1 = () => {
    setOpen1(true);
  };
  const showModal2 = () => {
    setOpen2(true);
  };
  const handleCancel = () => {
    setOpen1(false);
    setOpen2(false);
  };
  const items = [
    {
      key: "1",
      label: (
        <div target="_blank" rel="noopener noreferrer" to="" onClick={showModal1}>
          Upload Bank Statement
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div target="_blank" rel="noopener noreferrer" to="" onClick={showModal2}>
          Add Bank Details
        </div>
      ),
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow className="flex justify-center items-center m-3">
        <li
          class="md:p-4 py-2 block text-white hover:text-purple-400 font-mono cursor-pointer"
        >
          {!matches ? (
            <p>Add</p>
          ) : (
            <i class="bx bx-plus-circle bx-sm text-white"></i>
          )}
        </li>
      </Dropdown>
      <Modal
        open={open1}
        title="Upload Bank Statement"
        onCancel={handleCancel}
        footer={[]}
      >
        <Plus />
      </Modal>
      <Modal
        open={open2}
        title="Add Bank Details"
        onCancel={handleCancel}
        footer={[]}
      >
        <FormCom/>
      </Modal>
    </>
  );
};
export default Join;
