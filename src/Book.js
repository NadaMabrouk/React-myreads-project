import React, {Component} from "react";
import BooksApp from "./App";
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

render(){
    const {book,updateShelf} = this.props;
    const url = book.imageLinks.smallThumbnail;
    
    return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <BookShelfChanger book={book} updateShelf={updateShelf}/>
          </div>
            <div className="book-title">{book.title}</div>
            {book.author && 
            <div className="book-authors">
                { book.authors.length === 1 ? book.authors[0] : book.authors.map(author => <span key={author}>{author},</span>)}
                </div>}
        </div>
        );
    
}
}

export default Book;