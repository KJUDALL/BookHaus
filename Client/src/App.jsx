import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import Recommendations from './components/Recommendations';
import LibraryFeed from './components/LibraryFeed';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/library-feed" element={<LibraryFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;