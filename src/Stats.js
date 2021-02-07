import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Stats.css"

const Stats = () => {

    const [stockData, setStockData] = useState([]);
    const BASE_URL = "https://finnhub.io/api/v1/quote";
    const TOKEN = "c0g15mf48v6rp6j6f9g0";

    const getStockData = (stock) => {
        return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        let tempStocksData = [];
        const stocksList = ["AAPL","MSFT","TSLA","FB","BABA","UBER","DIS","SBUX"];
        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock).then((res) => {
                    tempStocksData.push({
                        name: stock,
                        ...res.data,
                    });
                })
            );
        });
    }, []);

    return (
        <div className="stats">
            <div className="statsContainer">
                <div className="statsContainer">
                    <div className="statsHeader">
                        <p>Stocks</p>
                    </div>
                    <div className="statsContent">
                        <div className="statsRows">

                        </div>
                    </div>
                    <div className="statsHeader">
                        <p>Lists</p>
                    </div>
                    <div className="statsContent">
                        <div className="statsRows">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
