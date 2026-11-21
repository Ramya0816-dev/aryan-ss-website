function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-content">

                    <p className="section-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Have a project
                        <br />
                        in mind?
                    </h2>

                    <p className="contact-description">
                        Looking for custom stainless steel fabrication?
                        Contact us to discuss your requirements and get
                        started on your project.
                    </p>

                    <div className="contact-buttons">

                        <a
                            href="tel:+919032728817"
                            className="contact-primary-button"
                        >
                            Call Us
                        </a>

                        <a
                            href="https://wa.me/919032728817"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-secondary-button"
                        >
                            WhatsApp Us
                        </a>

                    </div>
                </div>

                <div className="contact-details">

                    <div className="contact-detail">
                        <span>Phone</span>

                        <a href="tel:+919032728817">
                            +91 9032728817
                        </a>
                    </div>

                    <div className="contact-detail">
                        <span>WhatsApp</span>

                        <a
                            href="https://wa.me/919032728817"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chat with us
                        </a>
                    </div>

                    <div className="contact-detail">
                        <span>Instagram</span>

                        <a
                            href="https://www.instagram.com/aryan_fabrications/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @aryan_fabrications
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;