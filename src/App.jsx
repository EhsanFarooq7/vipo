import { useState } from "react";
import { CSS } from "./CSS";
import { NAV } from "./data/services";
import HomePage from "./Home";
import ContactPage from "./Contact";
import ServicePage from "./components/ServicesPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [key, setKey] = useState(0);

  const navigate = (to) => {
    setPage(to);
    setKey(k => k + 1);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="nav-logo" onClick={() => navigate("home")}>VIPO</div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV.map(n => (
            <li key={n.id}>
              <button
                type="button"
                className={page === n.id ? "active" : ""}
                onClick={() => navigate(n.id)}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="ham" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>

      <main key={key}>
        {page === "home" && <HomePage navigate={navigate} />}
        {["admin", "bizdev", "ai", "wholesale"].includes(page) && (
          <ServicePage pageId={page} navigate={navigate} />
        )}
        {page === "contact" && <ContactPage navigate={navigate} />}
      </main>
    </>
  );
}
