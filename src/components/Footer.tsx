"use client";
// src/components/Footer.tsx

import Image from "next/image";
import { useLang } from "@/components/LangProvider";

const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9t4cOwNZzWW3LLxd7iTWdtNjAwdd9IUUoA&s";

const SECTION_HREFS = ["#about", "#events", "#sharing", "#community"];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
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
            </div>
            <div className="foot-tag">
              {t.footer.tag[0]}
              {t.footer.tag[1]}
              <em>{t.footer.tag[2]}</em>
            </div>
            <div className="eyebrow" style={{ marginTop: 12 }}>
              Madagascar · since 2018
            </div>
          </div>
          <div>
            <h4>{t.footer.col_explore}</h4>
            <ul>
              {t.footer.links_explore.map((l, i) => (
                <li key={i}>
                  <a href={SECTION_HREFS[i]}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.col_programs}</h4>
            <ul>
              {t.footer.links_programs.map((l, i) => (
                <li key={i}>
                  <a href="#events">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.col_connect}</h4>
            <ul>
              <li>
                <a
                  href="https://web.facebook.com/Techzara/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="#contact">Discord</a>
              </li>
              <li>
                <a href="#contact">GitHub</a>
              </li>
              <li>
                <a href="#contact">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-wm">
          Tech<em>Zara</em>
        </div>

        <div className="foot-bot">
          <span>{t.footer.copy}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
