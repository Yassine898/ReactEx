import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [showAuthButtons, setShowAuthButtons] = useState(false);
    const navigate = useNavigate();

    const toggleAuthButtons = () => {
        setShowAuthButtons(!showAuthButtons);
    };

    const goToPanier = () => {
        navigate('/panier');
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="panier">
                <button type="button" onClick={goToPanier}>🛒 Panier</button>
            </div>
            <button className="toggle-button" onClick={toggleAuthButtons}>Toggle Auth</button>
            {showAuthButtons && (
                <div className="auth-buttons">
                    <button type="button">Sign In</button>
                    <button type="button">Sign Up</button>
                </div>
            )}
        </header>
    );
};

export default Header;
