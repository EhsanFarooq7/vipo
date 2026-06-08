import { useState } from "react";
import { SERVICE_DATA } from "../data/services";
import FormDrawer from "./FormDrawer";

export default function ServicePage({ pageId, navigate }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const d = SERVICE_DATA[pageId];
    if (!d) return null;

    return (
        <div className="page page-enter">
            {/* Hero */}
            <div className="inner-hero">
                <div className="bg-line" />
                <div
                    className="breadcrumb"
                    onClick={() => navigate("home")}
                >
                    ← Home <span>/ {d.title}</span>
                </div>
                <div className="tag">{d.tag}</div>
                <h1>{d.title}</h1>
                <p>{d.desc}</p>
            </div>

            <div className="inner-body">
                {/* CTA band — prominent */}
                <div className="cta-band">
                    <div className="cta-band-text">
                        <h3>Ready to get started?</h3>
                        <p>Answer 4 quick questions to check whether this service is right for your business. It takes less than 2 minutes.</p>
                    </div>
                    <button type="button" className="btn-gold" onClick={() => setDrawerOpen(true)}>
                        Check My Eligibility →
                    </button>
                </div>

                {/* Info split */}
                <div className="info-split">
                    <div className="info-block">
                        <h3>{d.about.heading}</h3>
                        <p>{d.about.body}</p>
                        <p>{d.about.body2}</p>
                    </div>
                    <ul className="feature-list">
                        {d.features.map((f, i) => (
                            <li key={i}>
                                <span className="feat-icon">{f.icon}</span>
                                {f.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* How it works */}
                <div style={{ marginBottom: 56 }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>How It Works</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 28, fontWeight: 300 }}>A straightforward four-step process from enquiry to results.</p>
                    <div className="steps">
                        {d.steps.map((s, i) => (
                            <div className="step" key={i}>
                                <div className="step-num">0{i + 1}</div>
                                <div className="step-text">
                                    <h4>{s.title}</h4>
                                    <p>{s.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second CTA */}
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 20, fontWeight: 300 }}>Not sure if this is right for you? Our eligibility check will tell you in under 2 minutes.</p>
                    <button type="button" className="btn-gold" onClick={() => setDrawerOpen(true)}>Check My Eligibility →</button>
                    <span style={{ display: "inline-block", marginLeft: 16 }}>
                        <button type="button" className="btn-ghost" onClick={() => navigate("contact")}>Talk to Us Instead</button>
                    </span>
                </div>
            </div>

            {drawerOpen && <FormDrawer data={d} onClose={() => setDrawerOpen(false)} />}
        </div>
    );
}