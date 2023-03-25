import React from "react";
import {Modal, Dropdown } from "antd";
import { useState,useEffect } from "react";
import Plus from "./Plus";
import FormCom from './form';
import { useContext } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
const Join = ({ matches }) => {
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
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
  useEffect(() => {
    handleCancel();
  }, [bankingDetails])
  
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
          Add Bank Account
        </div>
      ),
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow className={`flex ${(!matches) ? "justify-start ml-0 text-white font-semibold" : "justify center"} items-center m-3`}>
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
