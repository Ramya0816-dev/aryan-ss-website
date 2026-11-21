function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        ARYAN
                    </a>

                    <p>
                        SS FABRICATION WORKS
                    </p>

                    <span>
                        Quality stainless steel fabrication
                        built to last.
                    </span>
                </div>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#products">Products</a>
                    <a href="#why-us">Why Choose Us</a>
                    <a href="#works">Our Work</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-social">
                    <a
                        href="https://www.instagram.com/aryan_fabrications/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://wa.me/919032728817"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Aryan SS Fabrication Works. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
