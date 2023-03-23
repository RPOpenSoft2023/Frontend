import { Switch, Table } from 'antd';
import { useState } from 'react';
import Data from '../Data/SummaryColumn'
import SummaryTable from '../Data/SummaryData'
const data = [];
const arr=['jan', 'feb', 'mar','apr','may','june','july','aug','sept','oct','nov','dec'];
let j=0;
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    category: SummaryTable[j],
    month: arr[i],
    jan: 1000,
    feb: 1000,
    mar: `London Park no. ${i}`,
    apr: `London Park no. ${i}`,
    may: `London Park no. ${i}`,
    jun: `London Park no. ${i}`,
    july: `London Park no. ${i}`,
    aug: `London Park no. ${i}`,
    sept: `London Park no. ${i}`,
    oct: `London Park no. ${i}`,
    nov: `London Park no. ${i}`,
    dec: `London Park no. ${i}`,


  });
}
const SummaryTab = () => {
//   const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={Data}
      dataSource={data}
      scroll={{
        x: 1500,
      }}

    
    />
  );
};
export default SummaryTab;