import React from "react";
import { Card, Typography } from "antd";
const { Title } = Typography;
function AnalyserCard(props) {
  return (
    <div>
      <Card
        style={{ width: 190,height:120 }}
        className="ml-3 mr-3 bg-zinc-300 text-center text-sm font-semibold shadow-md"
        >
        <b>
          <Title level={2} style={{color:"#2563EB",padding:0}}>
            <code style={{padding:0,margin:0, background:"none",border:'none'}}>
              <span className="mr-1" style={{fontSize:"1.2rem"
            }}>{(props.id === 1 || props.id === 2) && "₹"}</span>{props.data}
            </code>
          </Title>
        </b>
        <h3 className="mb-2">
          {props.title}
        </h3>
        
      </Card>
    </div>
  );
}
// const Container = styled.div`
//   @media screen and (max-width: 768px) {
//     width:40%;


//     & > * {
//       margin: 0.5rem 0;
//     }
//   }
// `;
export default AnalyserCard;
