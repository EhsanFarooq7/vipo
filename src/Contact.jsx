export default function ContactPage({ navigate }) {
    return (
        <div className="page page-enter">
            <div className="contact-hero-section">
                <div
                    className="breadcrumb"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: "0.78rem", color: "var(--muted)", marginBottom: 24, cursor: "pointer" }}
                    onClick={() => navigate("home")}
                >
                    ← Home <span style={{ color: "var(--gold)" }}>/ Contact</span>
                </div>
                <h1>Not Sure Where to Start?</h1>
                <p>
                    Have a chat with us. We'll answer your questions and help you work out which service — if any — is right for your business. No pressure, no hard sell.
                </p>
            </div>
            <div className="contact-cards-grid">
                {[
                    { icon: "📞", title: "Book a Discovery Call", desc: "Schedule a free 30-minute consultation with our team. We'll listen first." },
                    { icon: "📧", title: "Request More Information", desc: "Send us your details and we'll put together a tailored overview for you." },
                    { icon: "💬", title: "WhatsApp Us", desc: "Quick questions? Drop us a message and we'll come back to you quickly." },
                ].map(c => (
                    <a className="contact-crd" href="#" key={c.title} onClick={e => e.preventDefault()}>
                        <div className="c-icon">{c.icon}</div>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                    </a>
                ))}
            </div>
            <footer className="footer">© {new Date().getFullYear()} VIPO Marketing · Save Time. Reduce Costs. Grow Your Business.</footer>
        </div>
    );
}