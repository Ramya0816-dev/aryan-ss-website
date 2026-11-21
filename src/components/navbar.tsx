import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#home"
                    className="brand"
                    onClick={closeMenu}
                >
                    <img
                        src="/images/logo.jpeg"
                        alt="Aryan SS Fabrication Works"
                        className="brand-logo"
                    />

                    <div className="brand-details">
                        <span className="brand-name">ARYAN</span>
                        <span className="brand-subtitle">
                            SS FABRICATION WORKS
                        </span>
                    </div></a>

                <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#products" onClick={closeMenu}>
                        Products
                    </a>

                    <a href="#why-us" onClick={closeMenu}>
                        Why Choose Us
                    </a>

                    <a href="#works" onClick={closeMenu}>
                        Our Work
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>

                <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-button"
                >
                    WhatsApp
                </a>

                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
}

export default Navbar;
