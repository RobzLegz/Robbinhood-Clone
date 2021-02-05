import React, { useEffect, useState } from 'react';
import "./LineGraph.css";
import {Line} from "react-chartjs-2";

const LineGraph = () => {

    const [graphData, setGraphData] = useState([]);

    const createMockData = () => {
        let data = [];
        let value = 50;
        for(var i = 0; i < 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }
    }

    useEffect(() => {

    }, [])

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
                    legend:{
                        display: false,
                    },
                    tooltips:{
                        mode: "index",
                        intersect: false,
                    },
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
