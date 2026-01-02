import { useEffect, useRef, useState } from "react";
import '../styles/Header.css';
import logo from '../assets/icon_ls.svg';
import { FaHouse, FaFolder, FaUser, FaEnvelope, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav ref={menuRef} className={`header__nav ${isMenuOpen ? 'show' : ''}`}>
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                    <FaHouse /> <span>Home</span>
                </a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    <FaFolder /> <span>Projects</span>
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    <FaUser /> <span>About</span>
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <FaEnvelope /> <span>Contact</span>
                </a>
            </nav>

            <button onClick={toggleDarkMode} className="dark-mode-btn">
                {isDarkMode ? '🌙' : '☀️'}
            </button>
        </header>
    );
}