export type WorkRole = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
};

export type WritingItem = {
  label: string;
  title: string;
  date: string;
  metrics: string;
  url: string;
  blurb: string;
};

export type ProjectIntro = {
  path: string;
  title: string;
  intro: string;
};

export const LAST_UPDATED = "8 September 2026";

export const HERO = {
  name: "Tiago Santos",
  role: "Backend Engineer | TypeScript, Node.js, GCP",
  domain: "Fintech, business travel and regulatory compliance at scale",
  pitch:
    "I build backend systems where being wrong is expensive: expense and business-travel spend platforms that have to stay correct, auditable, and legally valid across several European tax regimes.",
  meta: "Cologne, Germany · Portuguese / EU citizen · English C2 (Cambridge CAE, Grade A), German A2",
};

export const WORK: WorkRole[] = [
  {
    company: "Perk",
    title: "Backend Engineer",
    dates: "January 2024 - present",
    location: "Zurich, Switzerland",
    summary:
      "Expense and business-travel spend platform for enterprises. I joined Yokoy as a backend engineer on the Expense platform, which TravelPerk later acquired and rebranded as Perk. TypeScript and Node.js microservices on GCP (Cloud Run, Cloud Functions), Firestore and MongoDB, PostgreSQL, Terraform, Datadog.",
    bullets: [
      "Led France receipt digitization from refinement to full rollout: receipts converted to PDF/A-3 with lossless compression, XMP metadata, internal timestamping, and digital signature, gated per legal entity behind a feature flag. A legal prerequisite for selling in France.",
      "Found, while verifying that rollout, that receipts for Spanish legal entities had been signed for months with an expired certificate, making them legally invalid, with no alerting or error logging to catch it. Scoped the affected records and built the expiry monitoring and alerting now in place.",
      "Owned travel-to-expense integrations (TravelPerk, Egencia): booking import, duplicate and credit-note handling, lodge-card matching, and auto-submission of pre-approved travel expenses into the expense workflow.",
      "Implemented a new expense action API so a stale client could no longer silently overwrite a document.",
      "Standardized user-facing errors and workflow notifications onto a localization-key contract, across the expense backend and a shared workflow library, so users can see what went wrong and fix it themselves instead of opening a support ticket, against a team goal of halving support volume.",
      "Reliability: Datadog monitors and structured audit logs for the signing pipeline, expand/contract PostgreSQL migrations, and a regular firefighter rotation. Traced a callback race from production logs that had orphaned 610 expense records over 20 months.",
      "Work agent-first in Cursor: I plan and design the change, delegate implementation to MCP-connected agents, and verify the result myself.",
    ],
  },
  {
    company: "Etops",
    title: "Software Engineer (Technical Lead)",
    dates: "September 2022 - December 2023",
    location: "Zurich, Switzerland",
    summary:
      "Globalance World: a sustainability and wealth-impact analytics platform for a Zurich private bank, ingesting third-party provider data and computing impact metrics at security, portfolio and country level across 12,000 portfolios and 300,000 securities. TypeScript and Node.js services on MongoDB and Redis, React frontends, Docker and CI/CD.",
    bullets: [
      "Took the platform over when the senior engineer and the CTO left at the same time, as the only person who knew how the systems worked, and was sole owner of around 50 repositories for about a year.",
      "Ran requirements directly with the bank's stakeholders, finance specialists with no software background: worked out what was feasible, then designed and implemented it.",
      "Owned delivery end to end, including the servers, deployments and production maintenance.",
      "The client brought a platform's frontend in-house from an external vendor on the strength of our delivery record, after earlier attempts to win that work had not succeeded; I took it on and owned it for my last four months.",
      "Interviewed and selected the engineer for the one opening I was given, then onboarded him across the codebase and ran his code reviews.",
      "Handed the work over to a team of three on my departure.",
    ],
  },
  {
    company: "Etops",
    title: "Software Engineer (Full Stack)",
    dates: "September 2020 - August 2022",
    location: "Zurich, Switzerland",
    summary:
      "Stack: TypeScript, Node.js, React, Go, MongoDB, Redis, Docker, CI/CD.",
    bullets: [
      "Built a machine-learning document parser for a Swiss financial institution that recognized and extracted text from scanned document images, using Azure Cognitive Services, TensorFlow, Detectron2 and YOLOv5 with COCO, YOLO and LabelMe datasets. Several backend services and one frontend.",
      "Contributed to and maintained a data warehouse platform for a Swiss financial institution, across several backend services and one frontend.",
      "Worked on the Globalance World analytics platform in a three-person team with a senior engineer and the CTO, and took it over when they left.",
    ],
  },
  {
    company: "Bondalti",
    title: "BI Developer, previously BI Intern",
    dates: "2016 - 2017",
    location: "Portugal",
    summary:
      "SAP BW and Power BI reporting alongside my Computer Science degree: datasource activation, transformations and data transfer processes from SAP R/3 into SAP BW, process chains to automate master and transactional loads, and Power BI dashboards built with DAX.",
    bullets: [],
  },
];

export const WRITING: WritingItem = {
  label: "The Startup, on Medium",
  title:
    "How to Deploy an HTTPS Node.js, PostgreSQL, Redis Back-end, and a React Front-end to AWS",
  date: "July 2020",
  metrics: "11.1K views · 3.8K reads · 17 min read",
  url: "https://medium.com/@tiagofbsantos/deploy-https-node-postgres-redis-react-to-aws-ef252567200d?source=friends_link&sk=c153c74d65621a9d28f944a3e422338f",
  blurb:
    "A step-by-step tutorial for deploying a single-instance HTTPS stack on AWS: a Node.js API with PostgreSQL on RDS and Redis on ElastiCache, plus a React frontend on Amplify. The core problem it solves is serving HTTPS without a load balancer, terminating TLS on the EC2 instance itself with NGINX and a Let's Encrypt certificate on Elastic Beanstalk. It also covers the workarounds the standard instructions do not: patching certbot to recognize Amazon Linux 2, the Elastic Beanstalk NGINX config conflict, and the 63-character hostname limit that breaks certificate issuance.",
};

export const PROJECT_INTROS: ProjectIntro[] = [
  {
    path: "/projects/smartvision",
    title: "Smart Vision",
    intro:
      "Face detection and celebrity recognition from a photo URL, as a single-page responsive progressive web app.",
  },
  {
    path: "/projects/kittengenerator",
    title: "Kitten Generator",
    intro:
      "A learning project from 2019, refreshed since. Kept for the record rather than as current work.",
  },
  {
    path: "/projects/tiagofbsantoscom",
    title: "Tiago F. B. Santos .com",
    intro:
      "This site. A responsive progressive web app built with Vite, TypeScript, React and React Router, deployed to AWS Amplify with Amazon Route 53 for the domain.",
  },
];

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function externalAnchor(href: string, className: string | undefined, text: string): string {
  const classAttr = className ? ` class="${className}"` : "";
  return `<a href="${escapeHtml(href)}"${classAttr} target="_blank" rel="noopener noreferrer">${escapeHtml(text)}</a>`;
}

function heroHtml(): string {
  return `<header class="aboutMe"><div class="heroCopy"><h1>${escapeHtml(HERO.name)}</h1><p class="heroRole">${escapeHtml(HERO.role)}</p><p class="heroDomain">${escapeHtml(HERO.domain)}</p><p class="heroPitch">${escapeHtml(HERO.pitch)}</p><p class="heroMeta">${escapeHtml(HERO.meta)}</p></div></header>`;
}

function workHtml(): string {
  const roles = WORK.map((role) => {
    const bullets =
      role.bullets.length > 0
        ? `<ul class="workBullets">${role.bullets
            .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
            .join("")}</ul>`
        : "";
    return `<article class="workRole"><h3>${escapeHtml(role.title)}</h3><p class="workMeta">${escapeHtml(`${role.company} · ${role.dates} · ${role.location}`)}</p><p class="workSummary">${escapeHtml(role.summary)}</p>${bullets}</article>`;
  }).join("");
  return `<section id="work" class="work" aria-labelledby="work-title"><h2 id="work-title">Work</h2>${roles}</section>`;
}

function writingHtml(): string {
  return `<section id="writing" class="writing" aria-labelledby="writing-title"><h2 id="writing-title">Writing</h2><article class="writingCard"><p class="writingLabel">${escapeHtml(WRITING.label)}</p><h3>${externalAnchor(WRITING.url, undefined, WRITING.title)}</h3><p>${escapeHtml(WRITING.blurb)}</p><p class="writingMetrics">${escapeHtml(`${WRITING.date} · ${WRITING.metrics}`)}</p>${externalAnchor(WRITING.url, "projectLink", "Read It")}</article></section>`;
}

function homepageHtml(): string {
  return `<main id="main">${heroHtml()}${workHtml()}${writingHtml()}</main>`;
}

function projectIntroHtml(path: string): string {
  const page = PROJECT_INTROS.find((item) => item.path === path);
  if (!page) {
    return "";
  }
  return `<main id="main" class="projectPage"><article class="text"><h1 class="projectTitle">${escapeHtml(page.title)}</h1><p>${escapeHtml(page.intro)}</p></article></main>`;
}

export function staticBodyHtml(path: string): string {
  if (path === "/") {
    return homepageHtml();
  }
  return projectIntroHtml(path);
}
