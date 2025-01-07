import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./Login.css";
import photoGuy from '../assets/stock-guy.jpg';
function Login() {
    const [view, setView] = useState("login");
    const handleLogin = () => {
        alert("Login submitted!");
    };
    const handleIdSubmit = () => {
        alert("ID submitted!");
    };
    return (_jsxs("div", { className: "login-page", children: [_jsxs("div", { className: "login-container-wrapper", children: [view === "login" ? (_jsxs("div", { className: "login-container", children: [_jsx("h1", { children: "Login" }), _jsx("p", { children: "Sign in with your credentials" }), _jsx("input", { type: "text", placeholder: "Username", className: "login-input" }), _jsx("input", { type: "password", placeholder: "Password", className: "login-input" }), _jsx("button", { onClick: handleLogin, className: "login-btn", children: "Login" })] })) : (_jsxs("div", { className: "id-container", children: [_jsx("h1", { children: "ID Login" }), _jsx("p", { children: "Enter your unique ID" }), _jsx("input", { type: "text", placeholder: "Enter ID", className: "id-input" }), _jsx("button", { onClick: handleIdSubmit, className: "id-btn", children: "Submit ID" })] })), _jsxs("div", { className: "switch-btn-wrapper", children: [_jsx("p", { className: "switch-btn-text", children: view === "login"
                                    ? "Want to log in with your ID? Click the button below."
                                    : "Want to go back to normal login? Click the button below." }), _jsx("button", { className: "switch-btn", onClick: () => setView(view === "login" ? "id" : "login"), children: view === "login" ? "Switch to ID Login" : "Back to Login" })] })] }), _jsx("div", { className: "image-container", children: _jsx("img", { src: photoGuy, alt: "The one piece is real", className: "background-image" }) })] }));
}
export default Login;
