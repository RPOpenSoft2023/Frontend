import AnalyserCard from "../Components/AnalyserCard"
import StackedPlot from "../Components/StackedPlot";
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import categoryData from "../Data/CategoryData";
import AccountData from "../Data/AccountData";
import freqData from '../Data/freqData'
import UserData from "../Data/UserData";
import { Descriptions } from 'antd';
// import { Descriptions } from 'antd';
import { Row, Col, Card, Table } from 'antd'
import PieChart from "../Components/PieChart";
import Plot from "../Components/Plot";
import Line from "../Components/Line"
import { Tabs } from 'antd';
import styled from 'styled-components';
const change = (key) => {
    console.log(key)
}

const Analyser = () => {
    const items = [
        {
            key: '1',
            label: `Bank details`,
            children: <div >
                <Container className='my-3' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
                    {CardData.map((data) =>
                        <AnalyserCard
                            key={data.key}
                            id={data.key}
                            data={data.num}
                            title={data.title}
                            style={{ width: '100%', maxWidth: '400px', margin: '0.5rem' }}
                        />
                    )}
                </Container>

                <div className='bg-white' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card title="Bank account details" bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
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
                            responsive={{
                                xxl: 'undefined',
                                xl: 2,
                                lg: 2,
                                md: 2,
                                sm: 1,
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
                    <Card bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <StackedPlot data={freqData} />
                    </Card>
                </div>
                <Row justify="space-between" className="mx-3">
                    <Col span={12}>
                        {/* <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}> */}
                            <StackedPlot data={categoryData} />
                        {/* </div> */}
                    </Col>
                    <Col span={12} >
                        <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', widht: '100%', height: '100%' }}>
                            <Card title="Expenditure" bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                                <Plot />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>,
        },
        {
            key: '2',
            label: `Recent Transactions`,
            children: <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card bordered={true} style={{ width: '60%', height: 'auto', textAlign: "center" }}>
                    <Table columns={ColumnData} dataSource={TableData}
                        pagination={{ pageSize: 9 }}
                    />
                </Card>
            </div>,
        },
        {
            key: '3',
            label: `Monthly Summary`,
            children: <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card bordered={true} style={{ width: '60%', height: 'auto', textAlign: "center" }}>
                    <Table columns={ColumnData} dataSource={TableData}
                        pagination={{ pageSize: 9 }}
                    />
                </Card>
            </div>,
        },
        {
            key: '4',
            label: `categories`,
            children: <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card bordered={true} style={{ width: '60%', height: 'auto', textAlign: "center" }}>
                    <Table columns={ColumnData} dataSource={TableData}
                        pagination={{ pageSize: 9 }}
                    />
                </Card>
            </div>,
        },

    ];
    return (
        <div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }} className="my-3">
                {CardData.map((data) =>
                    <AnalyserCard
                        key={data.key}
                        id={data.key}
                        data={data.num}
                        title={data.title}
                    />
                )}
            </div> */}
            <Tabs animated defaultActiveKey="1" centered items={items} />

        </div>
    );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: left;


    & > * {
      margin: 0.5rem 0;
    }
  }
`;
export default Analyser;