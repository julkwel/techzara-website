"use client";
// src/components/Contact.tsx

import { useState } from "react";
import { useLang } from "@/components/LangProvider";

function IconPhone() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconFB() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function IconPin() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: t.contact.form.topic_opts[0],
    msg: "",
  });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({
      name: "",
      email: "",
      topic: t.contact.form.topic_opts[0],
      msg: "",
    });
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>
            {t.contact.title[0]}
            <em>{t.contact.title[1]}</em>
            {t.contact.title[2]}
          </h2>
          <p className="lede">{t.contact.lede}</p>

          <div className="contact-info">
            <a href="tel:+261329473033">
              <div className="icon-cell">
                <IconPhone />
              </div>
              <div>
                <div className="ci-label">{t.contact.info_phone_l}</div>
                <div className="ci-val">+261 32 94 730 33</div>
              </div>
            </a>
            <a
              href="https://web.facebook.com/Techzara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-cell">
                <IconFB />
              </div>
              <div>
                <div className="ci-label">{t.contact.info_fb_l}</div>
                <div className="ci-val">{t.contact.info_fb_v}</div>
              </div>
            </a>
            <div className="row">
              <div className="icon-cell">
                <IconPin />
              </div>
              <div>
                <div className="ci-label">{t.contact.info_addr_l}</div>
                <div className="ci-val">{t.contact.info_addr_v}</div>
              </div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="form-row">
            <div className="field">
              <label>{t.contact.form.name_l}</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.contact.form.name_p}
              />
            </div>
            <div className="field">
              <label>{t.contact.form.email_l}</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.contact.form.email_p}
              />
            </div>
          </div>
          <div className="field">
            <label>{t.contact.form.topic_l}</label>
            <select
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            >
              {t.contact.form.topic_opts.map((o, i) => (
                <option key={i}>{o}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t.contact.form.msg_l}</label>
            <textarea
              required
              rows={4}
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              placeholder={t.contact.form.msg_p}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            {t.contact.form.submit}
            <span className="arrow">
              <IconArrow />
            </span>
          </button>
          {sent && (
            <div className="form-success">{t.contact.form.success}</div>
          )}
        </form>
      </div>
    </section>
  );
}
