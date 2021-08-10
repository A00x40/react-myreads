import React from 'react'
import {
    Route
} from "react-router-dom";

import MyReads from '../components/Main/MyReads'
import Search from '../components/Search/Search'

/**
 * 
 * @param {*} props Inherits passed state and functions from app.js
 * @returns         A Component that handles routes
 */
const Routes = (props) => (
    <>
        <Route exact path="/" render={() => ( 
            <MyReads state={props.state} moveBook={props.moveBook} />
        )} />

        <Route exact path="/search" render={() => ( 
            <Search state={props.state} moveBook={props.moveBook} search={props.search} />
        )} />
    </>
);
  
export default Routes;