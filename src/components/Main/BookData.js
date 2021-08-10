import React , { useState , useEffect } from 'react';

export default function BookData(props) {

    const moveBook = props.moveBook;
    const [state, setstate] = useState( {
        book : {}
    });

    let authors = "";

    if( state.book ) {

        for( let author in state.book.authors )
            authors += author + " ";
    }
    
    /**
     *  Watch For changes in App state to change displayed books
     */
    useEffect(() => {
        setstate( () => ({
            book : props.book
        }));
        
    } , [props.book] );

    return (
        Object.keys(state.book).length !== 0 &&
        <li key={state.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width : 128 , height : 192 , backgroundImage : `url(${state.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={state.book.shelf} onChange={ (e) => moveBook( state.book , e.target.value )}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title"> { state.book.title } </div>
                <div className="book-authors"> { authors } </div>
            </div>
        </li> 
    )
}
