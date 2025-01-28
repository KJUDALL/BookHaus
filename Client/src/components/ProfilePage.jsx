import { useEffect, useState } from 'react';
import { getUserProfile } from '../utils/localstorage.js';          //Modifications here: AJ

function ProfilePage() {
  const [shelves, setShelves] = useState({
    currentlyReading: [],
    wishlist: [],
    completed: [],
    recommended: []
  });

  useEffect(() => {
    const userProfile = getUserProfile();
    if (userProfile) {
      fetch(`/api/user/shelves?userId=${userProfile.id}`)
        .then(response => response.json())
        .then(data => setShelves(data))
        .catch(error => console.error('Error fetching shelves:', error));
  }
}, []);                                                                           //Modifications here: AJ

  return (
    <div className="profile-page">
      <h1>Welcome to your Book Shelf!</h1>
      <div className="shelves">
        <h2>Currently Reading</h2>
        {shelves.currentlyReading.length > 0 ? (
          shelves.currentlyReading.map((book, index) => <p key={index}>{book.title}</p>)
        ) : (
          <p>No books yet!</p>
        )}

        <h2>Wishlist</h2>
        {shelves.wishlist.length > 0 ? (
          shelves.wishlist.map((book, index) => <p key={index}>{book.title}</p>)
        ) : (
          <p>No books added yet!</p>
        )}

        <h2>Completed</h2>
        {shelves.completed.length > 0 ? (
          shelves.completed.map((book, index) => <p key={index}>{book.title}</p>)
        ) : (
          <p>No books marked as completed yet!</p>
        )}

        <h2>Recommendations</h2>
        {shelves.recommended.length > 0 ? (
          shelves.recommended.map((book, index) => <p key={index}>{book.title}</p>)
        ) : (
          <p>Share books you love here.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;