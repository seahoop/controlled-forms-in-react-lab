// src/App.jsx
import './App.css';
import Bookshelf from './component/Bookshelf.jsx';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // Step 1: Define the handleInputChange function
  const handleInputChange = (event) => {
    // Step 2: Access the name and value from the event object
    const { name, value } = event.target;

    // Step 3: Construct a new version of newBook
    setNewBook((prevNewBook) => ({
      ...prevNewBook,  // Maintain the other fields
      [name]: value,   // Update the field that triggered the change
    }));
  };

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf
        books={books}
        newBook={newBook}
        handleInputChange={handleInputChange}  // Pass the function as a prop
        setBooks={setBooks}
      />
    </>
  );
};

export default App;
