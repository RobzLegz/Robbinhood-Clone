import React from 'react';
import "./App.css";
import Header from './Header';

const App = () => {
  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="bodyContainer">
        <div className="appContainer"></div>
      </div>
    </div>
  )
}

export default App
