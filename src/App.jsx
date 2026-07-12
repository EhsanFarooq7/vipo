import { useState, useEffect } from "react";
import { CSS } from "./CSS";
import { NAV } from "./data/services";
import HomePage from "./Home";
import ContactPage from "./Contact";
import ServicePage from "./components/ServicesPage";

const VALID_PAGES = ["home", "admin", "bizdev", "ai", "wholesale", "contact"];

const getPageFromPath = (path) => {
  const cleanPath = path.trim().replace(/^\/|\/$/g, "");
  if (cleanPath === "" || cleanPath === "home") return "home";
  if (cleanPath === "bd" || cleanPath === "bizdev") return "bizdev";
  if (VALID_PAGES.includes(cleanPath)) return cleanPath;
  return "home";
};

const getPathFromPage = (page) => {
  if (page === "home") return "/";
  if (page === "bizdev") return "/bd";
  return `/${page}`;
};

export default function App() {
  const [page, setPage] = useState(() => {
    const initialPage = getPageFromPath(window.location.pathname);
    const canonicalPath = getPathFromPage(initialPage);
    if (window.location.pathname !== canonicalPath) {
      window.history.replaceState(null, "", canonicalPath);
    }
    return initialPage;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      const nextPage = getPageFromPath(window.location.pathname);
      setPage(nextPage);
      setKey(k => k + 1);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const path = getPathFromPage(to);
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
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
