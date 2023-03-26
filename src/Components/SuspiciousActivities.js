import {DownOutlined, RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table, Button, Popover } from 'antd';
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
const SuspiciousActivities = () => {
    const suspiciousColumn=[
        {
            title:"Activity",
            dataIndex:'activity',
            key:'activity'
        },
        {
            title:"Incidences",
            dataIndex:'incidences',
            key:'incidences'
        },
    ]
    const suspiciousData=[
        {
            activity:"Negative Computed Balance",
            incidences:"5",
        },
        {
            activity:"Round figure tax payments",
            incidences:"3",
        },
        {
            activity:"Negative Computed Balance",
            incidences:"5",
        },
        {
            activity:"Negative Computed Balance",
            incidences:"5",
        },
        {
            activity:"Negative Computed Balance",
            incidences:"5",
        }
    ]
    const content=(
        <Table columns={suspiciousColumn} dataSource={suspiciousData} pagination={false}/>
    )
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 
            <Popover content={content} title="Suspicious Activities" placement='topRight'>
                <InfoCircleOutlined type="primary">Hover me</InfoCircleOutlined>
            </Popover>,
        dataIndex: 'info',
        key: 'info',
    },
  ];
  const data = [];
  data.push({key:1, name:"NEGATIVE COMPUTED BALANCE IN SAVINGS/ CURRENT ACCOUNT"});
  data.push({key:2, name:"ROUND FIGURE TAX PAYMENTS"});
  data.push({key:3, name:"RTGS Payments below 2 lakh"});
  data.push({key:4,name:"ATM Cash withdrawl above 20,000"});
  return (
   
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        pagination={false}
        className="suspicious"
      />
      
    </>
  );
};
export default SuspiciousActivities;