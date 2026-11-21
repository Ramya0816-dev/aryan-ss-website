function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">

                <div className="about-image">
                    <img
                        src="/images/about-page.jpeg"
                        alt="Aryan SS Fabrication Works"
                    />
                </div>

                <div className="about-content">

                    <p className="section-label">
                        ABOUT ARYAN
                    </p>

                    <h2>
                        Quality fabrication.
                        <br />
                        Built for you.
                    </h2>

                    <p className="about-description">
                        Aryan SS Fabrication Works specializes in stainless
                        steel fabrication and commercial kitchen equipment
                        for hotels, restaurants, food businesses, homes and
                        other commercial spaces.
                    </p>

                    <p className="about-description">
                        From cooking ranges and work tables to counters,
                        racks, trolleys and custom fabrication, we focus on
                        practical designs, strong construction and clean
                        finishing.
                    </p>

                    <div className="about-highlights">

                        <div className="about-highlight">
                            <strong>Quality</strong>
                            <span>Materials</span>
                        </div>

                        <div className="about-highlight">
                            <strong>Custom</strong>
                            <span>Solutions</span>
                        </div>

                        <div className="about-highlight">
                            <strong>Reliable</strong>
                            <span>Workmanship</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;
