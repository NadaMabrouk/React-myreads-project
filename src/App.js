import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelfs from './ListShelfs'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
  }
  componentDidMount(){
    BooksAPI.getAll()
            .then((books) => {
              this.setState(()=> ({
                books: books
              }))
            })
  }
  
  updateShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);
    if(shelf === 'none'){
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id)
      }))
    }else{
      book.shelf = shelf;
      this.setState((prevState)=> ({
        books: prevState.books.filter((b) => b.id !== book.id).concat(book)
      }))
    }
  }
  render() {
    return (
      <div className="app">
          <div className="list-books">
            <Route exact path='/' render={() => (
              <div>
                <div className="list-books-title">
                  <h1>MyReads Tracking App</h1>
                </div>
                <ListShelfs books={this.state.books} updateShelf={this.updateShelf}/>
              </div>
      )}/>
            <Route path='/searchBooks' render={() => (
              <SearchBooks shelfBooks={this.state.books} updateShelf={this.updateShelf}/>
            )}/>
          </div>   
      </div>
    )
  }
}

export default BooksApp
