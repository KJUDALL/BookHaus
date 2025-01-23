// client/src/components/SearchBooks.jsx
import { useState } from 'react';

function SearchBooks() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Wishlist state

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

  const addToWishlist = (book) => {
    // Avoid duplicate entries in the wishlist
    if (!wishlist.find((item) => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
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
            <button onClick={() => addToWishlist(book)}>Add to Wishlist</button>
          </div>
        ))}
      </div>

      <div className="wishlist">
        <h2>Your Wishlist</h2>
        {wishlist.length > 0 ? (
          wishlist.map((book) => (
            <div key={book.id} className="wishlist-item">
              <h4>{book.volumeInfo.title}</h4>
              <p>By: {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
}

export default SearchBooks;
