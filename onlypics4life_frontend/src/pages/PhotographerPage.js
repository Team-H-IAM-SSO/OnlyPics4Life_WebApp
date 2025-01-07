import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./PhotographerPage.css";
function PhotographerPage() {
    const [albums, setAlbums] = useState([]);
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
        }
        else {
            alert("Please enter a title for the album.");
        }
    };
    const handleGenerateCode = (index) => {
        const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const updatedAlbums = [...albums];
        updatedAlbums[index].code = newCode;
        setAlbums(updatedAlbums);
    };
    const handleUploadPhoto = (index, photo) => {
        const updatedAlbums = [...albums];
        updatedAlbums[index].photos.push(photo);
        setAlbums(updatedAlbums);
    };
    return (_jsxs("div", { className: "photographer-page", children: [_jsxs("header", { children: [_jsx("h1", { children: "Welcome, [Photographer Name]" }), _jsx("p", { children: "Manage your albums and generate access codes for users." })] }), _jsxs("section", { className: "album-overview", children: [_jsx("h2", { children: "Your Albums" }), albums.length === 0 ? (_jsx("p", { children: "No albums created yet. Click the \"+\" button to add one!" })) : (_jsx("ul", { className: "album-list", children: albums.map((album, index) => (_jsxs("li", { className: "album-item", children: [_jsx("h3", { children: album.title }), _jsx("p", { children: album.description }), album.code ? (_jsxs("p", { className: "album-code", children: ["Access Code: ", _jsx("strong", { children: album.code })] })) : (_jsx("button", { onClick: () => handleGenerateCode(index), className: "generate-code-btn", disabled: !!album.code, children: "Generate Code" })), _jsxs("div", { className: "upload-photo-section", children: [_jsx("h4", { children: "Photos:" }), album.photos.length === 0 ? (_jsx("p", { children: "No photos uploaded yet." })) : (_jsx("ul", { className: "photo-list", children: album.photos.map((photo, photoIndex) => (_jsx("li", { children: photo }, photoIndex))) })), _jsx("button", { className: "upload-photo-btn", onClick: () => handleUploadPhoto(index, `Photo_${Date.now()}`), children: "Upload Photo" })] })] }, index))) })), !showAddAlbumForm && (_jsx("button", { className: "add-album-btn", onClick: () => setShowAddAlbumForm(true), children: "+ Add New Album" }))] }), showAddAlbumForm && (_jsxs("div", { className: `add-album-form ${showAddAlbumForm ? "active" : ""}`, children: [_jsx("h3", { children: "Create a New Album" }), _jsx("input", { type: "text", placeholder: "Album Title", value: newAlbumTitle, onChange: (e) => setNewAlbumTitle(e.target.value), className: "album-input" }), _jsx("textarea", { placeholder: "Album Description", value: newAlbumDescription, onChange: (e) => setNewAlbumDescription(e.target.value), className: "album-textarea" }), _jsxs("div", { className: "form-actions", children: [_jsx("button", { onClick: handleAddAlbum, className: "save-btn", children: "Save" }), _jsx("button", { onClick: () => setShowAddAlbumForm(false), className: "cancel-btn", children: "Cancel" })] })] }))] }));
}
export default PhotographerPage;
