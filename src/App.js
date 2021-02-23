import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import './App.css'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],
    shelfs: [
      {shelf: 'currentlyReading',shelfTitle: 'Currently Reading'},
      {shelf: 'wantToRead',shelfTitle: 'Want To Read'},
      {shelf:'read',shelfTitle: 'Read'}
    ],
    currentlyReading : [],
    wantToRead : [],
    read: [],
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll()
            .then((books) => {
              this.setState(()=> ({
                currentlyReading: books.filter((book)=>
                book.shelf === 'currentlyReading'),
                wantToRead: books.filter((book) => 
                 book.shelf ==='wantToRead'),
                 read: books.filter((book) => 
                 book.shelf === 'read')
              }))
            })
  }

  render() {
    console.log(this.state.currentlyReading);
    console.log(this.state.wantToRead);
    console.log(this.state.read);
    
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                { this.state.shelfs.map((element) =>
                  (
                   <BookShelf title={element.shelfTitle} books={this.state[element.shelf]}/>
                ))
                }
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>   
      </div>
    )
  }
}

export default BooksApp
