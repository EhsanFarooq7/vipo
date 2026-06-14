export const CSS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --gold: #C9A96E;
  --gold-light: #E2C99A;
  --dark: #090D18;
  --navy: #111827;
  --card: #161F32;
  --border: rgba(201, 169, 110, 0.15);
  --text: #DDE3EF;
  --muted: #7A869E;
  --radius: 14px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Outfit', sans-serif;
  background: var(--dark);
  color: var(--text);
  min-height: 100vh;
  
}

/* ── NAV ── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background: rgba(9, 13, 24, 0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--gold);
  cursor: pointer;
  letter-spacing: 1px;
  user-select: none;
}

.nav-links {
  display: flex;
  gap: 4px;
  list-style: none;
}

.nav-links button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: var(--muted);
  padding: 8px 14px;
  border-radius: 7px;
  transition: all 0.2s;
}

.nav-links button:hover {
  color: var(--gold);
  background: rgba(201, 169, 110, 0.07);
}

.nav-links button.active {
  color: var(--gold);
  background: rgba(201, 169, 110, 0.1);
}

/* hamburger */
.ham {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.ham span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
  transition: all .3s;
}

@media (max-width: 820px) {
  .nav {
    padding: 0 20px;
  }

  .nav-links {
    display: none;
  }

  .ham {
    display: flex;
  }

  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: var(--navy);
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    gap: 4px;
  }

  .nav-links.open button {
    text-align: left;
  }
}

/* ── PAGE SHELL ── */
.page {
  padding-top: 68px;
  min-height: 100vh;
}

.page-enter {
  animation: pageIn 0.45s ease both;
}

@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── HOME HERO ── */
.home-hero {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 24px;
}

.home-hero .bg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201, 169, 110, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 80% 30%, rgba(80, 110, 220, 0.05) 0%, transparent 60%);
}

.home-hero .grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(201, 169, 110, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201, 169, 110, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.hero-pill {
  display: inline-block;
  border: 1px solid rgba(201, 169, 110, 0.35);
  background: rgba(201, 169, 110, 0.08);
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 30px;
  margin-bottom: 32px;
}

.home-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 24px;
}

.home-hero h1 em {
  color: var(--gold);
  font-style: normal;
}

.home-hero p {
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.75;
  max-width: 540px;
  margin: 0 auto 48px;
  font-weight: 300;
}

.home-cta {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── STAT STRIP ── */
.stat-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stat-item {
  flex: 1;
  min-width: 160px;
  max-width: 260px;
  text-align: center;
  padding: 36px 20px;
  border-right: 1px solid var(--border);
}

.stat-item:last-child {
  border-right: none;
}

.stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--gold);
}

.stat-lbl {
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 4px;
  letter-spacing: 0.4px;
}

/* ── SERVICES GRID (home) ── */
.services-grid-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 90px 24px;
}

.services-grid-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 12px;
}

.services-grid-section .sub {
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 56px;
  font-weight: 300;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.service-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent);
  opacity: 0;
  transition: opacity 0.25s;
}

.service-card:hover {
  border-color: rgba(201, 169, 110, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.service-card:hover::before {
  opacity: 1;
}

.svc-icon {
  font-size: 2rem;
  margin-bottom: 18px;
}

.svc-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.svc-desc {
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 20px;
  font-weight: 300;
}

.svc-arrow {
  color: var(--gold);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* ── INNER PAGE HERO ── */
.inner-hero {
  position: relative;
  overflow: hidden;
  padding: 80px 24px 60px;
  text-align: center;
}

.inner-hero .bg-line {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201, 169, 110, 0.06) 0%, transparent 65%);
}

.inner-hero .breadcrumb {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 24px;
  cursor: pointer;
}

.inner-hero .breadcrumb span {
  color: var(--gold);
}

.inner-hero .tag {
  position: relative;
  z-index: 1;
  display: inline-block;
  background: rgba(201, 169, 110, 0.1);
  border: 1px solid rgba(201, 169, 110, 0.25);
  color: var(--gold);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.inner-hero h1 {
  position: relative;
  z-index: 1;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 18px;
}

.inner-hero h1 em {
  color: var(--gold);
  font-style: normal;
}

.inner-hero p {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto;
  font-weight: 300;
}

/* ── INNER PAGE CONTENT ── */
.inner-body {
  max-width: 1060px;
  margin: 0 auto;
  padding: 60px 24px 100px;
}

.info-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 60px;
}

@media (max-width: 780px) {
  .info-split {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

.info-block h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 18px;
}

.info-block p {
  font-size: 0.93rem;
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 16px;
  font-weight: 300;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
}

.feat-icon {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  flex-shrink: 0;
  background: rgba(201, 169, 110, 0.1);
  border: 1px solid rgba(201, 169, 110, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: var(--gold);
}

/* process steps */
.steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step {
  display: flex;
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.step:last-child {
  border-bottom: none;
}

.step-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: rgba(201, 169, 110, 0.25);
  line-height: 1;
  flex-shrink: 0;
  width: 40px;
}

.step-text h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.step-text p {
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.6;
  font-weight: 300;
}

/* CTA band */
.cta-band {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 44px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.cta-band-text h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.cta-band-text p {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.6;
}



.form-drawer-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 500;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
  animation: fadeIn .2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.form-drawer {
  position: absolute;
  top: 80px; left: 50%; 
  bottom: 40px;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 600px;
  max-height: calc(100vh - 120px);
  background: var(--navy);
  border: 1px solid var(--border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  animation: popIn .3s cubic-bezier(.22,1,.36,1) both;
}
@keyframes popIn {
  from { opacity: 0; transform: translateX(-50%) scale(0.50); }
  to   { opacity: 1; transform: translateX(-50%) scale(1); }
}

.drawer-handle {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 32px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: var(--navy);
  flex-shrink: 0;
  border-radius: 20px 20px 0 0;
}
.form-scrollable {
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.drawer-handle h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 700; color: #fff;
}
.drawer-close {
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: var(--muted); font-size: 1rem;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all .2s;
}
.drawer-close:hover { border-color: var(--gold); color: var(--gold); }

.form-inner { padding: 20px 32px 40px; }

.q-block { margin-bottom: 24px; }
.q-label {
  display: flex; align-items: baseline; gap: 10px;
  font-size: 0.88rem; font-weight: 600; color: var(--text); margin-bottom: 12px;
}
.q-label .qn {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem; font-weight: 700; color: var(--gold);
}
.opts { display: flex; flex-direction: column; gap: 8px; }
.opt {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 16px; border-radius: 9px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.025);
  color: var(--muted); font-size: 0.86rem;
  cursor: pointer; transition: all .18s;
  font-family: 'Outfit', sans-serif; text-align: left;
}
.opt:hover { border-color: rgba(201,169,110,0.3); color: var(--text); background: rgba(201,169,110,0.04); }
.opt.sel { border-color: var(--gold); background: rgba(201,169,110,0.09); color: var(--gold); }
.opt-mark {
  width: 16px; height: 16px; flex-shrink: 0;
  border-radius: 50%; border: 2px solid currentColor;
  display: flex; align-items: center; justify-content: center;
}
.opt.sel .opt-mark::after {
  content: ''; width: 7px; height: 7px;
  border-radius: 50%; background: var(--gold); display: block;
}
.opt-sq {
  width: 16px; height: 16px; flex-shrink: 0;
  border-radius: 4px; border: 2px solid currentColor;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem;
}
.opt.sel .opt-sq::after { content: '✓'; color: var(--gold); }

.form-submit {
  width: 100%; margin-top: 28px;
  background: var(--gold); color: var(--dark);
  font-family: 'Outfit', sans-serif;
  font-weight: 700; font-size: 0.92rem; letter-spacing: 0.3px;
  padding: 15px; border-radius: 10px; border: none;
  cursor: pointer; transition: all .22s;
}
.form-submit:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(201,169,110,0.3); }
.form-submit:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

.success-panel {
  text-align: center; padding: 56px 32px;
}
.success-panel .tick {
  width: 64px; height: 64px; border-radius: 50%;
  background: rgba(201,169,110,0.12); border: 1px solid rgba(201,169,110,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; margin: 0 auto 24px;
}
.success-panel h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 10px;
}
.success-panel p { font-size: 0.9rem; color: var(--muted); line-height: 1.65; }


/* ── CONTACT PAGE ── */
.contact-hero-section { max-width: 680px; margin: 0 auto; padding: 80px 24px 60px; text-align: center; }
.contact-hero-section h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; color: #fff; margin-bottom: 16px;
}
.contact-hero-section p { font-size: 0.95rem; color: var(--muted); line-height: 1.75; font-weight: 300; }
.contact-cards-grid {
  max-width: 860px; margin: 0 auto; padding: 0 24px 100px;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;
}
.contact-crd {
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 36px 28px; text-align: center; cursor: pointer;
  transition: all .25s; text-decoration: none; display: block;
}
.contact-crd:hover { border-color: rgba(201,169,110,0.4); transform: translateY(-4px); box-shadow: 0 14px 36px rgba(0,0,0,0.4); }
.contact-crd .c-icon { font-size: 2.2rem; margin-bottom: 16px; }
.contact-crd h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 8px;
}
.contact-crd p { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

/* ── SHARED BUTTONS ── */
.btn-gold {
  background: var(--gold); color: var(--dark);
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 0.88rem;
  padding: 13px 28px; border-radius: 9px; border: none;
  cursor: pointer; transition: all .22s; letter-spacing: 0.3px;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 22px rgba(201,169,110,0.3); }

.btn-ghost {
  background: transparent; color: var(--text);
  font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.88rem;
  padding: 13px 28px; border-radius: 9px;
  border: 1px solid rgba(255,255,255,0.12);
  cursor: pointer; transition: all .22s;
}
.btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

/* ── FOOTER ── */
.footer {
  border-top: 1px solid var(--border);
  text-align: center; padding: 28px 24px;
  font-size: 0.76rem; color: var(--muted);
}

/* ── CONTACT PAGE ── */
.contact-hero-section {
  max-width: 680px;
  margin: 0 auto;
  padding: 80px 24px 60px;
  text-align: center;
}

.contact-hero-section h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.contact-hero-section p {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.75;
  font-weight: 300;
}

.contact-cards-grid {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.contact-crd {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px 28px;
  text-align: center;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: block;
}

.contact-crd:hover {
  border-color: rgba(201, 169, 110, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
}

.contact-crd .c-icon {
  font-size: 2.2rem;
  margin-bottom: 16px;
}

.contact-crd h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.contact-crd p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ── SHARED BUTTONS ── */
.btn-gold {
  background: var(--gold);
  color: var(--dark);
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 13px 28px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  transition: all .22s;
  letter-spacing: 0.3px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-gold:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(201, 169, 110, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 13px 28px;
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition: all .22s;
}

.btn-ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* ── FOOTER ── */
.footer {
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 28px 24px;
  font-size: 0.76rem;
  color: var(--muted);
}

@media (max-width: 767px) {

  /* 1. Ensure the backdrop spans the entire mobile viewport screen perfectly */
  .form-drawer-bg {
    position: fixed !important;
    top: auto !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 99999 !important; /* Forces it above everything else on the page */
  }

  /* 2. Force the drawer to sit beautifully at the bottom of the screen */
  .form-drawer {
    position: fixed !important;
    top:0 !important; /* Let bottom positioning take precedence */
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    max-width: 100% !important;

    /* This gives it a perfect, predictable height (80% of screen height) */
    height: 80vh !important;
    max-height: 80vh !important;

    /* Reset desktop alignments */
    transform: none !important;
    margin: 0 !important;

    /* Styling adjustments */
    border-radius: 24px 24px 0 0 !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: none !important;
    z-index: 100000 !important;

    /* Animation override */
    animation: mobileSlideUp .3s cubic-bezier(.22, 1, .36, 1) forwards !important;
  }

  /* 3. New mobile animation without desktop's translateX conflict */
  @keyframes mobileSlideUp {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

  /* 4. Fix paddings so text doesn't touch phone edges */
  .drawer-handle,
  .form-inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {

  /* 1. Reset the backdrop container layout */
  .form-drawer-bg {
    display: flex !important;
    align-items: flex-end !important; /* Forces layout to start at the bottom screen edge */
    justify-content: center !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* 2. Completely redefine the drawer for tiny screens */
  .form-drawer {
    /* Kill all absolute/desktop positioning completely */
    position: relative !important;
    top: auto !important;
    bottom: 0 !important;
    left: auto !important;
    transform: none !important; /* Removes the desktop translateX(-50%) which breaks 320px widths */
    margin: 0 !important;

    /* Force size fitting for 320px - 425px screens */
    width: 100vw !important;
    max-width: 100vw !important;
    height: 85vh !important;     /* Forces it to open up 85% of the screen height */
    max-height: 85vh !important;

    /* Clean up mobile borders */
    border-radius: 20px 20px 0 0 !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: none !important;

    /* Fresh animation built only for small mobile screens */
    animation: mobileSlideUp 0.3s cubic-bezier(.22,1,.36,1) forwards !important;
  }

  /* 3. Dedicated mobile animation keyframe */
  @keyframes mobileSlideUp {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  /* 4. Shrink internal spacing so text doesn't clip on 320px screens */
  .drawer-handle {
    padding: 16px 20px 12px !important;
  }
  .form-inner {
    padding: 16px 20px 30px !important;
  }
  .opt {
    padding: 10px 12px !important; /* Slimmer buttons for small screens */
  }
}

/* ── CALENDLY MODAL STYLES ── */
.calendly-drawer {
  max-width: 820px !important;
}

.calendar-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background: var(--navy);
  z-index: 10;
}

.calendar-loader p {
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 16px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(201, 169, 110, 0.1);
  border-radius: 50%;
  border-top-color: var(--gold);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── REQUEST INFO FORM STYLES ── */
.input-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
  text-align: left;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  transition: all 0.2s ease;
  outline: none;
}

.form-input:focus {
  border-color: var(--gold);
  background: rgba(201, 169, 110, 0.04);
  box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.12);
}

.form-input::placeholder {
  color: #4b5563;
}

.form-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}
`;
