import React, { useState } from "react";
import "./AdminPage.css";

function AdminPage() {
    const [logs, setLogs] = useState<
        { username: string; album: string; timestamp: string }[]
    >([
        { username: "User1", album: "Wedding Photos", timestamp: "2025-01-01 14:23" },
        { username: "User2", album: "Vacation Album", timestamp: "2025-01-02 16:10" },
    ]);

    const [albums, setAlbums] = useState<
        { name: string; description: string; users: string[] }[]
    >([
        { name: "Wedding Photos", description: "Beautiful wedding moments", users: ["User1"] },
        { name: "Vacation Album", description: "Summer vacation 2024", users: ["User2"] },
    ]);

    const [search, setSearch] = useState("");

    const filteredLogs = logs.filter(
        (log) =>
            log.username.toLowerCase().includes(search.toLowerCase()) ||
            log.album.toLowerCase().includes(search.toLowerCase())
    );

    const filteredAlbums = albums.filter((album) =>
        album.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-page">
            <header>
                <h1>Admin Dashboard</h1>
                <p>Manage logs and user access to albums.</p>
            </header>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search logs or albums..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <section className="logs-section">
                <h2>Access Logs</h2>
                {filteredLogs.length === 0 ? (
                    <p>No logs available.</p>
                ) : (
                    <table className="logs-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Album</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLogs.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.username}</td>
                                    <td>{log.album}</td>
                                    <td>{log.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>

            <section className="albums-section">
                <h2>Albums and User Access</h2>
                {filteredAlbums.length === 0 ? (
                    <p>No albums found.</p>
                ) : (
                    <table className="albums-table">
                        <thead>
                            <tr>
                                <th>Album</th>
                                <th>Description</th>
                                <th>Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAlbums.map((album, index) => (
                                <tr key={index}>
                                    <td>{album.name}</td>
                                    <td>{album.description}</td>
                                    <td>{album.users.join(", ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

export default AdminPage;