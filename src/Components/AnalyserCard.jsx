import React from "react";
import { Card } from "antd";
import styled from "styled-components";
function AnalyserCard(props) {
  return (
    <div>
      <Card
        style={{ width: 190 }}
        className="ml-3 mr-3 bg-zinc-300 text-center text-sm font-semibold shadow-md"
      >
        <h1 style={{color:"#2563EB"}}><b>{props.data}</b></h1>
        <h3>
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
