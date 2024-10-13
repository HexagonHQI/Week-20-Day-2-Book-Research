import React, { useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

const Book = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async (term) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`);
    setBooks(response.data.items || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a book"
        />
        <button type="submit">Search</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default Book;
