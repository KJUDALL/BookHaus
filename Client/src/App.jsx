import Navbar from './components/NavBar';
import SearchBooks from './components/SearchBooks';
import ProfilePage from './components/ProfilePage';
import Recommendations from './components/Recommendations';
import LibraryFeed from './components/LibraryFeed';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/library-feed" element={<LibraryFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
