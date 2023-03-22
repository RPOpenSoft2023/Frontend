import React from "react";
import { Card } from "antd";
import styled from "styled-components";
function AnalyserCard(props) {
  return (
    <div>
      <Card
        style={{ width: 200 }}
        className="ml-3 mr-3 bg-zinc-300 text-center text-base font-semibold shadow-md"
      >
        <h1>
          <b>{props.title}</b>
        </h1>
        <h2>{props.data}</h2>
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
