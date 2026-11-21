interface Reason {
    number: string;
    title: string;
    description: string;
}

const reasons: Reason[] = [
    {
        number: "01",
        title: "Quality Materials",
        description:
            "We use quality stainless steel and reliable materials to deliver strong, durable and long-lasting fabrication.",
    },
    {
        number: "02",
        title: "Made to Measure",
        description:
            "Every product is fabricated according to your required size, available space, design and specific requirements.",
    },
    {
        number: "03",
        title: "Clean Finishing",
        description:
            "We focus on neat fabrication, smooth finishing and attention to detail for a professional final result.",
    },
    {
        number: "04",
        title: "Reliable Work",
        description:
            "From commercial kitchens to custom fabrication, we focus on practical solutions designed for regular and long-term use.",
    },
];

function WhyChooseUs() {
    return (
        <section className="why-section" id="why-us">
            <div className="why-container">

                <div className="section-heading">
                    <p className="section-label">
                        WHY CHOOSE US
                    </p>

                    <h2>
                        Quality you can
                        <br />
                        count on.
                    </h2>

                    <p className="section-description">
                        Quality materials, custom fabrication and careful
                        workmanship come together to deliver practical
                        stainless steel solutions.
                    </p>
                </div>

                <div className="why-grid">
                    {reasons.map((reason) => (
                        <div
                            className="why-card"
                            key={reason.number}
                        >
                            <span className="why-number">
                                {reason.number}
                            </span>

                            <h3>
                                {reason.title}
                            </h3>

                            <p>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;
