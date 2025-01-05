import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <p>Sign in with your credentials</p>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-btn">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
