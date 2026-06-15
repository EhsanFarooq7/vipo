import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CalendlyModal({ onClose }) {
  const [loading, setLoading] = useState(true);
  const url = "https://calendly.com/vipo-marketing-marketing/30min"; // User's Calendly URL

  useEffect(() => {
    // Disable background scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div
      className="form-drawer-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="form-drawer calendly-drawer">
        <div className="drawer-handle">
          <h3>Book a Discovery Call</h3>
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

        <div className="form-scrollable" style={{ position: "relative", height: "100%", minHeight: "350px", overflow: "hidden" }}>
          {loading && (
            <div className="calendar-loader">
              <div className="spinner"></div>
              <p>Loading Calendly Scheduler...</p>
            </div>
          )}
          <iframe
            src={url}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a Discovery Call with VIPO"
            onLoad={() => setLoading(false)}
            style={{
              display: loading ? "none" : "block",
              border: "none",
              background: "transparent",
              width: "100%",
              height: "100%",
              minHeight: "450px",
            }}
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
}
