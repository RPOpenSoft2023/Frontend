import {
  InfoCircleOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";
import { Badge, Dropdown, Space, Table, Button, Popover } from "antd";
import { Tooltip } from "antd";

const SuspiciousActivities = (props) => {

  const Data = props.data.Cautions;
  // console.log(Data.atmFlag[1][0].Date);

  const suspiciousColumn = [
    {
      title: "Activity",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "Incidences",
      dataIndex: "incidences",
      key: "incidences",
    },
  ];
  const suspiciousData = [
    {
      activity: "Negative Computed Balance",
      incidences: `${Data.negativeComputedBalanceFlag[0]}`,
    },
    {
      activity: "Round figure tax payments",
      incidences: `${Data.taxFlag[0]}`,
    },
    {
      activity: "RTGS Payments below ₹2 lakhs",
      incidences: `${Data.rtgsFlag[0]}`,
    },
    {
      activity: "ATM withdrawals above ₹20,000",
      incidences: `${Data.atmFlag[0]}`,
    },
    {
      activity: "Equal debits & credits",
      incidences: `${Data.equalDebitCreditFlag[0]}`,
    },
    {
      activity: "Cheque deposits on bank holidays",
      incidences: `${Data.chequeInHolidayFlag[0]}`,
    },
    {
      activity: "High credits on bank holidays",
      incidences: `${Data.highHolidayCredit[0]}`,
    },
    {
      activity: "High cash deposits",
      incidences: `${Data.highCashCreditFlag[0]}`,
    },
    {
      activity: "Balance vs Computed balance mismatch",
      incidences: `${Data.computedBalanceError[0]}`,
    },
  ];

  const suspiciousColumnFiltered = suspiciousData.filter((record)=>{
    return record.incidences>0;
  })

  const content = (
    <Table
      columns={suspiciousColumn}
      dataSource={suspiciousColumnFiltered}
      pagination={false}
    />
  );

  const columns1 = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Particulars",
      dataIndex: "particulars",
      key: "particulars",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
    },
    {
      title: "Credit",
      dataIndex: "credit",
      key: "credit",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
  ];

  const dataNeg = [];

  for (let i = 0; i <Data.negativeComputedBalanceFlag[0]; ++i) {
    dataNeg.push({
      key: i.toString(),
      date: `${Data.negativeComputedBalanceFlag[1][i].Date}`,
      particulars: `${Data.negativeComputedBalanceFlag[1][i].Particulars}`,
      category: `${Data.negativeComputedBalanceFlag[1][i].Category}`,
      debit: `${Data.negativeComputedBalanceFlag[1][i].Debit}`,
      credit: `${Data.negativeComputedBalanceFlag[1][i].Credit}`,
      balance: `${Data.negativeComputedBalanceFlag[1][i].Balance}`,
    });
  }


  const dataTax = [];

  for (let i = 0; i <Data.taxFlag[0]; ++i) {
    dataTax.push({
      key: i.toString(),
      date: `${Data.taxFlag[1][i].Date}`,
      particulars: `${Data.taxFlag[1][i].Particulars}`,
      category: `${Data.taxFlag[1][i].Category}`,
      debit: `${Data.taxFlag[1][i].Debit}`,
      credit: `${Data.taxFlag[1][i].Credit}`,
      balance: `${Data.taxFlag[1][i].Balance}`,
    });
  }


  const dataRtgs = [];

  for (let i = 0; i <Data.rtgsFlag[0]; ++i) {
    dataRtgs.push({
      key: i.toString(),
      date: `${Data.rtgsFlag[1][i].Date}`,
      particulars: `${Data.rtgsFlag[1][i].Particulars}`,
      category: `${Data.rtgsFlag[1][i].Category}`,
      debit: `${Data.rtgsFlag[1][i].Debit}`,
      credit: `${Data.rtgsFlag[1][i].Credit}`,
      balance: `${Data.rtgsFlag[1][i].Balance}`,
    });
  }


  const dataAtm = [];

  for (let i = 0; i <Data.atmFlag[0]; ++i) {
    dataAtm.push({
      key: i.toString(),
      date: `${Data.atmFlag[1][i].Date}`,
      particulars: `${Data.atmFlag[1][i].Particulars}`,
      category: `${Data.atmFlag[1][i].Category}`,
      debit: `${Data.atmFlag[1][i].Debit}`,
      credit: `${Data.atmFlag[1][i].Credit}`,
      balance: `${Data.atmFlag[1][i].Balance}`,
    });
  }


  const dataEqual = [];

  for (let i = 0; i <Data.equalDebitCreditFlag[0]; ++i) {
    dataEqual.push({
      key: i.toString(),
      date: `${Data.equalDebitCreditFlag[1][i].Date}`,
      particulars: `${Data.equalDebitCreditFlag[1][i].Particulars}`,
      category: `${Data.equalDebitCreditFlag[1][i].Category}`,
      debit: `${Data.equalDebitCreditFlag[1][i].Debit}`,
      credit: `${Data.equalDebitCreditFlag[1][i].Credit}`,
      balance: `${Data.equalDebitCreditFlag[1][i].Balance}`,
    });
  }


  const dataCheque = [];

  for (let i = 0; i <Data.chequeInHolidayFlag[0]; ++i) {
    dataCheque.push({
      key: i.toString(),
      date: `${Data.chequeInHolidayFlag[1][i].Date}`,
      particulars: `${Data.chequeInHolidayFlag[1][i].Particulars}`,
      category: `${Data.chequeInHolidayFlag[1][i].Category}`,
      debit: `${Data.chequeInHolidayFlag[1][i].Debit}`,
      credit: `${Data.chequeInHolidayFlag[1][i].Credit}`,
      balance: `${Data.chequeInHolidayFlag[1][i].Balance}`,
    });
  }


  const dataHoliday = [];

  for (let i = 0; i <Data.highHolidayCredit[0]; ++i) {
    dataHoliday.push({
      key: i.toString(),
      date: `${Data.highHolidayCredit[1][i].Date}`,
      particulars: `${Data.highHolidayCredit[1][i].Particulars}`,
      category: `${Data.highHolidayCredit[1][i].Category}`,
      debit: `${Data.highHolidayCredit[1][i].Debit}`,
      credit: `${Data.highHolidayCredit[1][i].Credit}`,
      balance: `${Data.highHolidayCredit[1][i].Balance}`,
    });
  }
  
  
  const dataCash = [];

  for (let i = 0; i <Data.highCashCreditFlag[0]; ++i) {
    dataCash.push({
      key: i.toString(),
      date: `${Data.highCashCreditFlag[1][i].Date}`,
      particulars: `${Data.highCashCreditFlag[1][i].Particulars}`,
      category: `${Data.highCashCreditFlag[1][i].Category}`,
      debit: `${Data.highCashCreditFlag[1][i].Debit}`,
      credit: `${Data.highCashCreditFlag[1][i].Credit}`,
      balance: `${Data.highCashCreditFlag[1][i].Balance}`,
    });
  }


  const dataMismatch = [];

  for (let i = 0; i <Data.computedBalanceError[0]; ++i) {
    dataMismatch.push({
      key: i.toString(),
      date: `${Data.computedBalanceError[1][i].Date}`,
      particulars: `${Data.computedBalanceError[1][i].Particulars}`,
      category: `${Data.computedBalanceError[1][i].Category}`,
      debit: `${Data.computedBalanceError[1][i].Debit}`,
      credit: `${Data.computedBalanceError[1][i].Credit}`,
      balance: `${Data.computedBalanceError[1][i].Balance}`,
    });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {text}{'  '}
          <Tooltip className="mx-2" title={record.description}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      ),
    },
    {
      title: (
        <Popover
          content={content}
          title="Suspicious Activities"
          placement="topRight"
        >
          <InfoCircleOutlined type="primary">Hover me</InfoCircleOutlined>
        </Popover>
      ),
      dataIndex: "info",
      align: "right",
      key: "info",
    },
  ];

  const data = [];
  data.push({
    key: 1,
    name: "NEGATIVE COMPUTED BALANCE",
    func: dataNeg,
    description: "hello",
  });
  data.push({ 
    key: 2, 
    name: "ROUND FIGURE TAX PAYMENTS",
    func: dataTax,
    description: "hello",
  });
  data.push({ 
    key: 3, 
    name: "RTGS PAYMENTS BELOW ₹2 LAKHS",
    func: dataRtgs, 
    description: "hello",
  });
  data.push({ 
    key: 4, 
    name: "ATM WITHDRAWALS ABOVE ₹20,000",
    func: dataAtm, 
    description: "hello",
  });
  data.push({ 
    key: 5, 
    name: "EQUAL DEBITS & CREDITS",
    func: dataEqual, 
    description: "hello",
  });
  data.push({ 
    key: 6, 
    name: "CHEQUE DEPOSITS ON BANK HOLIDAYS",
    func: dataCheque, 
    description: "hello", 
  });
  data.push({ 
    key: 7, 
    name: "HIGH CREDITS ON BANK HOLIDAYS",
    func: dataHoliday, 
    description: "hello", 
  });
  data.push({ 
    key: 8, 
    name: "HIGH CASH DEPOSITS",
    func: dataCash, 
    description: "hello",
  });
  data.push({ 
    key: 9, 
    name: "BALANCE VS COMPUTED BALANCE MISMATCH",
    func: dataMismatch, 
    description: "hello",
  });

  const filteredData = data.filter((record)=>{
    return record.func.length>0;
  })

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => {
            return (record.func.length>0?<Table columns={columns1} dataSource={record.func} pagination={false} />:null);
          },
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={filteredData}
        pagination={false}
        scroll={{ y: 400 }}
      />
    </>
  );
};
export default SuspiciousActivities;
