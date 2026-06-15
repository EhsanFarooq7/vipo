import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function RequestInfoModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Request for More Information from ${formData.name}`,
          from_name: "VIPO Marketing",
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
      setErrorMessage("Failed to send message. Please check your internet connection and try again.");
    }
  };

  return createPortal(
    <div
      className="form-drawer-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="form-drawer">
        <div className="drawer-handle">
          <h3>Request More Information</h3>
          <button
            type="button"
            className="drawer-close"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            ✕
          </button>
        </div>

        <div className="form-scrollable">
          {status === "success" ? (
            <div className="success-panel">
              <div className="tick">✦</div>
              <h4>Request Sent!</h4>
              <p>
                Thank you for your interest. We have received your request and our marketing team will email you at{" "}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button type="button" className="form-submit" onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-inner">
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 20 }}>
                Please fill in the details below. We'll put together a tailored overview of our services for your business.
              </p>

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
                  {errorMessage || "Submission failed. Please verify your Access Key."}
                </div>
              )}

              <div className="q-block">
                <label className="input-label" htmlFor="info-name">
                  Full Name <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <input
                  type="text"
                  id="info-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={status === "submitting"}
                  className="form-input"
                />
              </div>

              <div className="q-block">
                <label className="input-label" htmlFor="info-email">
                  Email Address <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <input
                  type="email"
                  id="info-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={status === "submitting"}
                  className="form-input"
                />
              </div>

              <div className="q-block">
                <label className="input-label" htmlFor="info-phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="info-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7123 456789"
                  disabled={status === "submitting"}
                  className="form-input"
                />
              </div>

              <div className="q-block">
                <label className="input-label" htmlFor="info-message">
                  What service or information are you looking for? <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <textarea
                  id="info-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I want to know more about Administration Support / AI Automation..."
                  required
                  rows="4"
                  disabled={status === "submitting"}
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="form-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending Request..." : "Submit Request →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
