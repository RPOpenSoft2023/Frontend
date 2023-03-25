import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Table, Tabs, Button, Card, Descriptions, Modal, InputNumber } from "antd";
import { showToastMessage } from "../Toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { BankingdetailsContext } from "../../Contexts/bankingDetailsContext/bankingDetailsContext";
const BANKING_API = process.env.REACT_APP_BANKING_API; // this is the URL for the banking API
const ANALYSER_API = process.env.REACT_APP_ANALYSER_API; // this is the URL for the analyser API
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    align: "center",
    // sorter: (a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    // ellipsis: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    align: "center",
    render: (text) => (
      <div className="text-center whitespace-nowrap overflow-hidden	">
        {text}
      </div>
    ),
    ellipsis: true,
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    // sorter: (a, b) => a.debit - b.debit,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    // sorter: (a, b) => a.credit - b.credit,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    // sorter: (a, b) => a.balance - b.balance,
    render: (text) => (
      <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
    ),
    align: "center",
    // ellipsis: true,
  },
];

const BankTransaction = ({ account, transaction }) => {
  const navigate = useNavigate();
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [OpenAnalyseModal,setOpenAnalyseModal]=useState(false);
  const [open, setOpen] = useState(false);
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleUpload = () => {
    console.log(selectedFile);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    };
    axios({
      method: 'post',
      url: `${ANALYSER_API}/analyse/api/add-statement/`,
      headers: headers,
      data: {
        account_number: account.account_number,
        transactions: selectedFile,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        showToastMessage("File uploaded successfully", "positive");
      })
      .catch((err) => {
        console.log(err);
        showToastMessage("File upload failed", "error");
      });
    setOpen(false);
    setSelectedFile(null);
    // message.success('File uploaded successfully');
  };
  const handleFileSelect = (event) => {
    console.log("hello");
    const file = event.target.files[0];
    console.log(file);
    if (file.type !== "text/csv") {
      showToastMessage("Please select a CSV file!", "negative");
      return;
    }

    setSelectedFile(event.target.files[0]);
    event.target.value = null;
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file.type !== "text/csv") {
      showToastMessage("Please drop a CSV file!", "negative");
      return;
    }
    setSelectedFile(file);
  };

  const deleteAccount = () => {
    console.log(account.account_number);
    const token = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = { account_number: `${account.account_number}` };
    axios
      .delete(`${BANKING_API}/banking/api/delete_account`, {
        headers: config.headers,
        data: body,
      })
      .then((res) => {
        console.log(res.data);
        showToastMessage("Account deleted Successfully", "positive");
        var index = bankingDetails.findIndex(item => item.AccountNo === account.account_number);
        setBankingDetails([
          ...bankingDetails.slice(0,index),
          ...bankingDetails.slice(index+1)
        ])
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!account.loading && !transaction.loading) {
    transaction.result.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
      <>
        <div>
          <Tabs defaultActiveKey="0" className="mx-auto text-center">
            <Tabs.TabPane tab="Bank Details" key="0">
              
                <Descriptions
                  bordered
                  column={{
                    xxl: 2,
                    xl: 2,
                    lg: 1,
                    md: 1,
                    sm: 1,
                    xs: 1,
                  }}
                >
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>Account Number</b>}
                  >
                    {account.AccountNo}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>Account Type</b>}
                  >
                    {account.Account_type}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>IFSC Code</b>}
                  >
                    {account.IFSC}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>Bank Name</b>}
                  >
                    {account.Bank}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>Branch Name</b>}
                  >
                    {account.BranchName}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="overflow-hidden"
                    label={<b>Branch Address</b>}
                  >
                    {account.BranchAddress}
                  </Descriptions.Item>
                </Descriptions>
                <Button
                  type="primary"
                  danger
                  className="m-5  bg-red-600 hover:bg-red-900"
                  onClick={() => {
                    setOpenDeleteModal(true);
                  }}
                >
                  Delete Account
                </Button>
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Transaction History" className="mx-auto" key="1">
              <Table
                size={"middle"}
                columns={columns}
                bordered={false}
                dataSource={transaction.result}
                pagination={false}
              />
              <Button
                type="primary"
                className="m-5 bg-blue-600 hover:bg-blue-900"
                onClick={()=>{
                  setOpenAnalyseModal(true);
                }}
              >
                Analyse
              </Button>
              <Button
                type="primary"
                className="m-5  bg-blue-600  hover:bg-blue-900"
                onClick={() => setOpen(true)}
              >
                Add Transaction
              </Button>
              <Modal
                open={open}
                onCancel={() => setOpen(false)}
                center
                footer={null}
              >
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <label
                    htmlFor="file-input"
                    className="text-blue-600 cursor-pointer"
                  >
                    <div
                      className="bg-white shadow-lg rounded-lg px-4 py-6 border-dashed border-2 border-gray-300 flex flex-col items-center justify-center"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <div className="mb-4">
                        {selectedFile ? (
                          <div>
                            <div className="font-medium mb-2">
                              {selectedFile.name}
                            </div>
                            <div>{selectedFile.size} bytes</div>
                          </div>
                        ) : (
                          <div className="text-gray-500">
                            Drop a file here or browse to select a file
                          </div>
                        )}
                        <input
                          id="file-input"
                          type="file"
                          className="hidden"
                          onChange={handleFileSelect}
                          accept="text/csv"
                        />
                      </div>
                    </div>
                  </label>
                  <div>
                    <Button
                      type="primary"
                      className="m-5  bg-blue-600 hover:bg-blue-900"
                      onClick={handleUpload}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </Modal>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <Modal
          open={OpenDeleteModal}
          onCancel={() => {
            setOpenDeleteModal(false);
          }}
          footer={[]}
        >
          <div></div>
          <p>Are You sure Want to Delete the Account</p>
          <div>
            <Button
              onClick={() => {
                deleteAccount();
              }}
              className="m-2  bg-blue-600  hover:bg-blue-900 text-white ml-0"
            >
              OK
            </Button>
            <Button
              onClick={() => {
                setOpenDeleteModal(false);
              }}
              className="m-2  bg-blue-600  hover:bg-blue-900 text-white"
            >
              Cancel
            </Button>
          </div>
        </Modal>
        <Modal open={OpenAnalyseModal}
          onCancel={() => {
            setOpenAnalyseModal(false);
          }}
          footer={[]}>
            <div className="flex m-2">
              <p className=" m-2">Start Month : <InputNumber/></p>
              <p className=" m-2">Start Year : <InputNumber/></p>
            </div>
            <div className="flex m-2">
              <p className=" m-2">End Month : <InputNumber/></p>
              <p className=" m-2">End Year : <InputNumber/></p>
            </div>
            <div className="flex justify-end">
            <Button  className="m-2  bg-blue-600  hover:bg-blue-900 text-white">Analyse</Button>
            </div>
        </Modal>
      </>
    );
  }
};

BankTransaction.propTypes = {
  account: PropTypes.object.isRequired,
  transaction: PropTypes.array.isRequired,
};

export default BankTransaction;
