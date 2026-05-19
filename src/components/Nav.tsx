"use client";
// src/components/Nav.tsx

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";
import { useTheme } from "@/components/ThemeProvider";

const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9t4cOwNZzWW3LLxd7iTWdtNjAwdd9IUUoA&s";

function IconSun() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

function IconCaret() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 30" width="20" height="14">
      <clipPath id="t">
        <path d="M0,0v30h60V0z" />
      </clipPath>
      <clipPath id="s">
        <path d="M30,15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#t)">
        <path d="M0,0v30h60V0z" fill="#012169" />
        <path d="M0,0 60,30M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 60,30M60,0 0,30"
          clipPath="url(#s)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagFR() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="14">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  );
}

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <>
    <button
      className="floating-theme-btn"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <Image
            src={LOGO_URL}
            alt="Techzara"
            width={32}
            height={32}
            style={{ borderRadius: "50%" }}
            unoptimized
          />
          <span>
            Techzara<span className="dot">.</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#events">{t.nav.events}</a>
          <a href="#sharing">{t.nav.sharing}</a>
          <a href="#community">{t.nav.community}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="nav-actions">
          <div className="lang-wrap" ref={langRef}>
            <button
              className="lang-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((o) => !o);
              }}
            >
              <span className="flag">
                {lang === "en" ? <FlagEN /> : <FlagFR />}
              </span>
              <span>{lang.toUpperCase()}</span>
              <span className="caret">
                <IconCaret />
              </span>
            </button>
            {langOpen && (
              <div className="lang-menu">
                <button
                  className={lang === "en" ? "active" : ""}
                  onClick={() => {
                    setLang("en");
                    setLangOpen(false);
                  }}
                >
                  <span className="flag">
                    <FlagEN />
                  </span>{" "}
                  English
                </button>
                <button
                  className={lang === "fr" ? "active" : ""}
                  onClick={() => {
                    setLang("fr");
                    setLangOpen(false);
                  }}
                >
                  <span className="flag">
                    <FlagFR />
                  </span>{" "}
                  Français
                </button>
              </div>
            )}
          </div>

          <button
            className="icon-btn nav-theme-desktop"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary nav-join"
            style={{ height: 38, padding: "0 16px", fontSize: 13.5 }}
          >
            {t.nav.join}
            <span className="arrow">
              <IconArrow />
            </span>
          </a>

          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.nav.about}
        </a>
        <a href="#events" onClick={() => setMenuOpen(false)}>
          {t.nav.events}
        </a>
        <a href="#sharing" onClick={() => setMenuOpen(false)}>
          {t.nav.sharing}
        </a>
        <a href="#community" onClick={() => setMenuOpen(false)}>
          {t.nav.community}
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t.nav.contact}
        </a>
      </div>
    </header>
    </>
  );
}
