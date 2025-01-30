import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { saveUserProfile } from '../utils/localstorage.js';
import "./LoginPage.css"; // Make sure to import the updated CSS file

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [buttonClass, setButtonClass] = useState(""); // State to manage button class
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async () => {
		if (!email || !password) {
			setError("Please enter both email and password.");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				// Assuming the server returns a JWT token on successful login
				localStorage.setItem("token", data.token); // Save the token in localStorage
				setButtonClass("sparkly"); // Add the sparkly effect class to the button

				// Navigate to profile after a short delay to allow animation
				setTimeout(() => {
					navigate("/profile");
				}, 1500); // Delay to let the sparkly animation run
			} else {
				setError(
					data.message || "Invalid email or password. Please try again."
				);
			}
		} catch (err) {
			setError("An error occurred. Please try again later.", err);
		}
	};

	return (
		<div className='login-page'>
			<h1>Login</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div className='login-form'>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					onClick={handleLogin}
					className={buttonClass} // Apply the sparkly effect class here
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default LoginPage;
