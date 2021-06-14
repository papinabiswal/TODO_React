import React from 'react';
import Navbar from  "./Navbar.js"
import "./Main.css"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <Router>
               <Navbar/> 
                  <Switch>
                      <Route path='/' />
                  </Switch>
            </Router>
        </div>
    );
};

export default Main;