import React, { useState } from "react";
import "./App.css";

function App() {
    const [input, setInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        alert(`You entered: ${input}`);
    };

    return (
        <div className="home-page">
            <header>
                <h1>Welcome to <span className="app-name">OnlyPics4Life</span></h1>
                <p>Your secure solution for sharing and managing photos.</p>
            </header>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter something..."
                    value={input}
                    onChange={handleInputChange}
                    className="input-box"
                />
                <button onClick={handleSubmit} className="submit-btn">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default App;