import React from 'react';
import logo from "./resources/robinhoodfeather.svg";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLogo">
                <img src={logo} width={25} alt=""/>
            </div>
            <div className="headerSearch">
                <div className="searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="search"/>
                </div>
            </div>
            <div className="headerMenuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    );
}

export default Header;
