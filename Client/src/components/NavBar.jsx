import { Link } from 'react-router-dom';

function Navbar() {
return (
    <nav className="navbar">
        <h1>BookHaus</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Your Shelf</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
            <li><Link to="/library-feed">Library Feed</Link></li>
            <li><Link to="/login">Login Page</Link></li>
        </ul>
    </nav>
);
}

export default Navbar;