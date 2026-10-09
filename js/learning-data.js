/* =====================================================================
   LEARNING TRACKER — what Zaafir is learning right now

   Update this file as things progress:
     progress: a number from 0 to 100, or null to show "In progress"
               without a percentage
     progressLabel: optional text shown next to the bar instead of "75%"
     start / end: "YYYY-MM" — the bar then fills automatically by date
               and shows "Finishes <month year>"
     steps:    milestones; status is "done", "current" or "next"
     covers:   topics the course covers (no status)
     tools:    tools being explored (shown as small tags)
   UPDATED is the date shown under the section title.
   ===================================================================== */

const LEARNING_UPDATED = "2026-10";

const LEARNING = [
  { logo:"QA", file:"qa", provider:"QA", start:"2026-07", end:"2027-07",
    title:{ en:"AI & Automation Apprenticeship", fr:"Apprentissage IA & Automatisation" },
    meta: { en:"About 12 months", fr:"Environ 12 mois" },
    covers:[
      { en:"Business transformation through AI and automation", fr:"Transformation de l'entreprise grâce à l'IA et à l'automatisation" },
      { en:"Responsible AI: balancing efficiency with safety", fr:"IA responsable : concilier efficacité et sécurité" },
      { en:"Low-code and no-code automation", fr:"Automatisation low-code et no-code" },
      { en:"Testing and optimising AI solutions", fr:"Tester et optimiser des solutions d'IA" },
    ],
    tools:["Power Automate","Microsoft Copilot","RPA","Python","GitHub Copilot","Power Platform","CI/CD"] },

  { logo:"HP", file:"hackpath", provider:"HackPath", progress:75,
    progressLabel:{ en:"Phase 4 of 4", fr:"Phase 4 sur 4" },
    title:{ en:"Cybersecurity Bootcamp", fr:"Bootcamp cybersécurité" },
    meta: { en:"4 phases · 90 days", fr:"4 phases · 90 jours" },
    steps:[
      { status:"done",    en:"Linux Foundations", fr:"Fondamentaux Linux" },
      { status:"done",    en:"Terminal & Bash", fr:"Terminal & Bash" },
      { status:"done",    en:"Networking", fr:"Réseaux" },
      { status:"current", en:"Practical Cybersecurity", fr:"Cybersécurité pratique" },
    ],
    tools:["Linux","Bash","Nmap","Wireshark","Burp Suite","TryHackMe"] },

  { logo:"MS", file:"microsoft", provider:"Microsoft", progress:50,
    progressLabel:{ en:"1 certified · 1 in progress", fr:"1 obtenue · 1 en cours" },
    title:{ en:"Microsoft Certifications", fr:"Certifications Microsoft" },
    meta: { en:"Certification path", fr:"Parcours de certification" },
    steps:[
      { status:"done",    en:"Azure AI Fundamentals (AI‑901)", fr:"Azure AI Fundamentals (AI‑901)" },
      { status:"current", en:"Security, Compliance, and Identity Fundamentals (SC‑900)", fr:"Security, Compliance, and Identity Fundamentals (SC‑900)" },
    ],
    tools:["Azure AI","Microsoft Entra ID","Microsoft Purview","Microsoft Defender"] },
];
