// ============= TECHZARA i18n =============
const STRINGS = {
  en: {
    nav: {
      about: "About",
      events: "Events",
      sharing: "Tech Sharing",
      community: "Community",
      contact: "Contact",
      join: "Join the community",
    },
    hero: {
      pill_tag: "v2026",
      pill_text: "Hackathon Inter-Universitaire — Registrations open",
      // tagline kept in Malagasy intentionally
      tagline_words: ["Mandray.", "Mivelona.", "Mizara."],
      sub_a: "A community in Madagascar for everyone who lives and breathes tech. We ",
      sub_b: "receive",
      sub_c: ", ",
      sub_d: "live",
      sub_e: " and ",
      sub_f: "share",
      sub_g: " — from undergrads to senior engineers, from Antananarivo to Toamasina.",
      cta_primary: "Get involved",
      cta_secondary: "Explore our events",
      stats: [
        { n: "1,400+", l: "Active members" },
        { n: "12", l: "Partner universities" },
        { n: "60+", l: "Events delivered" },
        { n: "8 yrs", l: "Building together" },
      ],
    },
    about: {
      eyebrow: "// about the association",
      title: ["What it means to be ", "Techzara"],
      side: "Three Malagasy verbs guide everything we do. They sound simple. In a growing tech ecosystem, they are everything.",
      values: [
        {
          kw: "01 / Receive",
          ml: "Mandray.",
          tr: "Welcome every learner.",
          desc: "Whether you wrote your first hello-world yesterday or your first kernel patch last year — you belong here. No gatekeeping.",
        },
        {
          kw: "02 / Live",
          ml: "Mivelona.",
          tr: "Practice the craft.",
          desc: "We don't talk about tech in theory. We build, ship, fail, debug, and ship again — together, every week of the year.",
        },
        {
          kw: "03 / Share",
          ml: "Mizara.",
          tr: "Pass it on.",
          desc: "What you learn isn't yours alone. Talks, code reviews, mentorships — knowledge circulates so the whole island levels up.",
        },
      ],
    },
    events: {
      eyebrow: "// what we run",
      title: ["Where the community ", "meets"],
      side: "Three flagship programs run year-round. Free, open to all, hosted across partner campuses and on the Techzara discord.",
      hackathon: {
        tag: "Flagship · Annual",
        title: "Hackathon Inter-Universitaire",
        desc: "48 hours, twelve campuses, one prompt. Mixed teams from every partner university ship a working prototype against a real Malagasy challenge — agriculture, fintech, civic tech, energy.",
        meta: [["Edition", "2026"], ["Teams", "48"], ["Format", "On-site + remote"]],
      },
      itconnect: {
        tag: "Quarterly meetup",
        title: "IT Connect",
        desc: "Industry meets students. Engineers from local and global companies share what they actually work on — architectures, post-mortems, career paths.",
        meta: [["Next", "Jun 14"], ["Talks", "4"], ["Location", "IFM Analakely"]],
      },
      wcc: {
        tag: "Every Saturday",
        title: "Weekly Coding Challenge",
        desc: "Sharpen the saw. A new problem drops every Saturday morning. Solo or in teams — share your solution, get reviewed, level up.",
        meta: [["Streak", "112 weeks"], ["Solvers", "210/wk"], ["Lang", "Any"]],
        terminal: [
          { type: "prompt", text: "$ techzara challenge --week 113" },
          { type: "cmt", text: "// Brief: parse SMS-money receipts, normalize amounts." },
          { type: "out", text: "✓ Test suite ready · 4 sample inputs · solutions due Sat 23:59" },
        ],
      },
    },
    share: {
      eyebrow: "// tech sharing, our focus",
      title: ["Knowledge that ", "circulates", " is knowledge that compounds."],
      lede: "Tech Sharing isn't a feature — it's the whole point. Every member gives, every member receives. Here's how it actually works week to week:",
      list: [
        { b: "Open mic Fridays.", t: "Any member can present a 10-minute lightning talk. No slides required." },
        { b: "Code review pool.", t: "Drop a pull request, three reviewers respond inside 24 hours." },
        { b: "Mentor pairing.", t: "Junior <> senior pairs run for one cycle (8 weeks). 70+ pairs active." },
        { b: "Public archive.", t: "Every talk, every challenge solution, indexed and searchable." },
      ],
      code_file: "sharing.ts",
      code_status: "edited just now · pushed by @hanitra",
    },
    community: {
      eyebrow: "// our campuses",
      title: ["From every campus on the ", "island"],
      side: "Twelve partner universities and counting. Local leads run weekly meetups on each campus and coordinate national events together.",
      live: "12 campuses online",
      universities: [
        { name: "ESPA", loc: "Antananarivo", members: "240 members" },
        { name: "ENI Fianarantsoa", loc: "Fianarantsoa", members: "180 members" },
        { name: "ISPM", loc: "Antananarivo", members: "165 members" },
        { name: "Université d'Antananarivo", loc: "Ankatso", members: "210 members" },
        { name: "INSCAE", loc: "Antananarivo", members: "95 members" },
        { name: "ISTE", loc: "Antsirabe", members: "70 members" },
        { name: "Université de Toamasina", loc: "Toamasina", members: "110 members" },
        { name: "Université de Mahajanga", loc: "Mahajanga", members: "85 members" },
      ],
    },
    contact: {
      eyebrow: "// say hello",
      title: ["Want in? ", "Reach out", "."],
      lede: "Drop us a line — to join, to host a talk, to partner on the next hackathon, or just to say hi to the team.",
      info_phone_l: "Call us",
      info_fb_l: "Facebook",
      info_fb_v: "fb.com/Techzara",
      info_addr_l: "Where we gather",
      info_addr_v: "Antananarivo, Madagascar — and every partner campus",
      form: {
        name_l: "Your name",
        name_p: "Hanitra R.",
        email_l: "Email",
        email_p: "hanitra@example.mg",
        topic_l: "Topic",
        topic_opts: ["Join the community", "Host a talk", "Partnership", "General"],
        msg_l: "Message",
        msg_p: "Tell us what you'd like to share, build, or learn…",
        submit: "Send message",
        success: "✓ Message sent. We reply within 48h.",
      },
    },
    footer: {
      tag: ["Mandray. ", "Mivelona. ", "Mizara."],
      col_explore: "Explore",
      col_programs: "Programs",
      col_connect: "Connect",
      links_explore: ["About", "Events", "Tech Sharing", "Community"],
      links_programs: ["Hackathon Inter-U.", "IT Connect", "Weekly Coding", "Mentor pairing"],
      links_connect: ["Facebook", "Discord", "GitHub", "Newsletter"],
      copy: "© 2026 Techzara · Tech association of Madagascar",
      built: "Built with ♥ by the community",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      events: "Événements",
      sharing: "Partage Tech",
      community: "Communauté",
      contact: "Contact",
      join: "Rejoindre",
    },
    hero: {
      pill_tag: "v2026",
      pill_text: "Hackathon Inter-Universitaire — Inscriptions ouvertes",
      tagline_words: ["Mandray.", "Mivelona.", "Mizara."],
      sub_a: "Une communauté à Madagascar pour tous les passionnés de tech. Nous ",
      sub_b: "recevons",
      sub_c: ", ",
      sub_d: "vivons",
      sub_e: " et ",
      sub_f: "partageons",
      sub_g: " — de l'étudiant débutant à l'ingénieur confirmé, d'Antananarivo à Toamasina.",
      cta_primary: "Nous rejoindre",
      cta_secondary: "Voir nos événements",
      stats: [
        { n: "1 400+", l: "Membres actifs" },
        { n: "12", l: "Universités partenaires" },
        { n: "60+", l: "Événements organisés" },
        { n: "8 ans", l: "À construire ensemble" },
      ],
    },
    about: {
      eyebrow: "// à propos de l'association",
      title: ["Ce que signifie être ", "Techzara"],
      side: "Trois verbes malgaches guident tout ce que nous faisons. Cela semble simple. Dans un écosystème tech en pleine croissance, c'est tout.",
      values: [
        {
          kw: "01 / Recevoir",
          ml: "Mandray.",
          tr: "Accueillir chaque apprenant.",
          desc: "Que vous ayez écrit votre premier hello-world hier ou votre premier patch noyau l'an dernier — vous avez votre place ici. Pas de gatekeeping.",
        },
        {
          kw: "02 / Vivre",
          ml: "Mivelona.",
          tr: "Pratiquer le métier.",
          desc: "On ne parle pas de tech en théorie. On construit, on déploie, on échoue, on debug, on recommence — ensemble, chaque semaine de l'année.",
        },
        {
          kw: "03 / Partager",
          ml: "Mizara.",
          tr: "Transmettre.",
          desc: "Ce que vous apprenez ne vous appartient pas seul. Talks, code reviews, mentorat — le savoir circule pour que toute l'île progresse.",
        },
      ],
    },
    events: {
      eyebrow: "// ce que nous organisons",
      title: ["Là où la communauté ", "se retrouve"],
      side: "Trois programmes phares toute l'année. Gratuits, ouverts à tous, accueillis dans les campus partenaires et sur le Discord Techzara.",
      hackathon: {
        tag: "Phare · Annuel",
        title: "Hackathon Inter-Universitaire",
        desc: "48 heures, douze campus, un sujet. Des équipes mixtes de chaque université partenaire livrent un prototype fonctionnel face à un vrai défi malgache — agriculture, fintech, civic tech, énergie.",
        meta: [["Édition", "2026"], ["Équipes", "48"], ["Format", "Sur site + à distance"]],
      },
      itconnect: {
        tag: "Meetup trimestriel",
        title: "IT Connect",
        desc: "L'industrie rencontre les étudiants. Des ingénieurs d'entreprises locales et internationales partagent leur quotidien — architectures, post-mortems, parcours.",
        meta: [["Prochain", "14 juin"], ["Talks", "4"], ["Lieu", "IFM Analakely"]],
      },
      wcc: {
        tag: "Chaque samedi",
        title: "Weekly Coding Challenge",
        desc: "Aiguiser la lame. Un nouveau problème chaque samedi matin. Seul ou en équipe — partagez votre solution, recevez des reviews, progressez.",
        meta: [["Série", "112 sem."], ["Participants", "210/sem."], ["Langage", "Libre"]],
        terminal: [
          { type: "prompt", text: "$ techzara challenge --semaine 113" },
          { type: "cmt", text: "// Sujet : parser les SMS Mobile Money, normaliser les montants." },
          { type: "out", text: "✓ Tests prêts · 4 inputs · solutions dues sam. 23h59" },
        ],
      },
    },
    share: {
      eyebrow: "// le partage tech, notre obsession",
      title: ["Le savoir qui ", "circule", " est un savoir qui se multiplie."],
      lede: "Le partage tech n'est pas une fonctionnalité — c'est tout le sens. Chaque membre donne, chaque membre reçoit. Voici comment ça marche, concrètement :",
      list: [
        { b: "Open mic du vendredi.", t: "Tout membre peut donner un lightning talk de 10 min. Sans slides si vous voulez." },
        { b: "Pool de code review.", t: "Postez votre PR, trois reviewers répondent sous 24h." },
        { b: "Binôme mentor.", t: "Junior <> senior pour un cycle (8 semaines). 70+ binômes actifs." },
        { b: "Archive publique.", t: "Chaque talk, chaque solution, indexé et cherchable." },
      ],
      code_file: "partage.ts",
      code_status: "modifié à l'instant · poussé par @hanitra",
    },
    community: {
      eyebrow: "// nos campus",
      title: ["De chaque campus de ", "l'île"],
      side: "Douze universités partenaires, et plus chaque année. Des leaders locaux animent des meetups hebdomadaires et coordonnent les événements nationaux.",
      live: "12 campus en ligne",
      universities: [
        { name: "ESPA", loc: "Antananarivo", members: "240 membres" },
        { name: "ENI Fianarantsoa", loc: "Fianarantsoa", members: "180 membres" },
        { name: "ISPM", loc: "Antananarivo", members: "165 membres" },
        { name: "Université d'Antananarivo", loc: "Ankatso", members: "210 membres" },
        { name: "INSCAE", loc: "Antananarivo", members: "95 membres" },
        { name: "ISTE", loc: "Antsirabe", members: "70 membres" },
        { name: "Université de Toamasina", loc: "Toamasina", members: "110 membres" },
        { name: "Université de Mahajanga", loc: "Mahajanga", members: "85 membres" },
      ],
    },
    contact: {
      eyebrow: "// dites-nous bonjour",
      title: ["Envie d'y être ? ", "Contactez-nous", "."],
      lede: "Écrivez-nous — pour rejoindre, proposer un talk, devenir partenaire du prochain hackathon, ou juste saluer l'équipe.",
      info_phone_l: "Appelez-nous",
      info_fb_l: "Facebook",
      info_fb_v: "fb.com/Techzara",
      info_addr_l: "Où l'on se retrouve",
      info_addr_v: "Antananarivo, Madagascar — et chaque campus partenaire",
      form: {
        name_l: "Votre nom",
        name_p: "Hanitra R.",
        email_l: "Email",
        email_p: "hanitra@exemple.mg",
        topic_l: "Sujet",
        topic_opts: ["Rejoindre la communauté", "Proposer un talk", "Partenariat", "Général"],
        msg_l: "Message",
        msg_p: "Dites-nous ce que vous aimeriez partager, construire ou apprendre…",
        submit: "Envoyer",
        success: "✓ Message envoyé. Nous répondons sous 48h.",
      },
    },
    footer: {
      tag: ["Mandray. ", "Mivelona. ", "Mizara."],
      col_explore: "Explorer",
      col_programs: "Programmes",
      col_connect: "Connecter",
      links_explore: ["À propos", "Événements", "Partage Tech", "Communauté"],
      links_programs: ["Hackathon Inter-U.", "IT Connect", "Weekly Coding", "Binôme mentor"],
      links_connect: ["Facebook", "Discord", "GitHub", "Newsletter"],
      copy: "© 2026 Techzara · Association tech de Madagascar",
      built: "Construit avec ♥ par la communauté",
    },
  },
};

// ============= TECHZARA COMPONENTS =============
const { useState, useEffect, useRef } = React;

const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9t4cOwNZzWW3LLxd7iTWdtNjAwdd9IUUoA&s";

// ---------- ICONS ----------
const Icon = {
  sun: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  moon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  menu: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  ),
  caret: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  fb: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  ),
  pin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  glyph_receive: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  ),
  glyph_live: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h3l2-7 4 14 2-7h7" />
    </svg>
  ),
  glyph_share: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8L15.8 6.2M8.2 13.2L15.8 17.8" />
    </svg>
  ),
};

// ---------- FLAG ICONS (simple SVG) ----------
const Flag = {
  en: () => (
    <svg viewBox="0 0 60 30" width="20" height="14">
      <clipPath id="t"><path d="M0,0v30h60V0z" /></clipPath>
      <clipPath id="s"><path d="M30,15h30v15zv15H0zH0V0zV0h30z" /></clipPath>
      <g clipPath="url(#t)">
        <path d="M0,0v30h60V0z" fill="#012169" />
        <path d="M0,0 60,30M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 60,30M60,0 0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  ),
  fr: () => (
    <svg viewBox="0 0 30 20" width="20" height="14">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  ),
};

// ---------- NAV ----------
function Nav({ t, lang, setLang, theme, setTheme }) {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef();

  useEffect(() => {
    const onDoc = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={LOGO_URL} alt="Techzara" />
          <span>Techzara<span className="dot">.</span></span>
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
            <button className="lang-btn" onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o); }}>
              <span className="flag">{lang === 'en' ? <Flag.en /> : <Flag.fr />}</span>
              <span>{lang.toUpperCase()}</span>
              <span className="caret"><Icon.caret /></span>
            </button>
            {langOpen && (
              <div className="lang-menu">
                <button className={lang === 'en' ? 'active' : ''} onClick={() => { setLang('en'); setLangOpen(false); }}>
                  <span className="flag"><Flag.en /></span> English
                </button>
                <button className={lang === 'fr' ? 'active' : ''} onClick={() => { setLang('fr'); setLangOpen(false); }}>
                  <span className="flag"><Flag.fr /></span> Français
                </button>
              </div>
            )}
          </div>

          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
          </button>

          <a href="#contact" className="btn btn-primary" style={{ height: 38, padding: '0 16px', fontSize: 13.5 }}>
            {t.nav.join}<span className="arrow"><Icon.arrow /></span>
          </a>

          <button className="icon-btn menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
        <a href="#events" onClick={() => setMenuOpen(false)}>{t.nav.events}</a>
        <a href="#sharing" onClick={() => setMenuOpen(false)}>{t.nav.sharing}</a>
        <a href="#community" onClick={() => setMenuOpen(false)}>{t.nav.community}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
      </div>
    </header>
  );
}

// ---------- HERO ----------
function Hero({ t }) {
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
          <div className="eyebrow">Madagascar · Tech association · est. 2018</div>
        </div>

        <h1>
          <span className="word">{t.hero.tagline_words[0]}</span>
          <span className="word">{t.hero.tagline_words[1]}</span>
          <span className="word">{t.hero.tagline_words[2]}</span>
        </h1>

        <p className="hero-sub">
          {t.hero.sub_a}<strong>{t.hero.sub_b}</strong>{t.hero.sub_c}<strong>{t.hero.sub_d}</strong>{t.hero.sub_e}<strong>{t.hero.sub_f}</strong>{t.hero.sub_g}
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">{t.hero.cta_primary}<span className="arrow"><Icon.arrow /></span></a>
          <a href="#events" className="btn btn-ghost">{t.hero.cta_secondary}</a>
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

// ---------- ABOUT ----------
function About({ t }) {
  const glyphs = [Icon.glyph_receive, Icon.glyph_live, Icon.glyph_share];
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.about.eyebrow}</div>
            <h2>{t.about.title[0]}<em>{t.about.title[1]}</em></h2>
          </div>
          <div className="head-side">{t.about.side}</div>
        </div>
        <div className="values">
          {t.about.values.map((v, i) => {
            const G = glyphs[i];
            return (
              <div className="value" key={i}>
                <div className="value-glyph"><G /></div>
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

// ---------- EVENT ILLUSTRATIONS (original, geometric) ----------
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
      <circle cx="200" cy="80" r="18" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      <circle cx="220" cy="200" r="22" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
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
      <circle cx="200" cy="200" r="32" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
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

// ---------- EVENTS ----------
function Events({ t }) {
  return (
    <section id="events">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.events.eyebrow}</div>
            <h2>{t.events.title[0]}<em>{t.events.title[1]}</em></h2>
          </div>
          <div className="head-side">{t.events.side}</div>
        </div>
        <div className="events-grid">
          <article className="event big">
            <div className="event-tag"><span className="dot"></span>{t.events.hackathon.tag}</div>
            <h3>{t.events.hackathon.title}</h3>
            <p>{t.events.hackathon.desc}</p>
            <div className="event-meta">
              {t.events.hackathon.meta.map((m, i) => (
                <span key={i}>{m[0]} · <b>{m[1]}</b></span>
              ))}
            </div>
            <HackathonIllu />
          </article>

          <article className="event sm">
            <div className="event-tag"><span className="dot"></span>{t.events.itconnect.tag}</div>
            <h3>{t.events.itconnect.title}</h3>
            <p>{t.events.itconnect.desc}</p>
            <div className="event-meta">
              {t.events.itconnect.meta.map((m, i) => (
                <span key={i}>{m[0]} · <b>{m[1]}</b></span>
              ))}
            </div>
            <ITConnectIllu />
          </article>

          <article className="event terminal full">
            <div className="event-tag"><span className="dot"></span>{t.events.wcc.tag}</div>
            <h3>{t.events.wcc.title}</h3>
            <p>{t.events.wcc.desc}</p>
            <div className="terminal-body">
              {t.events.wcc.terminal.map((l, i) => (
                <span className="line" key={i}>
                  {l.type === 'prompt' && <span className="prompt">{l.text}</span>}
                  {l.type === 'cmt' && <span className="cmt">{l.text}</span>}
                  {l.type === 'out' && <span>{l.text}</span>}
                  {i === t.events.wcc.terminal.length - 1 && <span className="cur"></span>}
                </span>
              ))}
            </div>
            <div className="event-meta">
              {t.events.wcc.meta.map((m, i) => (
                <span key={i}>{m[0]} · <b>{m[1]}</b></span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ---------- TECH SHARING ----------
function Share({ t }) {
  return (
    <section id="sharing">
      <div className="wrap share">
        <div className="share-text">
          <div className="eyebrow">{t.share.eyebrow}</div>
          <h2>{t.share.title[0]}<em>{t.share.title[1]}</em>{t.share.title[2]}</h2>
          <p>{t.share.lede}</p>
          <ul className="share-list">
            {t.share.list.map((item, i) => (
              <li key={i}>
                <span className="num">0{i + 1}</span>
                <span><b>{item.b}</b> <span>{item.t}</span></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="share-card">
          <div className="sc-head">
            <div className="dots"><i></i><i></i><i></i></div>
            <span>~/techzara/</span><span style={{ color: 'var(--accent)' }}>{t.share.code_file}</span>
          </div>
          <div className="sc-body">
            <div className="ln"><span className="lnum">1</span><span><span className="cmt">// Mandray. Mivelona. Mizara.</span></span></div>
            <div className="ln"><span className="lnum">2</span><span><span className="kw">export</span> <span className="kw">type</span> <span className="fn">Knowledge</span> = &#123;</span></div>
            <div className="ln"><span className="lnum">3</span><span>  receive: () =&gt; <span className="st">'no gatekeeping'</span>,</span></div>
            <div className="ln"><span className="lnum">4</span><span>  live:    () =&gt; <span className="st">'ship every week'</span>,</span></div>
            <div className="ln"><span className="lnum">5</span><span>  share:   () =&gt; <span className="st">'pass it on'</span>,</span></div>
            <div className="ln"><span className="lnum">6</span><span>&#125;;</span></div>
            <div className="ln"><span className="lnum">7</span><span></span></div>
            <div className="ln"><span className="lnum">8</span><span><span className="kw">const</span> techzara = <span className="fn">community</span>(<span className="st">'mg'</span>);</span></div>
            <div className="ln"><span className="lnum">9</span><span>techzara.<span className="fn">grow</span>();<span style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--accent)', verticalAlign: -2, marginLeft: 6, animation: 'blink 1s steps(2,start) infinite' }}></span></span></div>
          </div>
          <div className="sc-foot">
            <div className="info">{t.share.code_status}</div>
            <button>★ <span className="react-count">128</span></button>
            <button>↗ fork</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- COMMUNITY ----------
function Community({ t }) {
  return (
    <section className="community" id="community">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.community.eyebrow}</div>
            <h2>{t.community.title[0]}<em>{t.community.title[1]}</em></h2>
          </div>
          <div className="head-side">{t.community.side}</div>
        </div>

        <div className="uni-wrap">
          <div className="uni-head">
            <span>// partner_universities.list</span>
            <span className="live"><i></i>{t.community.live}</span>
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

// ---------- CONTACT ----------
function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', topic: t.contact.form.topic_opts[0], msg: '' });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', topic: t.contact.form.topic_opts[0], msg: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>{t.contact.title[0]}<em>{t.contact.title[1]}</em>{t.contact.title[2]}</h2>
          <p className="lede">{t.contact.lede}</p>

          <div className="contact-info">
            <a href="tel:+261329473033">
              <div className="icon-cell"><Icon.phone /></div>
              <div>
                <div className="ci-label">{t.contact.info_phone_l}</div>
                <div className="ci-val">+261 32 94 730 33</div>
              </div>
            </a>
            <a href="https://web.facebook.com/Techzara/" target="_blank" rel="noopener noreferrer">
              <div className="icon-cell"><Icon.fb /></div>
              <div>
                <div className="ci-label">{t.contact.info_fb_l}</div>
                <div className="ci-val">{t.contact.info_fb_v}</div>
              </div>
            </a>
            <div className="row">
              <div className="icon-cell"><Icon.pin /></div>
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
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.contact.form.name_p} />
            </div>
            <div className="field">
              <label>{t.contact.form.email_l}</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.contact.form.email_p} />
            </div>
          </div>
          <div className="field">
            <label>{t.contact.form.topic_l}</label>
            <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
              {t.contact.form.topic_opts.map((o, i) => <option key={i}>{o}</option>)}
            </select>
          </div>
          <div className="field">
            <label>{t.contact.form.msg_l}</label>
            <textarea required rows="4" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder={t.contact.form.msg_p}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {t.contact.form.submit}<span className="arrow"><Icon.arrow /></span>
          </button>
          {sent && <div className="form-success">{t.contact.form.success}</div>}
        </form>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer({ t }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img src={LOGO_URL} alt="Techzara" />
              <span>Techzara<span className="dot">.</span></span>
            </div>
            <div className="foot-tag">
              {t.footer.tag[0]}{t.footer.tag[1]}<em>{t.footer.tag[2]}</em>
            </div>
            <div className="eyebrow" style={{ marginTop: 12 }}>Madagascar · since 2018</div>
          </div>
          <div>
            <h4>{t.footer.col_explore}</h4>
            <ul>
              {t.footer.links_explore.map((l, i) => (
                <li key={i}><a href={['#about', '#events', '#sharing', '#community'][i]}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.col_programs}</h4>
            <ul>
              {t.footer.links_programs.map((l, i) => <li key={i}><a href="#events">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4>{t.footer.col_connect}</h4>
            <ul>
              <li><a href="https://web.facebook.com/Techzara/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#contact">Discord</a></li>
              <li><a href="#contact">GitHub</a></li>
              <li><a href="#contact">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-wm">Tech<em>Zara</em></div>

        <div className="foot-bot">
          <span>{t.footer.copy}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}

// ============= TECHZARA — APP ROOT =============
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [theme, setTheme] = useStateApp(() => {
    return localStorage.getItem('tz-theme') || 'dark';
  });
  const [lang, setLang] = useStateApp(() => {
    return localStorage.getItem('tz-lang') || 'en';
  });

  useEffectApp(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tz-theme', theme);
  }, [theme]);

  useEffectApp(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('tz-lang', lang);
  }, [lang]);

  const t = STRINGS[lang];

  return (
    <React.Fragment>
      <Nav t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Events t={t} />
        <Share t={t} />
        <Community t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
