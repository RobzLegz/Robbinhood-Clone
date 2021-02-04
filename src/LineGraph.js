import React from 'react';
import "./LineGraph.css";
import {Line} from "chart.js";

const LineGraph = () => {
    return (
        <div className="lineGraph">
            <Line data={{
                datasets: [
                    {
                        type: "line",
                        data: {data}
                    }
                ]
            }} />
        </div>
    );
}

export default LineGraph;
