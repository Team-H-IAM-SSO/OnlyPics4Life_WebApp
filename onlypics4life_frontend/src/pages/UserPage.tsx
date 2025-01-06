import React, { useState } from "react";
import "./UserPage.css";

function UserPage() {
    const [code, setCode] = useState("");
    const [albums, setAlbums] = useState<{ title: string; description: string }[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Defineer validCodes met een expliciet type
    const validCodes: Record<string, { title: string; description: string }> = {
        AB123: { title: "Vacation 2023", description: "Photos from our summer trip." },
        XY456: { title: "Wedding Album", description: "Photos from the wedding event." },
    };

    const handleCodeSubmit = () => {
        if (validCodes[code]) {
            setAlbums([...albums, validCodes[code]]);
            setCode("");
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid code. Please try again.");
        }
    };

    return (
        <div className="user-page">
            <header>
                <h1>Welcome, [User Name]</h1>
                <p>Enter your access code to view albums shared with you.</p>
            </header>

            <section className="code-section">
                <input
                    type="text"
                    placeholder="Enter album code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="code-input"
                />
                <button onClick={handleCodeSubmit} className="code-submit-btn">
                    Submit Code
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </section>

            <section className="album-overview">
                <h2>Your Albums</h2>
                {albums.length === 0 ? (
                    <p>No albums added yet. Enter a code to access an album.</p>
                ) : (
                    <ul className="album-list">
                        {albums.map((album, index) => (
                            <li key={index} className="album-item">
                                <h3>{album.title}</h3>
                                <p>{album.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default UserPage;
