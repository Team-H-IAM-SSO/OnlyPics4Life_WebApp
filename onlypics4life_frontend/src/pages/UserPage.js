import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./UserPage.css";
function UserPage() {
    const [code, setCode] = useState("");
    const [albums, setAlbums] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // Defineer validCodes met een expliciet type
    const validCodes = {
        AB123: { title: "Vacation 2023", description: "Photos from our summer trip." },
        XY456: { title: "Wedding Album", description: "Photos from the wedding event." },
    };
    const handleCodeSubmit = () => {
        if (validCodes[code]) {
            setAlbums([...albums, validCodes[code]]);
            setCode("");
            setErrorMessage("");
        }
        else {
            setErrorMessage("Invalid code. Please try again.");
        }
    };
    return (_jsxs("div", { className: "user-page", children: [_jsxs("header", { children: [_jsx("h1", { children: "Welcome, [User Name]" }), _jsx("p", { children: "Enter your access code to view albums shared with you." })] }), _jsxs("section", { className: "code-section", children: [_jsx("input", { type: "text", placeholder: "Enter album code", value: code, onChange: (e) => setCode(e.target.value), className: "code-input" }), _jsx("button", { onClick: handleCodeSubmit, className: "code-submit-btn", children: "Submit Code" }), errorMessage && _jsx("p", { className: "error-message", children: errorMessage })] }), _jsxs("section", { className: "album-overview", children: [_jsx("h2", { children: "Your Albums" }), albums.length === 0 ? (_jsx("p", { children: "No albums added yet. Enter a code to access an album." })) : (_jsx("ul", { className: "album-list", children: albums.map((album, index) => (_jsxs("li", { className: "album-item", children: [_jsx("h3", { children: album.title }), _jsx("p", { children: album.description })] }, index))) }))] })] }));
}
export default UserPage;
