import React, {useState} from 'react';
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';

import {Sidebardata} from './Sidebardata';
import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className = "navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick ={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick ={showSidebar}>
            <ul className='nav-menu-items'>
               <li className="navbar-toggle" >
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
               </li>
               {Sidebardata.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}> 
                            <Link  to={item.path}>
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
               })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;