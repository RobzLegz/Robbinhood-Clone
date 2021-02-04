import React from 'react';
import "./App.css";
import Header from './Header';
import NewsFeed from './NewsFeed';
import Stats from './Stats';

const App = () => {
  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="bodyContainer">
        <div className="appContainer">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  )
}

export default App
