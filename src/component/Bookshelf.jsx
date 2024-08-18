// src/components/Bookshelf.jsx
import React from 'react';

const Bookshelf = ({ books, newBook, handleInputChange, setBooks }) => {
  const addBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          placeholder="Author"
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
