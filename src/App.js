import React , { Component } from 'react'
import Routes from './navigation/routes'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books : [
                
            ] 
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then( books => {
            this.setState( () => ({
                books 
            }) );
        } )
    }

    /**
     * 
     * @param book    : The Selected book
     * @param toShelf : Shelf To move the book ( currentlyReading , wantingToRead , read , none )
     */
    moveBook( book , toShelf ) {

        BooksAPI.update( book , toShelf ).then( () => {
            book.shelf = toShelf;
            this.setState( (prevState) => ({
                books: prevState.books.filter(b => b.id !== book.id).concat([ book ])
            }))
        })
    }

    render() {
        return (
            <div className="app">
                <Routes state={this.state} moveBook={ (id , toShelf) => this.moveBook(id , toShelf)} search={BooksAPI.search} />
            </div>
        )
    }
}

export default BooksApp
