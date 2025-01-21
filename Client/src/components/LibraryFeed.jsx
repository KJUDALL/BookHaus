import React, { useEffect, useState } from 'react';

function LibraryFeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/api/library-feed')
      .then(response => response.json())
      .then(data => setFeed(data))
      .catch(error => console.error('Error fetching library feed:', error));
  }, []);

  return (
    <div className="library-feed">
      <h1>Library Feed</h1>
      {feed.length > 0 ? (
        feed.map((post, index) => (
          <div key={index} className="feed-post">
            <h3>{post.user}</h3>
            <p>{post.activity}</p>
          </div>
        ))
      ) : (
        <p>Nothing gping on here...for now!</p>
      )}
    </div>
  );
}

export default LibraryFeed;