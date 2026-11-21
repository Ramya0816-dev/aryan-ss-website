interface Work {
    image: string;
    title: string;
    category: string;
}

const works: Work[] = [
    // Stove / Cooking Range
    {
        image: "/images/work-1.jpeg",
        title: "Stainless Steel Stove",
        category: "Cooking Range",
    },
    {
        image: "/images/work-2.jpeg",
        title: "Commercial Cooking Range",
        category: "Cooking Range",
    },
    {
        image: "/images/wooden-stove1.jpeg",
        title: "SS Wooden Stove",
        category: "Cooking Range",
    },
    {
        image: "/images/wooden-stove2.jpeg",
        title: "SS Wooden Stove",
        category: "Cooking Range",
    },

    // Counters
    {
        image: "/images/work-3.jpeg",
        title: "Stainless Steel Counter",
        category: "Counters",
    },
    {
        image: "/images/worktable.jpeg",
        title: "Stainless Stee Work Table",
        category: "SS Tables",
    },

    // Dining Tables
    {
        image: "/images/dining-table.jpeg",
        title: "Stainless Steel Dining Table",
        category: "Dining Tables",
    },
    {
        image: "/images/commercial-dining-table.jpeg",
        title: "Commercial Dining Table",
        category: "Dining Tables",
    },

    // Kabab Stands
    {
        image: "/images/kabab-counter.jpeg",
        title: "Kabab Stand",
        category: "Kabab Stands",
    },

    // Tandoor
    {
        image: "/images/tandoori.jpeg",
        title: "Stainless Steel Tandoor",
        category: "Tandoor",
    },

    // Racks
    {
        image: "/images/food cart.jpeg",
        title: "Stainless Steel Food Cart",
        category: "Food Carts",
    },

    // Railing
    {
        image: "/images/gate.jpeg",
        title: "Stainless Steel Gate",
        category: "Railing",
    },
    // Custom
    {
        image: "/images/custom-counter.jpeg",
        title: "custom-counter works",
        category: "custom-fabrications",
    },
    {
        image: "",
        title: "Have Your Own Idea?",
        category: "Let's Build It",
    },
];

function OurWork() {
    return (
        <section className="works-section" id="works">
            <div className="works-container">

                <div className="section-heading works-heading">
                    <p className="section-label">
                        OUR WORK
                    </p>

                    <h2>
                        Made with
                        <br />
                        precision.
                    </h2>

                    <p className="section-description">
                        Take a look at some of our stainless steel fabrication
                        work. Every project is made with attention to quality,
                        strength and finishing.
                    </p>
                </div>

                <div className="works-grid">
                    {works.map((work) => (
                        <div
                            className={`work-card ${!work.image ? "custom-work-card" : ""}`}
                            key={work.image || work.title}
                        >
                            {work.image ? (
                                <>
                                    <div className="work-image">
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                        />
                                    </div>

                                    <div className="work-info">
                                        <h3>
                                            {work.title}
                                        </h3>

                                        <p>
                                            {work.category}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="custom-work-content">
                                    <span className="custom-work-label">
                                        CUSTOM FABRICATION
                                    </span>

                                    <h3>
                                        Have Your
                                        <br />
                                        Own Idea?
                                    </h3>

                                    <p>
                                        Your idea, your design, your requirements.
                                        Let's turn your thought into reality.
                                    </p>

                                    <a href="#contact">
                                        Let's Build It →
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default OurWork;
