import React from 'react';
import { Column } from '@ant-design/plots';
import data from "../Data/freqData"

const StackedPlot = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    legend: {
      position: "right-top",
    },
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

export default StackedPlot;

