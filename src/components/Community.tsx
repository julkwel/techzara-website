"use client";
// src/components/Community.tsx

import { useLang } from "@/components/LangProvider";

export default function Community() {
  const { t } = useLang();

  return (
    <section className="community" id="community">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.community.eyebrow}</div>
            <h2>
              {t.community.title[0]}
              <em>{t.community.title[1]}</em>
            </h2>
          </div>
          <div className="head-side">{t.community.side}</div>
        </div>

        <div className="uni-wrap">
          <div className="uni-head">
            <span>// partner_universities.list</span>
            <span className="live">
              <i></i>
              {t.community.live}
            </span>
          </div>
          <div className="uni-grid">
            {t.community.universities.map((u, i) => (
              <div className="uni" key={i}>
                <div className="uni-name">{u.name}</div>
                <div className="uni-loc">{u.loc}</div>
                <div className="uni-members">▲ {u.members}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
