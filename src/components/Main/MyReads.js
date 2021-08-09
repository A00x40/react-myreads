import React , { useState , useEffect } from 'react';

export default function MyReads(props) {

    const [state, setstate] = useState( {
        CurentlyReading : [] ,
        WantingToRead : [] ,
        AlreadyRead : []
    });
    
    useEffect(() => {
        setstate( () => ({
            CurentlyReading : props.state.CurrentlyReading ,
            WantingToRead : props.state.WantingToRead ,
            AlreadyRead : props.state.AlreadyRead
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
                        state.CurentlyReading.length === 0 &&
                        <h1>Not reading currently</h1> 
                    }    
                    {
                        state.CurentlyReading.map( (Book) => {
                            return (
                                <li key={Book.title}>
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width : Book.style.width , height : Book.style.height , backgroundImage : Book.style.image }}></div>
                                      <div className="book-shelf-changer">
                                        <select>
                                          <option value="move" disabled>Move to...</option>
                                          <option value="currentlyReading">Currently Reading</option>
                                          <option value="wantToRead">Want to Read</option>
                                          <option value="read">Read</option>
                                          <option value="none">None</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="book-title"> { Book.title } </div>
                                    <div className="book-authors"> { Book.author } </div>
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
                        state.WantingToRead.length === 0 &&
                        <h1>Currently no Books in interest</h1> 
                    }    
                    {
                        state.WantingToRead.map( (Book) => {
                            return (
                                <li>
                                    <div className="book">
                                      <div className="book-top">
                                        <div className="book-cover" style={{ width : Book.style.width , height : Book.style.height , backgroundImage : Book.style.image }}></div>
                                        <div className="book-shelf-changer">
                                          <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="book-title"> { Book.title } </div>
                                      <div className="book-authors"> { Book.author } </div>
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
                        state.AlreadyRead.length === 0 &&
                        <h1>No Books Read</h1> 
                    }    
                    {
                        state.AlreadyRead.map( (Book) => {
                            return (
                                <li>
                                    <div className="book">
                                      <div className="book-top">
                                        <div className="book-cover" style={{ width : Book.style.width , height : Book.style.height , backgroundImage : Book.style.image }}></div>
                                        <div className="book-shelf-changer">
                                          <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="book-title"> { Book.title } </div>
                                      <div className="book-authors"> { Book.author } </div>
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
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
    );    
}   
