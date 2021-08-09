import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import MyReads from '../components/Main/MyReads'
import Search from '../components/Search/Search'

const Routes = (props) => (
    <Router>
        <Route exact path="/main" render={() => ( 
            <MyReads state={props.state} />
        )} />
        <Route exact path="/" >
            <Redirect to="/main" />
        </Route>
        <Route exact path="/search" component={Search} />
    </Router>    
);
  
export default Routes;