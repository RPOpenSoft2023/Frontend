import AnalyserCard from "../Components/AnalyserCard"
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import AccountData from "../Data/AccountData";
import UserData from "../Data/UserData";
import { Descriptions } from 'antd';
import { Row, Col, Card, Table } from 'antd'
import PieChart from "../Components/PieChart";
import Plot from "../Components/Plot";
import { Tabs } from 'antd';

const change = (key) => {
    console.log(key)
}

const items = [
    {
        key: '1',
        label: `Bank details`,
        children: <div className='bg-white' style={{ display: 'flex', justifyContent: 'center' }}><Card bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
            <Descriptions
                bordered
                column={{
                    xxl: 4,
                    xl: 1,
                    lg: 3,
                    md: 3,
                    sm: 2,
                    xs: 1,
                }}
            >
                <Descriptions.Item label={<b>Bank Name</b>} >{AccountData.bankName}</Descriptions.Item>
                <Descriptions.Item label={<b>Account Number</b>} >{AccountData.accountNumber}</Descriptions.Item>
                <Descriptions.Item label={<b>Account Type</b>} >{AccountData.accountType}</Descriptions.Item>
                <Descriptions.Item label={<b>Branch Name</b>} >{AccountData.branchName}</Descriptions.Item>
                <Descriptions.Item label={<b>Branch Address</b>} >{AccountData.branchAddress}</Descriptions.Item>
                <Descriptions.Item label={<b>IFSC Code</b>} >{AccountData.ifscCode}</Descriptions.Item>
                <Descriptions.Item label={<b>Account Holder's Name</b>} >{UserData.name}</Descriptions.Item>
                <Descriptions.Item label={<b>Account Holder's Address</b>} >{UserData.address}</Descriptions.Item>
                <Descriptions.Item label={<b>Phone Number</b>} >{UserData.phone}</Descriptions.Item>
                <Descriptions.Item label={<b>Email</b>} >{UserData.email}</Descriptions.Item>



            </Descriptions>

        </Card>
        </div>,
    },
    {
        key: '2',
        label: `Recent Transactions`,
        children: <Card bordered={true} style={{ width: 'auto', height: 'auto', textAlign: "center" }}>
            <Table columns={ColumnData} dataSource={TableData}
                pagination={{ pageSize: 9 }}
            />
        </Card>,
    },
    {
        key: '3',
        label: `Pie Chart`,
        children: <Row justify="space-between" className="mx-3">
            <Col span={11}>
                <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <PieChart></PieChart>
                </div>
            </Col>
            <Col span={13} >
                <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', widht: '100%', height: '100%' }}><Card bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                    <Plot />
                </Card>
                </div>
            </Col>
        </Row>
        ,
    },

];

const Analyser = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="my-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {CardData.map((data) =>
                    <AnalyserCard
                        key={data.key}
                        id={data.key}
                        data={data.num}
                        title={data.title}
                    />
                )}
            </div>
            <Tabs animated tabPosition="left" type='card' defaultActiveKey="1" centered items={items} />

        </div>
    );
}

export default Analyser;