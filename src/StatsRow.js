import React from 'react';
import "./StatsRow.css";
import StockSVG from "./resources/stock2.svg";

const StatsRow = (props) => {

    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

    return (
        <div className="statsRow">
            <div className="rowIntro">
                <h1>{props?.name}</h1>
                <p>{props?.shares && (props?.shares + "shares")}</p>
            </div>
            <div className="rowChart">
                <img src={StockSVG} height={16} alt=""/>
            </div>
            <div className="rowNumbers">
                <p className="rowPrice">{props.price}$</p>
                <p className="rowPercentage">{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatsRow
