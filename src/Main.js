import React from 'react';
import Navbar from  "./Navbar.js"
import Body from "./Body.js"
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
        <Navbar/> 
        <Body/>
        </div>
    );
};

export default Main;