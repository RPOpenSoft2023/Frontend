import AnalyserCard from "../Components/AnalyserCard"
import StackedPlot from "../Components/StackedPlot";
import CardData from "../Data/CardData"
import TableData from "../Data/TableData";
import ColumnData from "../Data/ColumnData";
import freqData from '../Data/freqData'
import { Row, Col, Card, Table } from 'antd'
import { Tabs } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnalyseChart from "../Components/AnalyseChart";
import CategoryChart from "../Components/CategoryChart";
import PieChart from "@ant-design/plots/es/components/pie";
import LoanAnalysisChart from "../Components/Analysis/LoanAnalysisChart";
import SummaryTab from "../Components/SummaryTab";
import { useEffect, useState } from "react";
import axios from "axios";
const change = (key) => {
    console.log(key)
}

const Analyser = () => {
    const [start_month, set_start_month] = useState('04')
    const [start_year, set_start_year] = useState('2020')
    const [end_month, set_end_month] = useState('08')
    const [end_year, set_end_year] = useState('2020')


    useEffect(() => {
        const access_token = localStorage.getItem("jwt_token");
        // const account_number= localStorage.getItem("account_number");
        const account_number = 65749567438;

        axios(
            {
                method: "get",
                url: `${process.env.REACT_APP_ANALYSER_API}/analyse/api/bank-analysis`,
                data: {
                    "account_number": "65749567438",
                    "start_month": "04",
                    "start_year": "2020",
                    "end_month": "08",
                    "end_year": "2020"
                }
                ,
                headers:{
                    Authorization:"Bearer " + localStorage.getItem("jwt_token")
                }
            }
        ).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })

    }, []);

    const items = [
        {
            key: '1',
            label: `Overview`,
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

                <div className='bg-inherit space-x-4 p-8' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card title="Income & Expenditure" className="shadow-lg" bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <AnalyseChart />

                    </Card>
                    <Card title="Transaction Types" className="shadow-lg" bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <StackedPlot data={freqData} />
                    </Card>
                </div>
                <div className='bg-inherit space-x-4 p-8' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card title="Category Chart" className="shadow-lg" bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <CategoryChart />
                    </Card>
                    <Card title="Loan details" className="shadow-lg h-inherit" bordered={true} style={{ width: '50%', height: '50%', fontSize: "16px", textAlign: "center" }}>
                        <LoanAnalysisChart />
                    </Card>
                </div>
            </div>,
        },
        {
            key: '2',
            label: `Recent Transactions`,
            children: <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card bordered={true} style={{ width: '70%', height: 'auto', textAlign: "center" }}>
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
                <Card bordered={true} style={{ width: '75%', height: 'auto', textAlign: "center" }} className='.overflow-scroll'>
                    <SummaryTab />
                </Card>
            </div>,
        },

    ];
    return (
        <div className="p-0">
            <div className="my-3">
                <div className="grid grid-cols-10 gap-4 font-sans">
                    <div className="col-span-3 md:col-span-2 grid justify-items-end text-md md:text-xl lg:text-2xl font-mono text-blue-800">{">"} BANK ANALYSIS</div>
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