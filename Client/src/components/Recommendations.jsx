import { useEffect, useState } from 'react';

function Recommendations() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    fetch('/api/recommendations')
      .then(response => response.json())
      .then(data => setRecommendedBooks(data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, []);

  return (
    <div className="recommendations">
      <h1>Recommendations</h1>
      {recommendedBooks.length > 0 ? (
        recommendedBooks.map((book, index) => (
          <p key={index}>{book.title}</p>
        ))
      ) : (
        <p>Still looking for the next good book!</p>
      )}
    </div>
  );
}

export default Recommendations;