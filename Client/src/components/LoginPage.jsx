import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserProfile } from '../utils/localstorage.js';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert('Login successful!');
      navigate('/profile');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-form">
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
      </div>
    </div>
  );
}

export default LoginPage;