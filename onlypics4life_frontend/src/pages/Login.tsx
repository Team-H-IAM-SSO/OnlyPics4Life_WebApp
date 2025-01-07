import React, { useState } from "react";
import "./Login.css";
import photoGuy from '../assets/stock-guy.jpg';

function Login() {
    const [view, setView] = useState<"login" | "id">("login");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(password.trim() !== "" && username.trim() !== "") {
            fetch('/login-user', {
                method: 'GET',
                headers: {
                    'username': username,
                    'password': password
                }
            }).then(response => {
                response.json().then(data => {
                    if(data.login) {
                        alert('Login valid !');
                    } else {
                        alert('Login Invalid !');
                    }
                });
            }).catch(console.error);
        }
    };

    const handleIdSubmit = () => {
        alert("ID submitted!");
    };

    return (
        <div className="login-page">
            <div className="login-container-wrapper">
                {view === "login" ? (
                    <div className="login-container">
                        <h1>Login</h1>
                        <p>Sign in with your credentials</p>
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin} className="login-btn" disabled={password.length === 0 || username.length === 0}>
                            Login
                        </button>
                    </div>
                ) : (
                    <div className="id-container">
                        <h1>ID Login</h1>
                        <p>Enter your unique ID</p>
                        <input
                            type="text"
                            placeholder="Enter ID"
                            className="id-input"
                        />
                        <button onClick={handleIdSubmit} className="id-btn">
                            Submit ID
                        </button>
                    </div>
                )}

                <div className="switch-btn-wrapper">
                    <p className="switch-btn-text">
                        {view === "login"
                            ? "Want to log in with your ID? Click the button below."
                            : "Want to go back to normal login? Click the button below."}
                    </p>
                    <button
                        className="switch-btn"
                        onClick={() => setView(view === "login" ? "id" : "login")}
                    >
                        {view === "login" ? "Switch to ID Login" : "Back to Login"}
                    </button>
                </div>
            </div>
            <div className="image-container">
                <img
                    src={photoGuy}
                    alt="The one piece is real"
                    className="background-image"
                />
            </div>
        </div>
    );
}

export default Login;
