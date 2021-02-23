import React, {Component} from 'react';
import Book from './Book'

class BookShelf extends Component {
    render(){
        const {title,books} = this.props;
        console.log(title+' '+typeof(books));
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((element) => (
                            <li>
                                <Book url={element.previewLink} title = {element.title} authors={element.authors}/>
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