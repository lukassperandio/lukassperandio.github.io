import { useState } from "react";
import '../styles/Header.css';
import logo from '../assets/icon_ls.svg';
import { FaHouse, FaFolder, FaUser, FaEnvelope } from "react-icons/fa6";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Lukas Sperandio's portfolio logo" />
            </div>

            <nav className="header__nav">
                <a href="#">
                    <FaHouse /> Home
                </a>
                <a href="#projects">
                    <FaFolder /> Projects
                </a>
                <a href="#about">
                    <FaUser /> About
                </a>
                <a href="#contact">
                    <FaEnvelope /> Contact
                </a>
            </nav>
            <button
                onClick={toggleDarkMode}
                className="dark-mode-btn"
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>

        </header>
    );
}