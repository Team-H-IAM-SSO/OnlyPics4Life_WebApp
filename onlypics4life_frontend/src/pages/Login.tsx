import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [view, setView] = useState<"login" | "id">("login");

    const handleLogin = () => {
        alert("Login submitted!");
    };

    const handleIdSubmit = () => {
        alert("ID submitted!");
    };

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <button
                    className="switch-btn"
                    onClick={() => setView(view === "login" ? "id" : "login")}
                >
                    {view === "login" ? "ID" : "Login"}
                </button>

                {view === "login" ? (
                    <div className="login-container">
                        <h1>Login</h1>
                        <p>Sign in with your credentials</p>
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                        />
                        <button onClick={handleLogin} className="login-btn">
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
            </div>
        </div>
    );
}

export default Login;
