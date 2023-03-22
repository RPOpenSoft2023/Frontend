import AnalyserCard from "../Components/AnalyserCard"
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import { Row, Col, Card, Table } from 'antd'
import MonthlySummaryData from '../Data/MonthlySummaryData';
import MonthlySummaryTableData from '../Data/MonthlySummaryTable';
import Plot from "../Components/Plot";
import Line from "../Components/Line"
import { Tabs } from 'antd';
import styled from 'styled-components';
import LineChart from '../Components/LineChart';

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
                <LineChart/>
                <Row justify="space-between" className="mx-3">
                    <Col span={12}>
                        <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                            {/* <PieChart/> */}
                        </div>
                    </Col>
                    <Col span={12} >
                        <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', widht: '100%', height: '100%' }}>
                            <Card title="Expenditure" bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                                <Plot />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row justify="space-between" className="mx-3">
                    <Col span={12}>
                        <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <Card title="Expenditure" bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                                <Plot />
                            </Card>
                        </div>
                    </Col>
                    <Col span={12} >
                        <div className='bg-white' style={{ display: 'flex', justifyContent: 'center', widht: '100%', height: '100%' }}>
                            <Card title="Expenditure" bordered={false} style={{ width: '100%', height: '100%', textAlign: "center" }}>
                                <Line />
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
                    <Table columns={MonthlySummaryData} dataSource={MonthlySummaryTableData}
                        pagination={{ pageSize: 9 }}
                    />
                </Card>
            </div>,
        },

    ];
    return (
        <div>
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