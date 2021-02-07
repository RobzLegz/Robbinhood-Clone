import React from 'react';
import LineGraph from './LineGraph';
import "./NewsFeed.css";
import Stats from './Stats';

const NewsFeed = () => {
    return (
        <div className="newsFeed">
            <div className="newsFeedContainer">
                <div className="newsFeedChartSection">
                    <div className="portfolioValue">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.4%) Today</p>
                    </div>
                    <div className="newsfeedChart">
                        <LineGraph />
                        <Stats />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed
