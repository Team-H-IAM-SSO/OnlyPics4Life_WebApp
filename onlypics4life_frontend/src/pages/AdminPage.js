import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./AdminPage.css";
function AdminPage() {
    const [logs, setLogs] = useState([
        { username: "User1", album: "Wedding Photos", timestamp: "2025-01-01 14:23" },
        { username: "User2", album: "Vacation Album", timestamp: "2025-01-02 16:10" },
    ]);
    const [albums, setAlbums] = useState([
        { name: "Wedding Photos", description: "Beautiful wedding moments", users: ["User1"] },
        { name: "Vacation Album", description: "Summer vacation 2024", users: ["User2"] },
    ]);
    const [search, setSearch] = useState("");
    const filteredLogs = logs.filter((log) => log.username.toLowerCase().includes(search.toLowerCase()) ||
        log.album.toLowerCase().includes(search.toLowerCase()));
    const filteredAlbums = albums.filter((album) => album.name.toLowerCase().includes(search.toLowerCase()));
    return (_jsxs("div", { className: "admin-page", children: [_jsxs("header", { children: [_jsx("h1", { children: "Admin Dashboard" }), _jsx("p", { children: "Manage logs and user access to albums." })] }), _jsx("div", { className: "search-bar", children: _jsx("input", { type: "text", placeholder: "Search logs or albums...", value: search, onChange: (e) => setSearch(e.target.value), className: "search-input" }) }), _jsxs("section", { className: "logs-section", children: [_jsx("h2", { children: "Access Logs" }), filteredLogs.length === 0 ? (_jsx("p", { children: "No logs available." })) : (_jsxs("table", { className: "logs-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "User" }), _jsx("th", { children: "Album" }), _jsx("th", { children: "Timestamp" })] }) }), _jsx("tbody", { children: filteredLogs.map((log, index) => (_jsxs("tr", { children: [_jsx("td", { children: log.username }), _jsx("td", { children: log.album }), _jsx("td", { children: log.timestamp })] }, index))) })] }))] }), _jsxs("section", { className: "albums-section", children: [_jsx("h2", { children: "Albums and User Access" }), filteredAlbums.length === 0 ? (_jsx("p", { children: "No albums found." })) : (_jsxs("table", { className: "albums-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Album" }), _jsx("th", { children: "Description" }), _jsx("th", { children: "Users" })] }) }), _jsx("tbody", { children: filteredAlbums.map((album, index) => (_jsxs("tr", { children: [_jsx("td", { children: album.name }), _jsx("td", { children: album.description }), _jsx("td", { children: album.users.join(", ") })] }, index))) })] }))] })] }));
}
export default AdminPage;
