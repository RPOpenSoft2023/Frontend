import AnalyserCard from "../Components/AnalyserCard"
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import AccountData from "../Data/AccountData";
import UserData from "../Data/UserData";
import { Row, Col, Card, Table } from 'antd'
const Analyser = () => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
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
                <Row justify="space-between">
                    <Col span={8}>
                        <Card title="Bank Details" bordered={false} style={{ width: '100%', height: '100%'}}>
                            <p>Bank Name: {AccountData.bankName}</p>
                            <p>Account Number: {AccountData.accountNumber}</p>
                            <p>Account Type: {AccountData.accountType}</p>
                            <p>Branch Name: {AccountData.branchName}</p>
                            <p>Branch Address: {AccountData.branchAddress}</p>
                            <p>IFSC Code: {AccountData.ifscCode}</p>
                            <p>Account Holder Name: {UserData.name}</p>
                            <p>Account Holder Address: {UserData.address}</p>
                            <p>Account Holder Phone Number: {UserData.phone}</p>
                            <p>Account Holder Email: {UserData.email}</p>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card title="Transactions" bordered={false} style={{ width: '100%', height: '100%', textAlign:"center" }}>
                            <Table columns={ColumnData} dataSource={TableData}
                                pagination={{ pageSize: 5 }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Analyser;