"use client";
// src/components/TechSharing.tsx

import { useLang } from "@/components/LangProvider";

export default function TechSharing() {
  const { t } = useLang();

  return (
    <section id="sharing">
      <div className="wrap share">
        <div className="share-text">
          <div className="eyebrow">{t.share.eyebrow}</div>
          <h2>
            {t.share.title[0]}
            <em>{t.share.title[1]}</em>
            {t.share.title[2]}
          </h2>
          <p>{t.share.lede}</p>
          <ul className="share-list">
            {t.share.list.map((item, i) => (
              <li key={i}>
                <span className="num">0{i + 1}</span>
                <span>
                  <b>{item.b}</b> <span>{item.t}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="share-card">
          <div className="sc-head">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>~/techzara/</span>
            <span style={{ color: "var(--accent)" }}>{t.share.code_file}</span>
          </div>
          <div className="sc-body">
            <div className="ln">
              <span className="lnum">1</span>
              <span>
                <span className="cmt">// Mandray. Mivelona. Mizara.</span>
              </span>
            </div>
            <div className="ln">
              <span className="lnum">2</span>
              <span>
                <span className="kw">export</span>{" "}
                <span className="kw">type</span>{" "}
                <span className="fn">Knowledge</span> = &#123;
              </span>
            </div>
            <div className="ln">
              <span className="lnum">3</span>
              <span>
                {"  "}receive: () =&gt; <span className="st">&apos;no gatekeeping&apos;</span>,
              </span>
            </div>
            <div className="ln">
              <span className="lnum">4</span>
              <span>
                {"  "}live:{"    "}() =&gt; <span className="st">&apos;ship every week&apos;</span>,
              </span>
            </div>
            <div className="ln">
              <span className="lnum">5</span>
              <span>
                {"  "}share:{"   "}() =&gt; <span className="st">&apos;pass it on&apos;</span>,
              </span>
            </div>
            <div className="ln">
              <span className="lnum">6</span>
              <span>&#125;;</span>
            </div>
            <div className="ln">
              <span className="lnum">7</span>
              <span></span>
            </div>
            <div className="ln">
              <span className="lnum">8</span>
              <span>
                <span className="kw">const</span> techzara ={" "}
                <span className="fn">community</span>(
                <span className="st">&apos;mg&apos;</span>);
              </span>
            </div>
            <div className="ln">
              <span className="lnum">9</span>
              <span>
                techzara.<span className="fn">grow</span>();
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 14,
                    background: "var(--accent)",
                    verticalAlign: -2,
                    marginLeft: 6,
                    animation: "blink 1s steps(2,start) infinite",
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="sc-foot">
            <div className="info">{t.share.code_status}</div>
            <button>
              ★ <span className="react-count">128</span>
            </button>
            <button>↗ fork</button>
          </div>
        </div>
      </div>
    </section>
  );
}
