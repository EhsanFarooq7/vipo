export default function HomePage({ navigate }) {
    const cards = [
        { id: "admin", icon: "📋", title: "Administration Support", desc: "Professional diary, email and invoicing support, allowing you to focus on your clients and business" },
        { id: "bizdev", icon: "📈", title: "Business Development", desc: "We identify, engage and qualify potential customers so you can focus on running your business." },
        { id: "ai", icon: "🤖", title: "AI & Automation", desc: "Intelligent workflows that reduce repetitive tasks and help your business operate 24/7." },
        { id: "wholesale", icon: "🌿", title: "Wholesale & Distribution", desc: "Premium natural skincare and personal care from the India. We are seeking distributors, pharmacies, retailers and partners across Kenya." },
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
                        Many business owners spend too much time on administration, repetitive tasks and finding new customers. We help you become more efficient because sometimes saving time and reducing costs can be more profitable than chasing additional sales.
                    </p>
                    <div className="home-cta">
                        <button type="button" className="btn-gold" onClick={() => navigate("admin")}>Explore Services</button>
                        <button type="button" className="btn-ghost" onClick={() => navigate("contact")}>Let’s Have a Chat</button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="stat-strip">
                {[
                    { n: "5–10 Hours", l: "Saved Per Week" },
                    { n: "3×", l: "Faster Lead Response" },
                    { n: "24/7", l: "AI Automation" },
                    { n: "African", l: "Distribution Partners" },
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