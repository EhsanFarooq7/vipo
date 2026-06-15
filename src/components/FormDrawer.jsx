import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function FormDrawer({ data, onClose }) {
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

    if (!data || !data.questions) {
        return null;
    }

    const select = (qi, val, multi) => {
        if (status === "submitting") return;
        setAnswers((prev) => {
            if (multi) {
                const cur = prev[qi] || [];
                return { ...prev, [qi]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] };
            }
            return { ...prev, [qi]: val };
        });
    };

    const allDone = data.questions.every((q, i) =>
        q.multi ? (answers[i] || []).length > 0 : !!answers[i]
    ) && name.trim() !== "" && email.trim() !== "";

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!allDone || status === "submitting") return;

        setStatus("submitting");
        setErrorMessage("");

        // Format answers for the email body
        const formattedAnswers = data.questions.map((q, i) => {
            const ans = answers[i];
            const displayAns = Array.isArray(ans) ? ans.join(", ") : ans;
            return `Q: ${q.q}\nA: ${displayAns || "No answer"}`;
        }).join("\n\n");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: web3formsAccessKey,
                    name: name,
                    email: email,
                    phone: phone,
                    subject: `New Eligibility Submission: ${data.formTitle || data.title || "Service Page"}`,
                    from_name: "VIPO Marketing Eligibility Bot",
                    message: `A visitor has completed the eligibility check for: ${data.title}\n\nVisitor Name: ${name}\nVisitor Email: ${email}\nVisitor Phone: ${phone || "N/A"}\n\n--- Answers ---\n\n${formattedAnswers}`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("Failed to submit eligibility check. Please check your network and try again.");
        }
    };

    return createPortal(
        <div className="form-drawer-bg" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="form-drawer">
                <div className="drawer-handle">
                    <h3>Check Eligibility</h3>
                    <button type="button" className="drawer-close" onClick={(e) => { e.preventDefault(); onClose(); }}>✕</button>
                </div>

                <div className="form-scrollable">
                    {status === "success" ? (
                        <div className="success-panel">
                            <div className="tick">✦</div>
                            <h4>Thank You!</h4>
                            <p>We've received your responses. A member of the VIPO Marketing team will be in touch with you shortly.</p>
                            <button type="button" className="form-submit" onClick={onClose} style={{ marginTop: 24 }}>
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="form-inner">
                            {status === "error" && (
                                <div
                                    style={{
                                        background: "rgba(239, 68, 68, 0.1)",
                                        border: "1px solid rgba(239, 68, 68, 0.3)",
                                        color: "#f87171",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        fontSize: "0.84rem",
                                        marginBottom: 20,
                                    }}
                                >
                                    {errorMessage || "Submission failed. Please try again."}
                                </div>
                            )}

                            {data.questions.map((q, qi) => (
                                <div className="q-block" key={qi}>
                                    <div className="q-label"><span className="qn">{qi + 1}.</span> {q.q}</div>
                                    <div className="opts">
                                        {q.opts.map((opt) => {
                                            const sel = q.multi ? (answers[qi] || []).includes(opt) : answers[qi] === opt;
                                            return (
                                                <button 
                                                    type="button" 
                                                    key={opt} 
                                                    className={`opt${sel ? " sel" : ""}`} 
                                                    onClick={() => select(qi, opt, q.multi)}
                                                    disabled={status === "submitting"}
                                                >
                                                    {q.multi
                                                        ? <span className="opt-sq" />
                                                        : <span className="opt-mark" />}
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}

                            <div className="contact-details-section" style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>Your Contact Details</h4>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: 16 }}>Please enter your details below to submit your eligibility answers.</p>
                                
                                <div className="q-block">
                                    <label className="input-label" htmlFor="elig-name">
                                        Full Name <span style={{ color: "var(--gold)" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="elig-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        required
                                        disabled={status === "submitting"}
                                        className="form-input"
                                    />
                                </div>

                                <div className="q-block">
                                    <label className="input-label" htmlFor="elig-email">
                                        Email Address <span style={{ color: "var(--gold)" }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="elig-email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        required
                                        disabled={status === "submitting"}
                                        className="form-input"
                                    />
                                </div>

                                <div className="q-block">
                                    <label className="input-label" htmlFor="elig-phone">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="elig-phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+44 7123 456789"
                                        disabled={status === "submitting"}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="form-submit" disabled={!allDone || status === "submitting"}>
                                {status === "submitting" ? "Submitting My Eligibility..." : "Submit My Eligibility →"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
