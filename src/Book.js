import React, {Component} from "react";

class Book extends Component {

render(){
    const {url,title,authors} = this.props;
    console.log(url);
    return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
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
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.length === 1 ? authors[0] : authors.map(author => <span>{author},</span>)}</div>
        </div>
        );
    
}
}

export default Book;