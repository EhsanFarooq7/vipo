import { useState } from "react";
import CalendlyModal from "./components/CalendlyModal";
import RequestInfoModal from "./components/RequestInfoModal";

export default function ContactPage({ navigate }) {
    const [calendlyOpen, setCalendlyOpen] = useState(false);
    const [requestInfoOpen, setRequestInfoOpen] = useState(false);

    const cards = [
        {
            icon: "📞",
            title: "Book a Discovery Call",
            desc: "Schedule a free 30-minute consultation with our team. We'll listen first.",
            action: () => setCalendlyOpen(true),
            href: "#"
        },
        {
            icon: "📧",
            title: "Request More Information",
            desc: "Send us your details and we'll put together a tailored overview for you.",
            action: () => setRequestInfoOpen(true),
            href: "#"
        },
        {
            icon: "💬",
            title: "WhatsApp Us",
            desc: "Quick questions? Drop us a message and we'll come back to you quickly.",
            action: () => window.open("https://wa.me/447878231466", "_blank", "noopener,noreferrer"),
            href: "https://wa.me/447878231466"
        }
    ];

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
                {cards.map(c => (
                    <a
                        className="contact-crd"
                        href={c.href}
                        key={c.title}
                        onClick={e => {
                            if (c.href === "#") {
                                e.preventDefault();
                            }
                            c.action();
                        }}
                        target={c.href !== "#" ? "_blank" : undefined}
                        rel={c.href !== "#" ? "noopener noreferrer" : undefined}
                    >
                        <div className="c-icon">{c.icon}</div>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                    </a>
                ))}
            </div>
            <footer className="footer">© {new Date().getFullYear()} VIPO Marketing · Save Time. Reduce Costs. Grow Your Business.</footer>

            {calendlyOpen && <CalendlyModal onClose={() => setCalendlyOpen(false)} />}
            {requestInfoOpen && <RequestInfoModal onClose={() => setRequestInfoOpen(false)} />}
        </div>
    );
}