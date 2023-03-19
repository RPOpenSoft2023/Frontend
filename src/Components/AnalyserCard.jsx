import React from 'react'
import { Card } from 'antd'
function AnalyserCard(props) {
    return (
        <div>
            <Card style={{ width: 250 }} className="ml-3 mr-3 bg-zinc-300 text-center text-base font-semibold">
                <p>{props.data}</p>
                <p>{props.title}</p>
            </Card>
        </div>
    )
}
export default AnalyserCard