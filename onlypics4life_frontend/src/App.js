import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
    const navigate = useNavigate();
    const handleGoToLogin = () => {
        navigate("/login");
    };
    return (_jsxs("div", { className: "home-page", children: [_jsx("div", { className: "logo-container", children: _jsx("img", { src: "/Onlypics4life.png", alt: "OnlyPics4Life Logo", className: "app-logo" }) }), _jsxs("header", { children: [_jsxs("h1", { children: ["Welcome to ", _jsx("span", { className: "app-name", children: "OnlyPics4Life" })] }), _jsx("p", { children: "Your secure solution for sharing and managing photos." })] }), _jsx("div", { className: "button-section", children: _jsx("button", { onClick: handleGoToLogin, className: "go-to-login-btn", children: "Go to Login" }) })] }));
}
export default App;
