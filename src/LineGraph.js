import React from 'react';
import "./LineGraph.css";
import {Line} from "react-chartjs-2";

const LineGraph = () => {

    const data = [{
        x: 10,
        y: 20
    },
    {
        x: 15,
        y: 10
    },
    {
        x: 12,
        y: 4,
    },];

    return (
        <div className="lineGraph">
            <Line 
                data={{
                    datasets: [
                        {
                            type: "line",
                            data: data,
                            backgroundColor: "#000",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBackgroundColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "rgba(0,0,0,0)",
                            pointHoverBackgroundColor: "#5AC53B",
                            pointHoverBorderColor: "#000",
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: "6",
                        }
                    ]
                }} 
                options={{
                    scales: {
                        yAxes: [{
                            ticks:{
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}

export default LineGraph;
