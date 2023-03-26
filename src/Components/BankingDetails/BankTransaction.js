import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  Tabs,
  Button,
  Card,
  Descriptions,
  Modal,
  InputNumber,
  Input,
  Select
} from "antd";
import { showToastMessage } from "../Toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { BankingdetailsContext } from "../../Contexts/bankingDetailsContext/bankingDetailsContext";
const BANKING_API = process.env.REACT_APP_BANKING_API; // this is the URL for the banking API
const ANALYSER_API = process.env.REACT_APP_ANALYSER_API; // this is the URL for the analyser API

const BankTransaction = ({ account, transaction }) => {
  const navigate = useNavigate();
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [OpenAnalyseModal, setOpenAnalyseModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [StartMonth, setStartMonth] = useState(0);
  const [EndMonth, setEndMonth] = useState(0);
  const [StartYear, setStartYear] = useState(0);
  const [EndYear, setEndYear] = useState(0);
  const [editModal, setEditModal] = useState(null);
  const [transactionData, setTransactionData] = useState(transaction.result);
  // console.log("transaction", transactionData);
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
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
      ),
      align: "center",
      // ellipsis: true,
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">{text}</div>
      ),
      align: "center",
      // ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (text,record) => {
        return(
          <Button type="primary" className="w-20 bg-blue-500" value={text} onClick={e => {
            setEditModal(record)
            console.log(record)
          }}>
            Edit
          </Button>
        )
      },
    }
  ];
  const handleUpload = () => {
    console.log(selectedFile);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    };
    axios({
      method: "post",
      url: `${ANALYSER_API}/analyse/api/add-statement/`,
      headers: headers,
      data: {
        account_number: account.AccountNo,
        file: selectedFile,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        showToastMessage("File uploaded successfully", "positive");
      })
      .catch((err) => {
        console.log(err);
        showToastMessage(err.message, "negative");
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
    setSelectedFile(file);

    console.log('selectedFile', selectedFile)
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
  const AnalyseTransactions = () => {
    if (StartMonth > 0 && EndMonth < 13 && StartYear > 0 && EndYear > 0) {
      navigate("/analyser", {
        state: {
          StartMonth: StartMonth,
          EndMonth: EndMonth,
          StartYear: StartYear,
          EndYear: EndYear,
          AccountNo:account.AccountNo
        },
      });
    }
    else{
      showToastMessage("Input Valid Month and Year", "negative")
    }
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

    const body = { account_number: `${account.AccountNo}` };
    axios
      .delete(`${BANKING_API}/banking/api/delete_account`, {
        headers: config.headers,
        data: body,
      })
      .then((res) => {
        console.log(res.data);
        showToastMessage("Account deleted Successfully", "positive");
        var index = bankingDetails.findIndex(
          (item) => item.AccountNo === account.AccountNo
        );
        setBankingDetails([
          ...bankingDetails.slice(0, index),
          ...bankingDetails.slice(index + 1),
        ]);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        showToastMessage(err.message, "negative");
      });
  };
  const EditTransaction = () => {
    console.log(editModal);
    const token = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      transaction_id: String(editModal.id),
      category: editModal.category,
      note: editModal.note,
    };
    console.log('body', body)
    
    axios({
      method: "put",
      url: `${ANALYSER_API}/analyse/api/edit-transaction/`,
      data: body,
      headers: config.headers,
    }).then((res) => {
      console.log(res.data);
      showToastMessage("Transaction edited Successfully", "positive");
      var index = transaction.result.findIndex(
        (item) => item.id === editModal.id
      );
      setTransactionData({
          ...transaction.slice(0, index),
          ...transaction.slice(index + 1),
          editModal
      });
      setEditModal(null);
    }).catch((err) => {
      console.log(err);
      setEditModal(null);
      showToastMessage(err.message, "negative");
    });
  }

  useEffect(() => {
    setTransactionData(transaction.result);
  }, [transaction.result]);
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
            </Tabs.TabPane>
            <Tabs.TabPane tab="Transaction History" className="mx-auto" key="1">
              <Table
                size={"middle"}
                columns={columns}
                bordered={false}
                dataSource={transactionData}
                pagination={false}
              />
              <Button
                type="primary"
                className="m-5 bg-blue-600 hover:bg-blue-900"
                onClick={() => {
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
          closable={false}
          footer={[]}
        >
          <p className="text-center">
            Are You sure Want to Delete the Account?
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                deleteAccount();
              }}
              className="m-2  bg-blue-600  hover:bg-blue-900 text-white ml-0"
            >
              OK
            </Button>
          </div>
        </Modal>
        <Modal
          open={OpenAnalyseModal}
          onCancel={() => {
            setOpenAnalyseModal(false);
          }}
          closable={false}
          footer={[]}
        >
          <div className="m-0">
            <div className="flex m-2 justify-center">
              <p className=" m-2">
                Start Month :{" "}
                <InputNumber
                  value={StartMonth}
                  onChange={(e) => {
                    setStartMonth(e);
                  }}
                  min={1}
                  max={12}
                />
              </p>
              <p className=" m-2">
                End Month :{" "}
                <InputNumber
                  value={EndMonth}
                  onChange={(e) => {
                    setEndMonth(e);
                  }}
                  min={1}
                  max={12}
                />
              </p>
            </div>
            <div className="flex m-2 justify-center">
              <p className=" m-2">
                Start Year :{" "}
                <InputNumber
                  value={StartYear}
                  onChange={(e) => {
                    setStartYear(e);
                  }}
                  min={0}
                />
              </p>
              <p className=" m-2">
                End Year :{" "}
                <InputNumber
                  value={EndYear}
                  onChange={(e) => {
                    setEndYear(e);
                  }}
                  min={0}
                />
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                className="m-2  bg-blue-600  hover:bg-blue-900 text-white"
                onClick={() => {
                  AnalyseTransactions();
                }}
              >
                Analyse
              </Button>
            </div>
          </div>
        </Modal>
        <Modal
          open={editModal ? true : false}
          onCancel={() => {
            setEditModal(null);
          }}
          closable={false}
          footer={[]}
        >
          <div className="m-0">
            <div className="flex m-2 justify-center">
              <p className=" m-2">
                Category :{" "}
                <Select
                  value={editModal ? editModal.category : ""}
                  onChange={(e) => {
                    setEditModal({
                      ...editModal,
                      category: e,
                    });
                  }}
                >
                  <Select.Option value="Food">Food</Select.Option>
                  <Select.Option value="Travel">Travel</Select.Option>
                  <Select.Option value="Shopping">Shopping</Select.Option>
                  <Select.Option value="Entertainment">Entertainment</Select.Option>
                  <Select.Option value="Bills">Bills</Select.Option>
                  <Select.Option value="Others">Others</Select.Option>
                </Select>
              </p>
            </div>
            <div className="flex m-2 justify-center">
              <p className=" m-2">
                Note :{" "}
                <Input
                  value={editModal ? editModal.note : ""}
                  onChange={(e) => {
                    setEditModal({
                      ...editModal,
                      note: e.target.value,
                    });
                  }}
                />
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                className="m-2  bg-blue-600  hover:bg-blue-900 text-white"
                onClick={() => {
                  EditTransaction();
                }}
              >
                Save Changes
              </Button>
            </div>
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
