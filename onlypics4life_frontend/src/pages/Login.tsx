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
            <div className="login-container-wrapper">
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
                    src="/depositphotos_114077612-stock-photo-happy-funny-male-photographer-in.jpg"
                    alt="The one piece is real"
                    className="background-image"
                />
            </div>
        </div>
    );
}

export default Login;
