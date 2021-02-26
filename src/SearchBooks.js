import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            searchResults: []
        }
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }
    
    handleSearchQuery = (val) => {
        this.setState(() => ({
            query : val
        }))
        this.searchBooksAPI(this.state.query);
    }
    searchBooksAPI = (query) => {
        BooksAPI.search(this.state.query).then(
            (books) => {
           this.setState({searchResults: books})
         })
    }
    render(){
        const {shelfBooks,updateShelf} = this.props;
        const booksToDisplay = this.state.query.length > 0 ? this.state.searchResults : [];
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link> 
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={(e) => this.handleSearchQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {booksToDisplay && booksToDisplay !== undefined &&    
                    booksToDisplay.map((book) => {
                        let curBook = shelfBooks.find( ele => ele.id === book.id );
                        book.shelf = curBook ? curBook.shelf : 'none';
                        return (
                        <Book key= {book.id} book={book} updateShelf={updateShelf}/>
                        )
                    })
                } 
              </ol>
            </div>
          </div>
        );
    }
}
export default SearchBooks;