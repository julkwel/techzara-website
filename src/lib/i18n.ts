// src/lib/i18n.ts

export type Lang = "en" | "fr";

export interface NavStrings {
  about: string;
  events: string;
  sharing: string;
  community: string;
  contact: string;
  join: string;
}

export interface StatItem {
  n: string;
  l: string;
}

export interface HeroStrings {
  pill_tag: string;
  pill_text: string;
  tagline_words: [string, string, string];
  sub_a: string;
  sub_b: string;
  sub_c: string;
  sub_d: string;
  sub_e: string;
  sub_f: string;
  sub_g: string;
  cta_primary: string;
  cta_secondary: string;
  stats: StatItem[];
}

export interface ValueItem {
  kw: string;
  ml: string;
  tr: string;
  desc: string;
}

export interface AboutStrings {
  eyebrow: string;
  title: [string, string];
  side: string;
  values: ValueItem[];
}

export interface MetaRow {
  0: string;
  1: string;
  length: 2;
  [index: number]: string;
}

export interface TerminalLine {
  type: "prompt" | "cmt" | "out";
  text: string;
}

export interface EventCard {
  tag: string;
  title: string;
  desc: string;
  meta: [string, string][];
}

export interface WccCard extends EventCard {
  terminal: TerminalLine[];
}

export interface EventsStrings {
  eyebrow: string;
  title: [string, string];
  side: string;
  hackathon: EventCard;
  itconnect: EventCard;
  wcc: WccCard;
}

export interface ShareItem {
  b: string;
  t: string;
}

export interface ShareStrings {
  eyebrow: string;
  title: [string, string, string];
  lede: string;
  list: ShareItem[];
  code_file: string;
  code_status: string;
}

export interface UniversityItem {
  name: string;
  loc: string;
  members: string;
}

export interface CommunityStrings {
  eyebrow: string;
  title: [string, string];
  side: string;
  live: string;
  universities: UniversityItem[];
}

export interface FormStrings {
  name_l: string;
  name_p: string;
  email_l: string;
  email_p: string;
  topic_l: string;
  topic_opts: string[];
  msg_l: string;
  msg_p: string;
  submit: string;
  success: string;
}

export interface ContactStrings {
  eyebrow: string;
  title: [string, string, string];
  lede: string;
  info_phone_l: string;
  info_fb_l: string;
  info_fb_v: string;
  info_addr_l: string;
  info_addr_v: string;
  form: FormStrings;
}

export interface FooterStrings {
  tag: [string, string, string];
  col_explore: string;
  col_programs: string;
  col_connect: string;
  links_explore: string[];
  links_programs: string[];
  links_connect: string[];
  copy: string;
  built: string;
}

export interface Strings {
  nav: NavStrings;
  hero: HeroStrings;
  about: AboutStrings;
  events: EventsStrings;
  share: ShareStrings;
  community: CommunityStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}

export type AllStrings = Record<Lang, Strings>;

const STRINGS: AllStrings = {
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
      pill_text: "Hackathon Inter-Universitaire — Registrations closed",
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
      pill_text: "Hackathon Inter-Universitaire — Inscriptions fermées",
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

export default STRINGS;
