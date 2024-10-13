import React from 'react';

const BookCard = ({ book }) => {
  const { title, authors, publishedDate, imageLinks } = book.volumeInfo;

  return (
    <div className="book-card">
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
      <h2>{title}</h2>
      {authors && <p>Author(s): {authors.join(', ')}</p>}
      {publishedDate && <p>Published: {publishedDate}</p>}
    </div>
  );
};

export default BookCard;
