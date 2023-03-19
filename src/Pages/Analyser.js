import AnalyserCard from "../Components/AnalyserCard"
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import AccountData from "../Data/AccountData";
import UserData from "../Data/UserData";
import { Badge, Descriptions } from 'antd';
import { Row, Col, Card, Table } from 'antd'
const Analyser = () => {
    return (
        <div>
            <div style={{ display: 'flex' }} className="my-3">
                {CardData.map((data) =>
                    <AnalyserCard
                        key={data.key}
                        id={data.key}
                        data={data.num}
                        title={data.title}
                    />
                )}
            </div>
            <div>
                <Row justify="space-between" className="mx-3">
                    <Col span={8}>
                        <Card title={<b className="text-lg">Bank Details</b>} bordered={true} style={{ width: 'auto', height: '100%', fontSize: "16px",textAlign:"center" }}>
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
                    </Col>
                    <Col span={15} >
                        <Card title={<b className="text-lg">Transactions</b>} bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                            <Table columns={ColumnData} dataSource={TableData}
                                pagination={{ pageSize: 9 }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Analyser;