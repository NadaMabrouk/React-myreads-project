import React,{Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class ListShelfs extends Component {
    
    render(){
        const {books,updateShelf} = this.props;
        const currentlyReading = books.filter((book)=>
                        book.shelf === 'currentlyReading');
        const wantToRead = books.filter((book) => 
        book.shelf ==='wantToRead');

        const read = books.filter((book) => 
        book.shelf === 'read');

        return (
            <div>
            <div className="list-books-content">
              <div> 
                  <BookShelf title={'Currently Reading'} books={currentlyReading} updateShelf={updateShelf}/>
                  <BookShelf title={'Want To Read'} books={wantToRead} updateShelf={updateShelf}/>
                  <BookShelf title={'Read'} books={read} updateShelf={updateShelf}/>     
              </div>
            </div>
            <Link to='/searchBooks' className="open-search">Add a book</Link>
            </div>
        )
    }
}

export default ListShelfs;