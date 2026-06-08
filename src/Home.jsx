export default function HomePage({ navigate }) {
    const cards = [
        { id: "admin", icon: "📋", title: "Administration Support", desc: "Expert diary, email and invoicing management so you can focus on your clients." },
        { id: "bizdev", icon: "📈", title: "Business Development", desc: "We find, approach and qualify prospects — and book them into your calendar." },
        { id: "ai", icon: "🤖", title: "AI & Automation", desc: "Intelligent workflows that reduce repetitive work and run 24 hours a day." },
        { id: "wholesale", icon: "🌿", title: "Wholesale & Distribution", desc: "Natural personal care products from India, seeking African distribution partners." },
    ];

    return (
        <div className="page page-enter">
            {/* Hero */}
            <div className="home-hero">
                <div className="bg-glow" />
                <div className="grid-overlay" />
                <div className="hero-inner">
                    <div className="hero-pill">VIPO Marketing</div>
                    <h1>
                        Save Time.<br />
                        Reduce Costs.<br />
                        <em>Grow Your Business.</em>
                    </h1>
                    <p>
                        Many business owners spend too much time on administration, repetitive tasks and customer acquisition. We help you become more efficient — because sometimes saving time is more profitable than chasing more sales.
                    </p>
                    <div className="home-cta">
                        <button type="button" className="btn-gold" onClick={() => navigate("admin")}>Explore Services</button>
                        <button type="button" className="btn-ghost" onClick={() => navigate("contact")}>Book a Free Call</button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="stat-strip">
                {[
                    { n: "5–10h", l: "Saved Per Week" },
                    { n: "3×", l: "Faster Lead Response" },
                    { n: "24/7", l: "AI Automation" },
                    { n: "Africa", l: "Distribution Network" },
                ].map(s => (
                    <div className="stat-item" key={s.l}>
                        <div className="stat-num">{s.n}</div>
                        <div className="stat-lbl">{s.l}</div>
                    </div>
                ))}
            </div>

            {/* Services */}
            <div className="services-grid-section">
                <h2>How We Help You</h2>
                <p className="sub">Four specialist services designed to save time, reduce costs and grow your business.</p>
                <div className="services-grid">
                    {cards.map(c => (
                        <div className="service-card" key={c.id} onClick={() => navigate(c.id)}>
                            <div className="svc-icon">{c.icon}</div>
                            <div className="svc-title">{c.title}</div>
                            <div className="svc-desc">{c.desc}</div>
                            <div className="svc-arrow">Learn more →</div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">© {new Date().getFullYear()} VIPO Marketing · Save Time. Reduce Costs. Grow Your Business.</footer>
        </div>
    );
}