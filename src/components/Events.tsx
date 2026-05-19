"use client";
// src/components/Events.tsx

import { useLang } from "@/components/LangProvider";

function HackathonIllu() {
  return (
    <svg className="event-illu" viewBox="0 0 400 400" fill="none">
      <g stroke="currentColor" strokeWidth="1" opacity="0.25">
        <line x1="80" y1="120" x2="200" y2="80" />
        <line x1="200" y1="80" x2="320" y2="140" />
        <line x1="80" y1="120" x2="160" y2="240" />
        <line x1="320" y1="140" x2="280" y2="280" />
        <line x1="200" y1="80" x2="160" y2="240" />
        <line x1="160" y1="240" x2="280" y2="280" />
        <line x1="200" y1="80" x2="220" y2="200" />
        <line x1="220" y1="200" x2="280" y2="280" />
        <line x1="220" y1="200" x2="160" y2="240" />
      </g>
      <g fill="currentColor">
        <circle cx="80" cy="120" r="6" />
        <circle cx="320" cy="140" r="6" />
        <circle cx="160" cy="240" r="6" />
        <circle cx="280" cy="280" r="6" />
      </g>
      <g fill="var(--accent)">
        <circle cx="200" cy="80" r="9" />
        <circle cx="220" cy="200" r="9" />
      </g>
      <circle
        cx="200"
        cy="80"
        r="18"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="220"
        cy="200"
        r="22"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}

function ITConnectIllu() {
  return (
    <svg className="event-illu" viewBox="0 0 400 400" fill="none">
      <g stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none">
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="110" />
        <circle cx="200" cy="200" r="160" />
        <circle cx="200" cy="200" r="210" />
      </g>
      <circle cx="200" cy="200" r="18" fill="var(--accent)" />
      <circle
        cx="200"
        cy="200"
        r="32"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <g fill="currentColor">
        <circle cx="60" cy="200" r="5" />
        <circle cx="340" cy="200" r="5" />
        <circle cx="200" cy="60" r="5" />
        <circle cx="200" cy="340" r="5" />
        <circle cx="98" cy="98" r="4" />
        <circle cx="302" cy="98" r="4" />
        <circle cx="98" cy="302" r="4" />
        <circle cx="302" cy="302" r="4" />
      </g>
    </svg>
  );
}

export default function Events() {
  const { t } = useLang();

  return (
    <section id="events">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.events.eyebrow}</div>
            <h2>
              {t.events.title[0]}
              <em>{t.events.title[1]}</em>
            </h2>
          </div>
          <div className="head-side">{t.events.side}</div>
        </div>
        <div className="events-grid">
          <article className="event big">
            <div className="event-tag">
              <span className="dot"></span>
              {t.events.hackathon.tag}
            </div>
            <h3>{t.events.hackathon.title}</h3>
            <p>{t.events.hackathon.desc}</p>
            <div className="event-meta">
              {t.events.hackathon.meta.map((m, i) => (
                <span key={i}>
                  {m[0]} · <b>{m[1]}</b>
                </span>
              ))}
            </div>
            <HackathonIllu />
          </article>

          <article className="event sm">
            <div className="event-tag">
              <span className="dot"></span>
              {t.events.itconnect.tag}
            </div>
            <h3>{t.events.itconnect.title}</h3>
            <p>{t.events.itconnect.desc}</p>
            <div className="event-meta">
              {t.events.itconnect.meta.map((m, i) => (
                <span key={i}>
                  {m[0]} · <b>{m[1]}</b>
                </span>
              ))}
            </div>
            <ITConnectIllu />
          </article>

          <article className="event terminal full">
            <div className="event-tag">
              <span className="dot"></span>
              {t.events.wcc.tag}
            </div>
            <h3>{t.events.wcc.title}</h3>
            <p>{t.events.wcc.desc}</p>
            <div className="terminal-body">
              {t.events.wcc.terminal.map((l, i) => (
                <span className="line" key={i}>
                  {l.type === "prompt" && (
                    <span className="prompt">{l.text}</span>
                  )}
                  {l.type === "cmt" && <span className="cmt">{l.text}</span>}
                  {l.type === "out" && <span>{l.text}</span>}
                  {i === t.events.wcc.terminal.length - 1 && (
                    <span className="cur"></span>
                  )}
                </span>
              ))}
            </div>
            <div className="event-meta">
              {t.events.wcc.meta.map((m, i) => (
                <span key={i}>
                  {m[0]} · <b>{m[1]}</b>
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
