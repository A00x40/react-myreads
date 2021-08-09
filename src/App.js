import React , { Component } from 'react'
import Routes from './navigation/routes'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Books : [
                
            ] 
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then( Books => {
            this.setState( () => ({
                Books 
            }) );
        } )

    }

    moveBook( id , ToShelf ) {
        BooksAPI.get(id).then( Book => {
            BooksAPI.update( Book , ToShelf ).then(() => {
                window.location.reload();
            } );
        });
    }

    render() {
        return (
            <div className="app">
                <Routes state={this.state} moveBook={ (id , ToShelf) => this.moveBook(id , ToShelf)} />
            </div>
        )
    }
}

export default BooksApp
