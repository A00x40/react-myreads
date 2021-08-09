import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import MyReads from '../components/Main/MyReads'
import Search from '../components/Search/Search'

const Routes = (props) => (
    
    <Router>
        <Route exact path="/" render={() => ( 
            <MyReads state={props.state} moveBook={props.moveBook} />
        )} />

        <Route exact path="/search" render={() => ( 
            <Search state={props.state}  />
        )} />

    </Router>    
);
  
export default Routes;