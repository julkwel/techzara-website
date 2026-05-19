"use client";
// src/components/Hero.tsx

import { useLang } from "@/components/LangProvider";

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

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="top">
      <div className="hero-glow"></div>
      <div className="hero-grid-bg"></div>
      <div className="wrap hero-inner">
        <div className="hero-meta">
          <div className="hero-pill">
            <span className="tag">{t.hero.pill_tag}</span>
            <span>{t.hero.pill_text}</span>
          </div>
          <div className="eyebrow">
            Madagascar · Tech association · est. 2018
          </div>
        </div>

        <h1>
          <span className="word">{t.hero.tagline_words[0]}</span>
          <span className="word">{t.hero.tagline_words[1]}</span>
          <span className="word">{t.hero.tagline_words[2]}</span>
        </h1>

        <p className="hero-sub">
          {t.hero.sub_a}
          <strong>{t.hero.sub_b}</strong>
          {t.hero.sub_c}
          <strong>{t.hero.sub_d}</strong>
          {t.hero.sub_e}
          <strong>{t.hero.sub_f}</strong>
          {t.hero.sub_g}
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            {t.hero.cta_primary}
            <span className="arrow">
              <IconArrow />
            </span>
          </a>
          <a href="#events" className="btn btn-ghost">
            {t.hero.cta_secondary}
          </a>
        </div>

        <div className="hero-stats">
          {t.hero.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
