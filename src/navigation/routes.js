import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import MyReads from '../components/Main/MyReads'
import Search from '../components/Search/Search'

const Routes = () => (
    <Router>
        <Route exact path="/main" component={MyReads} />
        <Route exact path="/" >
            <Redirect to="/main" />
        </Route>
        <Route exact path="/search" component={Search} />
    </Router>    
);
  
export default Routes;