import React, {Component} from 'react';
import Book from './Book'

class BookShelf extends Component {
    render(){
        const {title,books,updateShelf} = this.props;
        console.log(books[0]);
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((element) => (
                            <li key={element.id}>
                                <Book book={element} updateShelf={updateShelf}/>
                            </li>
                        ))
                    }
                </ol>
                </div>
                 
            </div>
        );
    }
}

export default BookShelf;