import React , { useState , useEffect } from 'react'
import {  useHistory  } from 'react-router-dom'
import BookData from './BookData'
import NavBar from '../Nav/NavBar'

export default function MyReads(props) {

    const moveBook = props.moveBook;

    const [state, setstate] = useState( {
        books : []
    });

    let history = useHistory();
    
    /**
     *  Watch For changes in App state to change displayed books
     */
    useEffect(() => {
        setstate( () => ({
            books : props.state.books
        }));
        
    } , [props.state.books] );

    const scrollToSection = (e) => {
        let sec = document.getElementsByClassName(e.target.value)[0];
        sec.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <NavBar scroll={ (e) => scrollToSection(e) } />

            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title sec1">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        state.books.map( (book) => {
                            return (
                                book.shelf === "currentlyReading" && <BookData key={book.id} book={book} moveBook={moveBook}  />
                            )
                        })
                    }
                    </ol>
                    </div>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title sec2">Want to Read</h2>
                    <button value="sec0" className="scroll-top" onClick={ (e) => {scrollToSection(e)} }>Top</button>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        state.books.map( (book) => {
                            return (
                                book.shelf === "wantToRead" && <BookData key={book.id} book={book} moveBook={moveBook} />
                            )
                        })
                    }
                    </ol>
                    </div>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title sec3">Read</h2>
                    <button value="sec0" className="scroll-top" onClick={ (e) => {scrollToSection(e)} }>Top</button>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        state.books.map( (book) => {
                            return (
                                book.shelf === "read" && <BookData key={book.id} book={book} moveBook={moveBook} />
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
