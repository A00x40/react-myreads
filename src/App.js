import React , { Component } from 'react'
import Routes from './navigation/routes'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
    render() {
        return (
            <div className="app">
                <Routes />
            </div>
        )
    }
}

export default BooksApp
