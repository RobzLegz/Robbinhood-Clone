import React from 'react';
import logo from "./resources/robinhoodfeather.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLogo">
                <img src={logo} width={25} alt=""/>
            </div>
            <div className="headerSearch">
                <div className="searchContainer">
                    
                </div>
            </div>
        </div>
    )
}

export default Header
