interface Product {
    number: string;
    title: string;
    description: string;
}

const products: Product[] = [
    {
        number: "01",
        title: "Cooking Ranges",
        description:
            "Steam, gas, electrical and island cooking ranges designed for hotels, restaurants and commercial kitchens.",
    },
    {
        number: "02",
        title: "Counters & Work Tables",
        description:
            "Stainless steel service counters, display counters, work tables and storage cabinets built to suit your space.",
    },
    {
        number: "03",
        title: "Racks & Trolleys",
        description:
            "Durable stainless steel racks and trolleys for organized storage, easy movement and efficient kitchen operations.",
    },
    {
        number: "04",
        title: "Kitchen Equipment",
        description:
            "S.S. tandoors, preparation equipment, wash area equipment and other custom kitchen solutions.",
    },
    {
        number: "05",
        title: "Exhaust & Drainage",
        description:
            "Stainless steel exhaust hoods with filters and drainage gratings designed for clean and efficient kitchen spaces.",
    },
    {
        number: "06",
        title: "Dining & Custom Fabrication",
        description:
            "Dining tables, steel chairs, railings and other stainless steel fabrication works made to your requirements.",
    },
];

function Products() {
    return (
        <section className="products-section" id="products">
            <div className="products-container">

                <div className="section-heading">
                    <p className="section-label">
                        WHAT WE DO
                    </p>

                    <h2>
                        Our Fabrication
                        <br />
                        Works
                    </h2>

                    <p className="section-description">
                        From commercial kitchen equipment to custom stainless
                        steel fabrication, we build strong, practical and
                        durable solutions for every requirement.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div
                            className="product-card"
                            key={product.number}
                        >
                            <span className="product-number">
                                {product.number}
                            </span>

                            <h3>
                                {product.title}
                            </h3>

                            <p>
                                {product.description}
                            </p>

                            <a
                                href="#contact"
                                className="product-link"
                            >
                                Enquire Now →
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Products;
