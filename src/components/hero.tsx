function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-container">

                <div className="hero-content">

                    <p className="hero-label">
                        STAINLESS STEEL FABRICATION
                    </p>

                    <h1>
                        Strong.
                        <br />
                        Precise.
                        <br />
                        Built to Last.
                    </h1>

                    <p className="hero-description">
                        Custom stainless steel fabrication for commercial
                        kitchens, hotels, restaurants, homes and businesses.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#works"
                            className="hero-primary-button"
                        >
                            View Our Work
                        </a>

                        <a
                            href="#contact"
                            className="hero-secondary-button"
                        >
                             Enquire Now
                        </a>

                    </div>

                </div>

                <div className="hero-image">
                    <img
                        src="/images/hero-img.jpeg"
                        alt="Stainless steel fabrication work"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;
