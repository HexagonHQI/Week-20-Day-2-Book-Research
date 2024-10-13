import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  const sortedBooks = books.sort((a, b) => {
    return new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate);
  });

  return (
    <div className="book-list">
      {sortedBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
