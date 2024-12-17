import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="location">
                <p>Location: 123 Main St, Anytown, USA</p>
            </div>
            <div className="additional-info">
                <p>&copy; 2024 My App. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
