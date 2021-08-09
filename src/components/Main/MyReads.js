import React , { useState , useEffect } from 'react'
import {  useHistory  } from 'react-router-dom'

export default function MyReads(props) {

    const moveBook = props.moveBook;

    const [state, setstate] = useState( {
        Books : []
    });

    let history = useHistory();
    
    useEffect(() => {
        setstate( () => ({
            Books : props.state.Books
        }));
        
    } , [props.state] );

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        state.Books.map( (Book) => {
                            var authors = "";
                            for( let author of Book.authors )
                                authors += author + " ";
                            return (
                                Book.shelf === "currentlyReading" &&
                                <li key={Book.title}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width : 128 , height : 192 , backgroundImage : `url(${Book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={ (e) => moveBook( Book.id , e.target.value )}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading" >Currently Reading</option>
                                                    <option value="wantToRead" >Want to Read</option>
                                                    <option value="read" >Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title"> { Book.title } </div>
                                        <div className="book-authors"> { authors } </div>
                                    </div>
                                </li> 
                            )
                        })
                    }
                    </ol>
                    </div>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        state.Books.map( (Book) => {
                            var authors = "";
                            for( let author of Book.authors )
                                authors += author + " ";
                            
                            return (
                                Book.shelf === "wantToRead" &&
                                <li key={Book.title}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width : 128 , height : 192 , backgroundImage : `url(${Book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={ (e) => moveBook( Book.id , e.target.value )}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title"> { Book.title } </div>
                                        <div className="book-authors"> { authors } </div>
                                    </div>
                                </li>
                            )
                        })
                    }  
                    </ol>
                    </div>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
    
                    {
                        state.Books.map( (Book) => {
                            var authors = "";
                            for( let author of Book.authors )
                                authors += author + " ";
                            
                            return (
                                Book.shelf === "read" &&
                                <li key={Book.title}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width : 128 , height : 192 , backgroundImage : `url(${Book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={ (e) => moveBook( Book.id , e.target.value )}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="read">Read</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                            </div>
                                        <div className="book-title"> { Book.title } </div>
                                        <div className="book-authors"> { authors } </div>
                                    </div>
                                </li>
                            )
                        })
                    }  
                    </ol>
                    </div>
                </div>
            </div>
            </div>
            <div className="open-search">
                <button onClick={ () => history.push("/search") } >Add a book</button>
            </div>
        </div>
    );    
}   
