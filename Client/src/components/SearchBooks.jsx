// client/src/components/SearchBooks.jsx
import React, { useState } from 'react';

function SearchBooks() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setBooks(data.items); // Set the books data from the API response
        } else {
          setBooks([]); // Handle no results
        }
      })
      .catch((error) => console.error('Error fetching books:', error));
  };

  return (
    <div className="search-books">
      <h1>Search Books</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="book-results">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>By: {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`${book.volumeInfo.title} cover`}
              />
            )}
            <p>{book.volumeInfo.description?.substring(0, 100) || 'No description available'}...</p>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBooks;
