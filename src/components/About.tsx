"use client";
// src/components/About.tsx

import { useLang } from "@/components/LangProvider";
import type { ReactNode } from "react";

function GlyphReceive() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}

function GlyphLive() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h3l2-7 4 14 2-7h7" />
    </svg>
  );
}

function GlyphShare() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8L15.8 6.2M8.2 13.2L15.8 17.8" />
    </svg>
  );
}

const GLYPHS: Array<() => ReactNode> = [GlyphReceive, GlyphLive, GlyphShare];

export default function About() {
  const { t } = useLang();

  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.about.eyebrow}</div>
            <h2>
              {t.about.title[0]}
              <em>{t.about.title[1]}</em>
            </h2>
          </div>
          <div className="head-side">{t.about.side}</div>
        </div>
        <div className="values">
          {t.about.values.map((v, i) => {
            const Glyph = GLYPHS[i];
            return (
              <div className="value" key={i}>
                <div className="value-glyph">
                  <Glyph />
                </div>
                <div className="value-kw">{v.kw}</div>
                <h3>
                  <span className="ml">{v.ml}</span>
                  <span className="tr">{v.tr}</span>
                </h3>
                <p>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
