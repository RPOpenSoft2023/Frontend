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
import MonthlySummaryData from '../Data/MonthlySummaryData';
import MonthlySummaryTableData from '../Data/MonthlySummaryTable';
import Plot from "../Components/Plot";
import Line from "../Components/Line"
import { Tabs } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnalyseChart from "../Components/AnalyseChart";
const change = (key) => {
    console.log(key)
}

const Analyser = () => {
    const items = [
        {
            key: '1',
            label: `Bank details`,
            children: <div >
                <Container className='my-3' style={{ display: 'flex', justifyContent: '', flexWrap: 'wrap', }}>
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
                        {/* <Descriptions
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



                        </Descriptions> */}
                        <AnalyseChart/>

                    </Card>
                    <Card bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <StackedPlot data={freqData} />
                    </Card>
                </div>
                <Row justify="space-between" className="mx-3 m-4">
                    <Col span={12} className="bg-white p-4">
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
            children: <div style={{ display: 'flex', justifyContent: 'center' }} className="p-10">
                <Card bordered={true} style={{ width: '60%', height: 'auto', textAlign: "center" }}>
                    <Table columns={ColumnData} dataSource={TableData}
                        pagination={{ pageSize: 9 }}
                    />
                </Card>
            </div>,
        },

    ];
    return (
        <div className="p-10">
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
            <div className="my-3">
                <div className="grid grid-cols-10 gap-4 font-sans">
                    <div className="col-span-3 md:col-span-2 grid justify-items-end text-md md:text-xl lg:text-2xl font-mono text-blue-800">{">"} REPORT ANALYSIS</div>
                    <div className="col-span-5 md:col-span-5 grid grid-cols-5 flex items-center ml-4 flex">
                        <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit mx-2 flex items-center justify-items-end bg-white"><i class='bx bx-calendar mr-2'></i><span>22/09/2022</span></div>
                        <div className="col-span-2 md:col-span-1 rounded-md p-1 shadow-md w-fit ml-8 lg:mx-2 flex items-center justify-items-start bg-white"><i class='bx bx-calendar mr-2'></i><span>23/03/2023</span></div>
                    </div>
                    <div className="col-span-2 md:col-span-3 flex justify-end pr-4 items-center text-xl mr-4"><Link><i class='bx bx-download mx-2'></i><span>Analysis</span></Link></div>
                </div>
            </div>
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