import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate("/login"); 
    };

    return (
        <div className="home-page">
            <div className="logo-container">
                {/* Logo bovenaan */}
                <img
                    src="/Onlypics4life.png"
                    alt="OnlyPics4Life Logo"
                    className="app-logo"
                />
            </div>
            <header>
                <h1>
                    Welcome to <span className="app-name">OnlyPics4Life</span>
                </h1>
                <p>Your secure solution for sharing and managing photos.</p>
            </header>
            <div className="button-section">
                <button onClick={handleGoToLogin} className="go-to-login-btn">
                    Go to Login
                </button>
            </div>
        </div>
    );
}

export default App;