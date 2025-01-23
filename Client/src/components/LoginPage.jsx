import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setIsLoggedIn(true);
      navigate('/profile'); // Redirect to profile if already logged in
    }
  }, [navigate]);

  const handleLogin = () => {
    if (email && password) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
      alert('Logged in successfully!');
      navigate('/profile'); // Redirect to profile after login
    } else {
      alert('Please enter both email and password!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    if (email && password) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Signed up successfully! Please log in.');
    } else {
      alert('Please enter both email and password to sign up!');
    }
  };

  return (
    <div className="login-page">
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Login or Sign Up'}</h1>
      {!isLoggedIn ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Sign Up</button>
        </>
      ) : (
        <>
          <p>You are logged in as {JSON.parse(localStorage.getItem('user')).email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default LoginPage;