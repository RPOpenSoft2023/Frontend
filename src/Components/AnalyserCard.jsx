import React from "react";
import { Card } from "antd";
function AnalyserCard(props) {
  return (
    <div>
      <Card
        style={{ width: 250 }}
        className="ml-3 mr-3 bg-zinc-300 text-center text-base font-semibold"
      >
        <h1><b>{props.title}</b></h1>
        <h2>{props.data}</h2>
      </Card>
    </div>
  );
}
export default AnalyserCard;
