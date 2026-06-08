import { useState, useEffect } from "react";

export default function FormDrawer({ data, onClose }) {
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);

    if (!data || !data.questions) {
        return null;
    }

    const select = (qi, val, multi) => {
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
    );

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <div className="form-drawer-bg" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="form-drawer">
                <div className="drawer-handle">
                    <h3>Check Eligibility</h3>
                    <button type="button" className="drawer-close" onClick={(e) => { e.preventDefault(); onClose(); }}>✕</button>
                </div>

                <div className="form-scrollable">
                    {done ? (
                        <div className="success-panel">
                            <div className="tick">✦</div>
                            <h4>Thank You!</h4>
                            <p>We've received your responses. A member of the VIPO Marketing team will be in touch with you shortly.</p>
                        </div>
                    ) : (
                        <div className="form-inner">
                            {data.questions.map((q, qi) => (
                                <div className="q-block" key={qi}>
                                    <div className="q-label"><span className="qn">{qi + 1}.</span> {q.q}</div>
                                    <div className="opts">
                                        {q.opts.map((opt) => {
                                            const sel = q.multi ? (answers[qi] || []).includes(opt) : answers[qi] === opt;
                                            return (
                                                <button type="button" key={opt} className={`opt${sel ? " sel" : ""}`} onClick={() => select(qi, opt, q.multi)}>
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
                            <button type="button" className="form-submit" disabled={!allDone} onClick={() => setDone(true)}>
                                Submit My Eligibility →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
