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
  Select,
  Spin,
  Pagination,
  DatePicker
} from "antd";
import { showToastMessage } from "../Toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { BankingdetailsContext } from "../../Contexts/bankingDetailsContext/bankingDetailsContext";
import mapping from "../../Data/mapping";
const BANKING_API = process.env.REACT_APP_BANKING_API; // this is the URL for the banking API
const ANALYSER_API = process.env.REACT_APP_ANALYSER_API; // this is the URL for the analyser API

const BankTransaction = ({ account, transaction, category }) => {
  const navigate = useNavigate();
  const [transactionMatrix, setTransactionMatrix] = useState([]);
  const [transactionCount, setTransactionCount] = useState(transaction.count);
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
  const [categoryData, setCategoryData] = useState(category.result);
  const [pageNumber, setPageNumber] = useState(1);
  const [filterModal, setFilterModal] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // console.log("transaction", transactionData);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">
          {text}
        </div>
      ),
      width: '10%'
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
      width: '25%'
    },
    {
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
      // sorter: (a, b) => a.debit - b.debit,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden text-red-500">{ (Math.round(text * 100) / 100).toFixed(2) }</div>
      ),
      align: "center",
      width: '10%'
      // ellipsis: true,
    },
    {
      title: "Credit",
      dataIndex: "credit",
      key: "credit",
      // sorter: (a, b) => a.credit - b.credit,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden text-green-500">{(Math.round(text * 100) / 100).toFixed(2)}</div>
      ),
      align: "center",
      width: '10%'
      // ellipsis: true,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">{(Math.round(text * 100) / 100).toFixed(2)}</div>
      ),
      align: "center",
      width: '10%'
      // ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">
          {mapping[text]}
        </div>
      ),
      align: "center",
      ellipsis: true,
      width: '15%'
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      // sorter: (a, b) => a.balance - b.balance,
      render: (text) => (
        <div className="text-center whitespace-nowrap	overflow-hidden">
          {text}
        </div>
      ),
      align: "center",
      ellipsis: true,
      width: '15%'
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      width: '5%',
      render: (text, record) => {
        return (
          <Button
            value={text}
            onClick={(e) => {
              setEditModal(record);
              console.log(record);
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-pencil-square w-6 mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            }
            className="overflow-hidden"
          />
        );
      },
    },
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
        // console.log(res);
        console.log(res.data);
        // setTransactionData(res.data);
        axios({
          method: "get",
          url: `${BANKING_API}/banking/api/transactions?account_number=${account.AccountNo}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log(res.data);
            setTransactionCount(res.data.count)
            setTransactionData(res.data.results);
            const matrix = [];
            for (let i = 0; i < transaction.count; i += 10) {
              matrix.push([]);
            }
            matrix[0] = res.data.results;
            setTransactionMatrix(matrix);
            setPageNumber(1);
          })
          .catch((err) => {
            console.log(err);
          });
        showToastMessage("File uploaded successfully", "positive");
      })
      .catch((err) => {
        console.log(err);
        showToastMessage("File upload failed", "negative");
      });
    setOpen(false);
    setSelectedFile(null);
    // message.success('File uploaded successfully');
  };
  const handleFileSelect = (event) => {
    console.log("hello");
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file.type !== "text/csv") {
      showToastMessage("Please select a CSV file!", "negative");
      return;
    }
    console.log(file);
    console.log("selectedFile", selectedFile);
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
          AccountNo: account.AccountNo,
          transactions: transaction.result,
        },
      });
    } else {
      showToastMessage("Input Valid Month and Year", "negative");
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
        showToastMessage("Account deletion failed", "negative");
      });
  };
  const changePage = (e) => {
    console.log("page", e);
    setPageNumber(e);
    // console.log("transactionMatrix", transactionMatrix[e-1])
    console.log("transactionMatrix", transactionMatrix.length, transactionMatrix)
    if(transactionMatrix.length < e){
      const matrix = [];
      for (let i = 0; i < transaction.count; i += 10) {
        matrix.push([]);
      }
      setTransactionMatrix(matrix)
    }
    if(transactionMatrix[e-1].length > 0){
      setTransactionData(transactionMatrix[e-1])
    } else {
      axios({
        method: "get",
        url: `${BANKING_API}/banking/api/transactions?account_number=${account.AccountNo}&page=${e}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
        .then((res) => {
          console.log('res.data', res.data)
          console.log("res", transactionMatrix[e-1])
          setTransactionMatrix([
            ...transactionMatrix.slice(0, e-1),
            res.data.results,
            ...transactionMatrix.slice(e)
          ])
          setTransactionData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const FilterTransactions = (e) => {
    if(startDate && endDate){
    let start_date = `${startDate.year()}`
    let end_date = `${endDate.year()}`
    if(startDate.month() < 10){
      start_date = start_date + `-0${startDate.month()+1}`
    } else {
      start_date = start_date + `-${startDate.month()+1}`
    }
    if(startDate.date() < 10){
      start_date = start_date + `-0${startDate.date()}`
    } else {
      start_date = start_date + `-${startDate.date()}`
    }
    if(endDate.month() < 10){
      end_date = end_date + `-0${endDate.month()+1}`
    } else {
      end_date = end_date + `-${endDate.month()+1}`
    }
    if(endDate.date() < 10){
      end_date = end_date + `-0${endDate.date()}`
    } else {
      end_date = end_date + `-${endDate.date()}`
    }
    console.log('start_date', start_date)
    console.log('end_date', end_date)
    // console.log('startDate', startDate)
    axios({
      method: "get",
      url: `${BANKING_API}/banking/api/transactions?account_number=${account.AccountNo}&start_date=${start_date}&end_date=${end_date}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setTransactionCount(res.data.count)
        setTransactionData(res.data.results);
        const matrix = [];
        for (let i = 0; i < transaction.count; i += 10) {
          matrix.push([]);
        }
        matrix[0] = res.data.results;
        setTransactionMatrix(matrix);
        setPageNumber(1)
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      axios({
      method: "get",
      url: `${BANKING_API}/banking/api/transactions?account_number=${account.AccountNo}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setTransactionCount(res.data.count)
        setTransactionData(res.data.results);
        const matrix = [];
        for (let i = 0; i < transaction.count; i += 10) {
          matrix.push([]);
        }
        matrix[0] = res.data.results;
        setTransactionMatrix(matrix);
        setPageNumber(1)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const EditTransaction = () => {
    // console.log(editModal);
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
    console.log("body", body);

    axios({
      method: "put",
      url: `${ANALYSER_API}/analyse/api/edit-transaction/`,
      data: body,
      headers: config.headers,
    })
      .then((res) => {
        console.log(res.data);
        showToastMessage("Transaction edited Successfully", "positive");
        var index = transactionData.findIndex(
          (item) => item.id === editModal.id
        );
        // console.log('transactionData', transactionData.slice(index+1))
        setTransactionData([
          ...transactionData.slice(0, index),
          editModal,
          ...transactionData.slice(index + 1),
        ]);
        setTransactionMatrix([
          ...transactionMatrix.slice(0, pageNumber-1),
          [
            ...transactionData.slice(0, index),
            editModal,
            ...transactionData.slice(index + 1),
          ],
          ...transactionMatrix.slice(pageNumber)
        ])
        setEditModal(null);
      })
      .catch((err) => {
        console.log(err);
        setEditModal(null);
        showToastMessage("Transaction edit failed", "negative");
      });
  };

  useEffect(() => {
    setTransactionData(transaction.result);
    setTransactionCount(transaction.count)
    const matrix = [];
    for (let i = 0; i < transaction.count; i += 10) {
      matrix.push([]);
    }
    matrix[0] = transaction.result;
    setTransactionMatrix(matrix);
  }, [transaction]);
  useEffect(() => {
    setCategoryData(category.result);
    console.log("categoryData", categoryData);
  }, [category.result]);
  if (!account.loading && !transaction.loading) {
    // transaction.result.sort((a, b) => new Date(b.date) - new Date(a.date));
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
              <div className="flex justify-end">
              <Button className="m-5 items-end" onClick={() => { setFilterModal(true) } }>
                Filter by Date 
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-funnel-fill w-4 inline" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                </svg>
              </Button>
              </div>
              <Table
                size={"middle"}
                columns={columns}
                bordered={false}
                dataSource={transactionData}
                pagination={false}
              />
              <div className="mt-2">
              <Pagination defaultCurrent={1} 
              current={pageNumber}
              total={transactionCount} onChange={changePage} hideOnSinglePage={true} showQuickJumper={true} showSizeChanger={false} />
              </div>
              <Button
                type="primary"
                className="m-5 bg-blue-600 hover:bg-blue-900"
                onClick={() => {
                  setOpenAnalyseModal(true);
                }}
                disabled={transactionData===null && transactionData.length === 0}
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
                      disabled={!selectedFile}
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
              <div className="m-2 flex justify-between items-center w-[300px]">
                <p className="mr-3">Category:</p>
                <Select
                  value={editModal ? editModal.category : ""}
                  onChange={(e) => {
                    setEditModal({
                      ...editModal,
                      category: e,
                    });
                  }}
                  className="w-full"
                >
                  {categoryData &&
                    categoryData.map((category) => (
                      <Select.Option value={category}>{mapping[category]}</Select.Option>
                    ))}
                </Select>
              </div>
            </div>
            <div className="flex m-2 justify-center">
              <div className=" m-2 flex justify-between items-center w-[300px]">
                <p className="mr-3">Note:</p>
                <Input
                  value={editModal ? editModal.note : ""}
                  onChange={(e) => {
                    setEditModal({
                      ...editModal,
                      note: e.target.value,
                    });
                  }}
                />
              </div>
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
        <Modal
          open={filterModal}
          onCancel={() => {
            setFilterModal(false);
          }}
          closable={false}
          footer={[]}
        >
          <div className="m-0">
            <div className="flex m-2 justify-center">
              <div className="m-2 flex justify-between items-center w-[300px]">
                <p className="mr-3">Start Date:</p>
                <DatePicker
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e);
                  }}
                />
              </div>
              <div className="m-2 flex justify-between items-center w-[300px]">
                <p className="mr-3">End Date:</p>
                <DatePicker
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e);
                  }}
                />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center">
              <Button
                className="m-2  bg-blue-600  hover:bg-blue-900 text-white"
                onClick={(e) => {
                  setFilterModal(false);
                  FilterTransactions(e);
                }}
              >
                Filter
              </Button>
              <Button
                className="m-2  bg-blue-600  hover:bg-blue-900 text-white"
                onClick={(e) => {
                  setStartDate(null);
                  setEndDate(null);
                  setFilterModal(false);
                  FilterTransactions(e);
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  } else {
    return <div className="text-center"><Spin size="large" className="text-center" /></div>;
  }
};

BankTransaction.propTypes = {
  account: PropTypes.object.isRequired,
  transaction: PropTypes.array.isRequired,
  category: PropTypes.array.isRequired,
};

export default BankTransaction;
