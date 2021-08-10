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

    componentDidUpdate() {
        BooksAPI.getAll().then( Books => {
            this.setState( () => ({
                Books 
            }) );
        } )
    }

    /**
     * 
     * @param Book    : The Selected Book
     * @param ToShelf : Shelf To move the book ( currentlyReading , wantingToRead , read , none )
     */
    moveBook( Book , ToShelf ) {
        
        let BookIndex = this.state.Books.findIndex( b => b.id === Book.id );
        

        if( BookIndex === -1 ) {
            if( !Book.shelf ) {
                Book.shelf = ToShelf;
            }
        }

        BooksAPI.update( Book , ToShelf );
    }

    render() {
        return (
            <div className="app">
                <Routes state={this.state} moveBook={ (id , ToShelf) => this.moveBook(id , ToShelf)} search={BooksAPI.search} />
            </div>
        )
    }
}

export default BooksApp
