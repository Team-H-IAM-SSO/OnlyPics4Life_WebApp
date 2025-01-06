import React, { useState } from "react";
import "./PhotographerPage.css";

function PhotographerPage() {
    const [albums, setAlbums] = useState<
        { title: string; description: string; code?: string; photos: string[] }[]
    >([]);
    const [newAlbumTitle, setNewAlbumTitle] = useState("");
    const [newAlbumDescription, setNewAlbumDescription] = useState("");
    const [showAddAlbumForm, setShowAddAlbumForm] = useState(false);

    const handleAddAlbum = () => {
        if (newAlbumTitle.trim()) {
            setAlbums([
                ...albums,
                { title: newAlbumTitle, description: newAlbumDescription, photos: [] },
            ]);
            setNewAlbumTitle("");
            setNewAlbumDescription("");
            setShowAddAlbumForm(false);
        } else {
            alert("Please enter a title for the album.");
        }
    };

    const handleGenerateCode = (index: number) => {
        const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const updatedAlbums = [...albums];
        updatedAlbums[index].code = newCode;
        setAlbums(updatedAlbums);
    };

    const handleUploadPhoto = (index: number, photo: string) => {
        const updatedAlbums = [...albums];
        updatedAlbums[index].photos.push(photo);
        setAlbums(updatedAlbums);
    };

    return (
        <div className="photographer-page">
            {/* Header Section */}
            <header>
                <h1>Welcome, [Photographer Name]</h1>
                <p>Manage your albums and generate access codes for users.</p>
            </header>

            {/* Album Overview */}
            <section className="album-overview">
                <h2>Your Albums</h2>
                {albums.length === 0 ? (
                    <p>No albums created yet. Click the "+" button to add one!</p>
                ) : (
                    <ul className="album-list">
                        {albums.map((album, index) => (
                            <li key={index} className="album-item">
                                <h3>{album.title}</h3>
                                <p>{album.description}</p>
                                {album.code ? (
                                    <p className="album-code">
                                        Access Code: <strong>{album.code}</strong>
                                    </p>
                                ) : (
                                    <button
                                        onClick={() => handleGenerateCode(index)}
                                        className="generate-code-btn"
                                        disabled={!!album.code}
                                    >
                                        Generate Code
                                    </button>
                                )}
                                <div className="upload-photo-section">
                                    <h4>Photos:</h4>
                                    {album.photos.length === 0 ? (
                                        <p>No photos uploaded yet.</p>
                                    ) : (
                                        <ul className="photo-list">
                                            {album.photos.map((photo, photoIndex) => (
                                                <li key={photoIndex}>{photo}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <button
                                        className="upload-photo-btn"
                                        onClick={() =>
                                            handleUploadPhoto(index, `Photo_${Date.now()}`)
                                        }
                                    >
                                        Upload Photo
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {!showAddAlbumForm && (
                    <button
                        className="add-album-btn"
                        onClick={() => setShowAddAlbumForm(true)}
                    >
                        + Add New Album
                    </button>
                )}
            </section>

            {/* New Album Form */}
            {showAddAlbumForm && (
                <div className={`add-album-form ${showAddAlbumForm ? "active" : ""}`}>
                    <h3>Create a New Album</h3>
                    <input
                        type="text"
                        placeholder="Album Title"
                        value={newAlbumTitle}
                        onChange={(e) => setNewAlbumTitle(e.target.value)}
                        className="album-input"
                    />
                    <textarea
                        placeholder="Album Description"
                        value={newAlbumDescription}
                        onChange={(e) => setNewAlbumDescription(e.target.value)}
                        className="album-textarea"
                    ></textarea>
                    <div className="form-actions">
                        <button onClick={handleAddAlbum} className="save-btn">
                            Save
                        </button>
                        <button
                            onClick={() => setShowAddAlbumForm(false)}
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotographerPage;
