import React , { useState , useEffect } from 'react'
import {  useHistory  } from 'react-router-dom'
import nothumbnail from '../../icons/nothumbnail.jpg'

/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_T

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/

export default function Search(props) {

    const moveBook = props.moveBook;
    const search = props.search;

    const [state, setstate] = useState( {
        booksSearched : [] , 
        Books : []
    });

    let history = useHistory();
    
    useEffect(() => {
        setstate( (prevState) => ({
            booksSearched : prevState.booksSearched ,
            Books : props.Books
        }));
        
    } , [props.state] );

    const handleChange = (e) => {

        search(e.target.value).then( Books => {

            if( Books ) {
                setstate( () => ({
                    booksSearched : Books
                }) );
            } else {
                setstate( () => ({
                    booksSearched : []
                }) );
            }
        })

    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={ () => history.push("/") }>Close</button>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(e) => handleChange(e)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {
                    
                        state.booksSearched.length > 0 && state.booksSearched.map( (Book) => {
                            let authors = "";

                            for( let author in Book['authors'] )
                                authors += author + " ";

                            let Img = '';
                            if(!Book.imageLinks) Img = `url(${nothumbnail})`;
                            else
                                Img = `url(${Book.imageLinks.thumbnail})`;
                            
                            return (
                                <li key={Book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width : 128 , height : 192 , backgroundImage : Img }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={ (e) => moveBook( Book , e.target.value )}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="none">None</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    
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
    );
}
