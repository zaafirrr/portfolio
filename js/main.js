/* =====================================================================
   CERTIFICATIONS & COURSES (newest first)
   To add one, copy a { ... } block. status: "done" | "wip" | "plan"
   logo: 2–3 letters shown until a logo image is added
   file: logo image name in assets/logos/ (e.g. "microsoft" → microsoft.png)
   ===================================================================== */
const CERTS = [
  { logo:"MC", file:"mastercard", status:"done", issuer:"Forage",
    date:{ en:"Aug 2026", fr:"août 2026" },
    title:{ en:"Mastercard Cybersecurity Job Simulation", fr:"Simulation métier Cybersécurité Mastercard" },
    desc:{ en:"Identified phishing emails and designed security awareness training, working as part of a simulated Security Awareness team.",
           fr:"Identification d'e-mails de phishing et conception de formations de sensibilisation à la sécurité, au sein d'une équipe Security Awareness simulée." } },
  { logo:"MS", file:"microsoft", status:"done", issuer:"Microsoft",
    date:{ en:"Jul 2026", fr:"juil. 2026" },
    title:{ en:"Microsoft Certified: Azure AI Fundamentals", fr:"Microsoft Certified : Azure AI Fundamentals" },
    desc:{ en:"Exam AI-901. AI concepts, generative AI and Microsoft Azure AI services.",
           fr:"Examen AI-901. Concepts d'IA, IA générative et services d'IA de Microsoft Azure." } },
  { logo:"MS", file:"microsoft", status:"wip", issuer:"Microsoft",
    date:{ en:"", fr:"" },
    title:{ en:"Microsoft Certified: Security, Compliance, and Identity Fundamentals", fr:"Microsoft Certified : Security, Compliance, and Identity Fundamentals" },
    desc:{ en:"Exam SC-900. Security, compliance and identity concepts across Microsoft Entra, Defender and Purview. Currently preparing.",
           fr:"Examen SC-900. Concepts de sécurité, de conformité et d'identité avec Microsoft Entra, Defender et Purview. En préparation." } },
  { logo:"ED", file:"easydmarc", status:"done", issuer:"EasyDMARC",
    date:{ en:"May 2026", fr:"mai 2026" },
    title:{ en:"EasyDMARC Certification", fr:"Certification EasyDMARC" },
    desc:{ en:"Implementing and managing DMARC, SPF and DKIM, configuring DNS records and analysing DMARC reports to protect domains from spoofing and phishing.",
           fr:"Mise en place et gestion de DMARC, SPF et DKIM, configuration DNS et analyse des rapports DMARC pour protéger les domaines contre l'usurpation et le phishing." } },
  { logo:"CI", file:"cisco", status:"done", issuer:"Cisco Networking Academy",
    date:{ en:"Oct 2024", fr:"oct. 2024" },
    title:{ en:"Python Essentials 1", fr:"Python Essentials 1" },
    desc:{ en:"Data types, operators, loops and conditionals, functions, error handling and working with files.",
           fr:"Types de données, opérateurs, boucles et conditions, fonctions, gestion des erreurs et des fichiers." } },
  { logo:"OU", file:"open-university", status:"done", issuer:"The Open University",
    date:{ en:"Oct 2024", fr:"oct. 2024" },
    title:{ en:"An Introduction to Software Development", fr:"Introduction au développement logiciel" },
    desc:{ en:"Core programming concepts, development methodologies, problem analysis and the software development lifecycle.",
           fr:"Bases de la programmation, méthodes de développement, analyse de problèmes et cycle de vie du logiciel." } },
  { logo:"OU", file:"open-university", status:"done", issuer:"The Open University",
    date:{ en:"Oct 2024", fr:"oct. 2024" },
    title:{ en:"Software Development for Enterprise Systems", fr:"Développement logiciel pour les systèmes d'entreprise" },
    desc:{ en:"Designing and building large-scale applications, system integration and agile methods in enterprise environments.",
           fr:"Conception d'applications à grande échelle, intégration de systèmes et méthodes agiles en entreprise." } },
  { logo:"AWS", file:"aws", status:"done", issuer:"Amazon Web Services",
    date:{ en:"Oct 2024", fr:"oct. 2024" },
    title:{ en:"Introduction to Generative AI: Art of the Possible", fr:"Introduction à l'IA générative : Art of the Possible" },
    desc:{ en:"How generative AI works, including model training and prompt design, and the AWS tools for building and running models.",
           fr:"Fonctionnement de l'IA générative, entraînement des modèles et conception de prompts, et outils AWS associés." } },
  { logo:"HP", file:"hackpath", status:"done", issuer:"HackPath",
    date:{ en:"Oct 2026", fr:"oct. 2026" },
    title:{ en:"HackPath Foundations Certification", fr:"Certification HackPath Foundations" },
    desc:{ en:"Completed the 90-day cybersecurity bootcamp covering Linux Foundations, Terminal & Bash, Networking and Practical Cybersecurity — including recon, web vulnerabilities, CTF challenges and a full penetration testing report.",
           fr:"Bootcamp cybersécurité de 90 jours terminé : Linux, Terminal & Bash, Réseaux et Cybersécurité pratique — dont reconnaissance, vulnérabilités web, CTF et rapport de pentest complet." } },
];

/* Skills shown in each certification's detail pop-up. Taken from the descriptions above. */
const CERT_SKILLS = {
  "Mastercard Cybersecurity Job Simulation": [["Phishing identification","Identification du phishing"],["Security awareness training","Formation de sensibilisation à la sécurité"],["Teamwork in a security team","Travail en équipe de sécurité"]],
  "Microsoft Certified: Azure AI Fundamentals": [["AI concepts","Concepts d'IA"],["Generative AI","IA générative"],["Microsoft Azure AI services","Services d'IA Microsoft Azure"]],
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals": [["Security concepts","Concepts de sécurité"],["Compliance","Conformité"],["Identity concepts","Concepts d'identité"],["Microsoft Entra","Microsoft Entra"],["Microsoft Defender","Microsoft Defender"],["Microsoft Purview","Microsoft Purview"]],
  "EasyDMARC Certification": [["DMARC","DMARC"],["SPF","SPF"],["DKIM","DKIM"],["DNS record configuration","Configuration d'enregistrements DNS"],["DMARC report analysis","Analyse des rapports DMARC"]],
  "Python Essentials 1": [["Data types","Types de données"],["Operators","Opérateurs"],["Loops and conditionals","Boucles et conditions"],["Functions","Fonctions"],["Error handling","Gestion des erreurs"],["Working with files","Gestion des fichiers"]],
  "An Introduction to Software Development": [["Programming concepts","Bases de la programmation"],["Development methodologies","Méthodes de développement"],["Problem analysis","Analyse de problèmes"],["Software development lifecycle","Cycle de vie du logiciel"]],
  "Software Development for Enterprise Systems": [["Large-scale application design","Conception d'applications à grande échelle"],["System integration","Intégration de systèmes"],["Agile methods","Méthodes agiles"]],
  "Introduction to Generative AI: Art of the Possible": [["Generative AI","IA générative"],["Model training","Entraînement des modèles"],["Prompt design","Conception de prompts"],["AWS AI tools","Outils d'IA AWS"]],
  "HackPath Foundations Certification": [["Linux foundations","Fondamentaux Linux"],["Terminal & Bash","Terminal & Bash"],["Networking","Réseaux"],["Practical cybersecurity","Cybersécurité pratique"],["Reconnaissance","Reconnaissance"],["Web vulnerabilities","Vulnérabilités web"],["CTF challenges","Défis CTF"],["Penetration testing report","Rapport de test d'intrusion"]]
};
const certSkills = c => (CERT_SKILLS[c.title.en] || []).map(s => s[lang === 'fr' ? 1 : 0]);

/* =====================================================================
   SKILLS
   w = professional experience, s = studied (BTEC), l = currently learning
   Format: [English, French, type]
   ===================================================================== */
const SKILLS = [
  { en:"IT Support", fr:"Support IT", items:[
    ["Technical Support","Support technique","w"],
    ["Troubleshooting","Résolution de problèmes","w"],
    ["Software Troubleshooting","Dépannage logiciel","w"],
    ["Problem-Solving","Résolution de pannes","w"],
    ["Customer Support","Support client","w"],
    ["IT Service Management","Gestion des services IT","w"],
  ]},
  { en:"Microsoft Cloud & M365", fr:"Cloud Microsoft & M365", items:[
    ["Microsoft 365","Microsoft 365","w"],
    ["User Account Management","Gestion des comptes utilisateurs","w"],
    ["IT Documentation","Documentation IT","w"],
    ["Data Management","Gestion des données","w"],
    ["Microsoft Entra ID","Microsoft Entra ID","l"],
    ["Microsoft Azure","Microsoft Azure","l"],
    ["Identity & Access Management","Gestion des identités et accès","l"],
    ["Conditional Access","Accès conditionnel","l"],
    ["Microsoft Intune","Microsoft Intune","l"],
    ["Microsoft Defender","Microsoft Defender","l"],
    ["Endpoint Management","Gestion des terminaux","l"],
    ["Endpoint Security","Sécurité des terminaux","l"],
  ]},
  { en:"Cybersecurity", fr:"Cybersécurité", items:[
    ["Cybersecurity Fundamentals","Fondamentaux de la cybersécurité","s"],
    ["Security Awareness","Sensibilisation à la sécurité","s"],
    ["Email Security","Sécurité des e-mails","s"],
    ["SPF","SPF","s"],
    ["DKIM","DKIM","s"],
    ["DMARC","DMARC","s"],
    ["Email Authentication","Authentification des e-mails","s"],
    ["DNS Management","Gestion DNS","s"],
  ]},
  { en:"AI & Automation", fr:"IA & Automatisation", items:[
    ["Generative AI","IA générative","s"],
    ["AI Prompting","Ingénierie des prompts","s"],
    ["Machine Learning Fundamentals","Fondamentaux du ML","s"],
    ["Text Generation","Génération de texte","s"],
    ["AI Image Generation","Génération d'images IA","s"],
    ["Microsoft Copilot","Microsoft Copilot","l"],
    ["Microsoft Power Automate","Microsoft Power Automate","l"],
    ["Microsoft Power Platform","Microsoft Power Platform","l"],
    ["Workflow Automation","Automatisation des flux","l"],
    ["Low-Code / No-Code","Low-Code / No-Code","l"],
    ["Robotic Process Automation","Automatisation robotisée (RPA)","l"],
    ["API Integration","Intégration d'API","l"],
    ["AI Agents","Agents IA","l"],
    ["Responsible AI","IA responsable","l"],
  ]},
  { en:"Development & Systems", fr:"Développement & Systèmes", items:[
    ["Python","Python","s"],
    ["HTML","HTML","s"],
    ["Debugging","Débogage","s"],
    ["Error Handling","Gestion des erreurs","s"],
    ["Code Efficiency","Optimisation du code","s"],
    ["Software Development","Développement logiciel","s"],
    ["Software Deployment","Déploiement logiciel","s"],
    ["System Integration Testing","Tests d'intégration système","s"],
    ["Agile Methodologies","Méthodologies agiles","s"],
    ["Linux","Linux","l"],
    ["Bash Scripting","Scripts Bash","l"],
    ["Network Troubleshooting","Dépannage réseau","l"],
    ["DNS & Domain Management","Gestion DNS et domaines","l"],
    ["IT Systems Integration","Intégration des systèmes IT","l"],
  ]},
  { en:"Data & Analytics", fr:"Données & Analyse", items:[
    ["Data Analysis","Analyse de données","s"],
    ["Data Visualisation","Visualisation de données","s"],
    ["Microsoft Excel","Microsoft Excel","s"],
    ["Microsoft Access","Microsoft Access","s"],
  ]},
  { en:"Design & Creativity", fr:"Design & Créativité", items:[
    ["Adobe Photoshop","Adobe Photoshop","s"],
    ["Adobe Creative Suite","Adobe Creative Suite","s"],
    ["Autodesk Maya","Autodesk Maya","s"],
    ["Web Design","Webdesign","s"],
    ["Design Thinking","Design Thinking","w"],
  ]},
  { en:"Google Workspace", fr:"Google Workspace", items:[
    ["Google Admin Console","Google Admin Console","l"],
    ["User & Group Management","Gestion utilisateurs & groupes","l"],
    ["Gmail Administration","Administration Gmail","l"],
    ["Google Drive","Google Drive","l"],
    ["Shared Drives","Disques partagés","l"],
    ["Security & Access Management","Gestion sécurité et accès","l"],
  ]},
  { en:"Professional & Business", fr:"Compétences professionnelles", items:[
    ["Communication","Communication","w"],
    ["Critical Thinking","Pensée critique","w"],
    ["Analytical Thinking","Raisonnement analytique","w"],
    ["Organisation","Organisation","w"],
    ["Multitasking","Multitâche","w"],
    ["Customer Service","Service client","w"],
    ["Customer Experience","Expérience client","w"],
    ["Customer Interaction","Interaction client","w"],
    ["Customer Satisfaction","Satisfaction client","w"],
    ["Product Knowledge","Connaissance produit","w"],
    ["Strategy","Stratégie","w"],
    ["Invoice Processing","Traitement des factures","w"],
    ["Administrative Assistance","Assistance administrative","w"],
    ["VAT Returns","Déclarations TVA","w"],
    ["Data Handling","Traitement des données","w"],
    ["Website Management","Gestion de site web","w"],
    ["IT Project Management","Gestion de projets IT","s"],
    ["Microsoft Office","Microsoft Office","s"],
  ]},
];

/* =====================================================================
   Everything below makes the page work. You shouldn't need to edit it.
   ===================================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fill = (str, o) => str.replace(/\{(\w)\}/g, (_, k) => o[k] ?? '');
const store = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
                set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };

let lang = store.get('lang') === 'fr' ? 'fr' : 'en';
const t = key => (lang === 'fr' ? FR : EN_JS)[key] ?? EN_JS[key] ?? key;

/* ---------- Language ---------- */
const EN_TEXT = new Map();   // remembers the original English text
$$('[data-i18n]').forEach(el => EN_TEXT.set(el, el.innerHTML));
$$('[data-i18n-ph]').forEach(el => EN_TEXT.set(el, el.placeholder));

function applyLang(){
  document.documentElement.lang = lang === 'fr' ? 'fr' : 'en-GB';
  $$('[data-i18n]').forEach(el => {
    const fr = FR[el.dataset.i18n];
    el.innerHTML = (lang === 'fr' && fr) ? fr : EN_TEXT.get(el);
  });
  $$('[data-i18n-ph]').forEach(el => {
    const fr = FR[el.dataset.i18nPh];
    el.placeholder = (lang === 'fr' && fr) ? fr : EN_TEXT.get(el);
  });
  const lb = $('#langBtn');
  lb.textContent = t('js.langBtn');
  lb.setAttribute('aria-label', t('js.langLabel'));
  $('#flip')?.setAttribute('aria-label', t('js.flip'));
  renderLatest(); renderAll(); renderCerts(); renderAllCerts(); renderLearning(); renderSkills(); renderNow(); updateThemeBtn(); if (typeof tickClock === 'function') tickClock(); document.dispatchEvent(new Event('langchange'));
  if (openIndex > -1) openProject(openIndex);
}
$('#langBtn').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  store.set('lang', lang);
  applyLang();
});

/* ---------- Theme ---------- */
const root = document.documentElement;
const isDark = () => root.dataset.theme
  ? root.dataset.theme === 'dark'
  : matchMedia('(prefers-color-scheme: dark)').matches;
function updateThemeBtn(){
  const dark = isDark();
  $('.i-moon').hidden = dark;
  $('.i-sun').hidden = !dark;
  $('#themeBtn').setAttribute('aria-label', t(dark ? 'js.themeLight' : 'js.themeDark'));
}
$('#themeBtn').addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  store.set('theme', next);
  updateThemeBtn();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', updateThemeBtn);

/* ---------- Flip card ---------- */
const flip = $('#flip');
flip?.addEventListener('click', e => {
  if (e.target.closest('a')) return;           // let links on the back work
  const on = !flip.classList.contains('flipped');
  flip.classList.toggle('flipped', on);
  flip.setAttribute('aria-pressed', on);
  $$('.back a', flip).forEach(a => a.tabIndex = on ? 0 : -1);
});

/* ---------- Tabs ---------- */
const tabs = $$('.tab');
function selectTab(id){
  tabs.forEach(tb => {
    const on = tb.id === 'tab-' + id;
    tb.setAttribute('aria-selected', on);
    tb.tabIndex = on ? 0 : -1;
    $('#' + tb.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((tb, i) => {
  tb.addEventListener('click', () => selectTab(tb.id.replace('tab-','')));
  tb.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const next = tabs[(i + d + tabs.length) % tabs.length];
    next.focus(); next.click();
  });
});
$$('[data-tab]').forEach(a => a.addEventListener('click', () => selectTab(a.dataset.tab)));

/* ---------- Projects ---------- */
const STATUS = { done:'s-done', wip:'s-wip', ongoing:'s-ongoing', plan:'s-plan' };
const SHOW_TAGS = 3;
const CODE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>';
const fmtDate = d => {
  const [y, m] = d.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month:'short', year:'numeric' }).format(new Date(y, m - 1, 1));
};
const statusChip = p => `<span class="chip"><i class="sdot ${STATUS[p.status]}"></i>${esc(fmtDate(p.date))} · ${esc(t('js.' + p.status))}</span>`;

/* Title with the emoji glued to the last word, so it never wraps alone */
const titleHTML = p => {
  const text = p.title[lang];
  if (!p.emoji) return esc(text);
  const cut = text.lastIndexOf(' ') + 1;
  return `${esc(text.slice(0, cut))}<span class="nowrap">${esc(text.slice(cut))}&nbsp;<span class="pemoji" aria-hidden="true">${p.emoji}</span></span>`;
};

/* Every project is shown as a service desk ticket */
const TK_PREFIX = { sec:'SEC', cloud:'CLD', ai:'AI', infra:'INF', data:'DAT', web:'WEB' };
const TK_STATE  = { done:'js.tkDone', wip:'js.tkWip', ongoing:'js.tkOngoing', plan:'js.tkPlan' };
const ticketIds = new Map();
(() => {
  const seen = {};
  [...PROJECTS].reverse().forEach(p => {            // oldest first, so numbers grow over time
    const base = `${TK_PREFIX[p.cat]}-${p.date.slice(2,4)}${p.date.slice(5,7)}`;
    seen[base] = (seen[base] || 0) + 1;
    ticketIds.set(p, `${base}-${String(seen[base]).padStart(2,'0')}`);
  });
})();
const tkState = p => `<span class="tk-state st-${p.status}"><i class="sdot ${STATUS[p.status]}"></i>${esc(t(TK_STATE[p.status]))}</span>`;

function projectCard(p){
  const i = PROJECTS.indexOf(p);
  const extra = p.tags.length - SHOW_TAGS;
  return `
  <article class="card pcard ticket st-${p.status}">
    <div class="tk-head"><span class="tk-id">#${esc(ticketIds.get(p))}</span>${tkState(p)}</div>
    <span class="plabel">${esc(p.label[lang])}</span>
    <h3><button class="ptitle" type="button" data-open="${i}">${titleHTML(p)}</button></h3>
    <dl class="tk-meta">
      <div><dt>${esc(t('js.tkReq'))}</dt><dd>${esc(WITH[p.with].chip[lang])}</dd></div>
      <div><dt>${esc(t('js.tkOpened'))}</dt><dd>${esc(fmtDate(p.date))}</dd></div>
    </dl>
    <p class="pdesc">${esc(p.desc[lang])}</p>
    <div class="ptags">${p.tags.slice(0, SHOW_TAGS).map(x => `<span class="ptag">${esc(x)}</span>`).join('')}${extra > 0 ? `<span class="ptag more">+${extra}</span>` : ''}</div>
    <div class="pfoot">
      <button class="pview" type="button" data-open="${i}">${esc(t('js.tkView'))}</button>
      ${p.repo ? `<a class="pcode" href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="${esc(t('js.code'))}">${CODE_ICON}</a>` : ''}
    </div>
  </article>`;
}

/* Project details pop-up */
const modal = document.createElement('dialog');
modal.className = 'pmodal';
document.body.appendChild(modal);
let openIndex = -1;
function openProject(i){
  const p = PROJECTS[i]; openIndex = i;
  modal.innerHTML = `
    <div class="pm-head tk-head">
      <span class="tk-id">#${esc(ticketIds.get(p))}</span>
      <span class="pm-right">${tkState(p)}<button class="pm-close" type="button" aria-label="${esc(t('js.close'))}">✕</button></span>
    </div>
    <span class="plabel">${esc(p.label[lang])}</span>
    <h3>${titleHTML(p)}</h3>
    <dl class="tk-grid">
      <div><dt>${esc(t('js.tkReq'))}</dt><dd>${esc(WITH[p.with].chip[lang])}</dd></div>
      <div><dt>${esc(t('js.tkAssignee'))}</dt><dd>Zaafir</dd></div>
      <div><dt>${esc(t('js.tkQueue'))}</dt><dd>${esc(CATS[p.cat][lang])}</dd></div>
      <div><dt>${esc(t('js.tkOpened'))}</dt><dd>${esc(fmtDate(p.date))}</dd></div>
    </dl>
    <h4>${esc(t(p.status === 'done' ? 'js.tkResolution' : 'js.tkDetails'))}</h4>
    <p class="pm-desc">${esc(p.desc[lang])}</p>
    <h4>${esc(t('js.tools'))}</h4>
    <div class="ptags">${p.tags.map(x => `<span class="ptag">${esc(x)}</span>`).join('')}</div>
    ${p.repo ? `<a class="btn" href="${esc(p.repo)}" target="_blank" rel="noopener">${CODE_ICON}${esc(t('js.code'))} ↗</a>` : ''}`;
  if (!modal.open) modal.showModal();
  $('.pm-close', modal).focus();
}
modal.addEventListener('click', e => {
  if (e.target === modal || e.target.closest('.pm-close')) modal.close();
});
modal.addEventListener('close', () => { openIndex = -1; });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-open]');
  if (b) openProject(+b.dataset.open);
});

/* Homepage: the 3 latest projects */
function renderLatest(){
  const grid = $('#pgrid'); if (!grid) return;
  grid.innerHTML = PROJECTS.slice(0, 3).map(projectCard).join('');
}

/* All Projects page: filters */
const filters = { year:'all', cat:'all', with:'all' };
function filterGroup(key, options){
  const box = $('#f-' + key); if (!box) return;
  box.innerHTML = [['all', t('js.all')], ...options].map(([v, label]) => {
    const n = v === 'all' ? PROJECTS.length : PROJECTS.filter(p => (key === 'year' ? p.date.slice(0,4) : p[key]) === v).length;
    return `<button class="filter" type="button" data-key="${key}" data-val="${esc(v)}" aria-pressed="${filters[key] === v}">${esc(label)}<span class="n">${n}</span></button>`;
  }).join('');
}
function renderAll(){
  const grid = $('#allGrid'); if (!grid) return;
  const years = [...new Set(PROJECTS.map(p => p.date.slice(0, 4)))].sort().reverse();
  filterGroup('year', years.map(y => [y, y]));
  filterGroup('cat', Object.keys(CATS).filter(k => PROJECTS.some(p => p.cat === k)).map(k => [k, CATS[k][lang]]));
  filterGroup('with', Object.keys(WITH).filter(k => PROJECTS.some(p => p.with === k)).map(k => [k, WITH[k][lang]]));
  const list = PROJECTS.filter(p =>
    (filters.year === 'all' || p.date.startsWith(filters.year)) &&
    (filters.cat === 'all' || p.cat === filters.cat) &&
    (filters.with === 'all' || p.with === filters.with));
  const byYear = {};
  list.forEach(p => (byYear[p.date.slice(0, 4)] = byYear[p.date.slice(0, 4)] || []).push(p));
  grid.innerHTML = list.length
    ? Object.keys(byYear).sort().reverse().map(y => `
      <section class="yr-group" aria-label="${y}">
        <h2 class="yr"><span>${y}</span><small>${byYear[y].length}</small></h2>
        <div class="yr-rows">${byYear[y].map(projectCard).join('')}</div>
      </section>`).join('')
    : `<p class="empty">${esc(t('js.empty'))}</p>`;
  $('#resultCount').textContent = t(list.length === 1 ? 'js.result1' : 'js.results').replace('{n}', list.length);
  $('#resetFilters').hidden = filters.year === 'all' && filters.cat === 'all' && filters.with === 'all';
}
document.addEventListener('click', e => {
  const b = e.target.closest('.filter[data-key]'); if (!b) return;
  filters[b.dataset.key] = b.dataset.val; renderAll();
});
$('#resetFilters')?.addEventListener('click', () => { filters.year = filters.cat = filters.with = 'all'; renderAll(); });

$$('.projCount').forEach(el => el.textContent = PROJECTS.length);

/* ---------- Certifications ---------- */
const CERT_STATUS = { done:['js.certDone','s-done'], wip:['js.wip','s-wip'], plan:['js.plan','s-plan'] };
const certYear = c => (c.date.en.match(/\d{4}/) || [''])[0];
const certHead = c => `<div class="cert-top">
        <div class="issuer"><span class="logo" data-logo="${esc(c.file)}" aria-hidden="true">${esc(c.logo)}</span><span>${esc(c.issuer)}</span></div>
        <span class="pill ${CERT_STATUS[c.status][1]}">${esc(t(CERT_STATUS[c.status][0]))}</span>
      </div>`;
function certCard(c){
  const i = CERTS.indexOf(c);
  return `
    <article class="card cert-card">
      ${certHead(c)}
      <h3>${esc(c.title[lang])}</h3>
      <p>${esc(c.desc[lang])}</p>
      <div class="cert-foot">${c.date[lang] ? `<span class="date">${esc(c.date[lang])}</span>` : '<span></span>'}<button class="pview" type="button" data-cert="${i}">${esc(t('js.cDetails'))}</button></div>
    </article>`;
}
function renderCerts(){
  if (!$('#certs')) return;
  $('#certs').innerHTML = CERTS.slice(0, 3).map(certCard).join('');
  loadLogos($('#certs'));
}

/* Certification details pop-up */
const cmodal = document.createElement('dialog');
cmodal.className = 'pmodal';
document.body.appendChild(cmodal);
function openCert(i){
  const c = CERTS[i];
  const sk = certSkills(c);
  cmodal.innerHTML = `
    <div class="pm-head tk-head">
      <span class="issuer"><span class="logo" data-logo="${esc(c.file)}" aria-hidden="true">${esc(c.logo)}</span><span>${esc(c.issuer)}</span></span>
      <span class="pm-right"><span class="pill ${CERT_STATUS[c.status][1]}">${esc(t(CERT_STATUS[c.status][0]))}</span><button class="pm-close" type="button" aria-label="${esc(t('js.close'))}">✕</button></span>
    </div>
    <h3>${esc(c.title[lang])}</h3>
    <dl class="tk-grid cert-meta">
      <div><dt>${esc(t('js.cIssuer'))}</dt><dd>${esc(c.issuer)}</dd></div>
      <div><dt>${esc(t('js.cStatus'))}</dt><dd>${esc(t(CERT_STATUS[c.status][0]))}</dd></div>
      <div><dt>${esc(t('js.cDate'))}</dt><dd>${esc(c.date[lang] || t('js.cNoDate'))}</dd></div>
    </dl>
    <p class="pm-desc">${esc(c.desc[lang])}</p>
    ${sk.length ? `<h4>${esc(t(c.status === 'done' ? 'js.cSkillsDone' : 'js.cSkillsWip'))}</h4>
    <div class="ptags">${sk.map(x => `<span class="ptag">${esc(x)}</span>`).join('')}</div>` : ''}`;
  loadLogos(cmodal);
  if (!cmodal.open) cmodal.showModal();
  $('.pm-close', cmodal).focus();
}
cmodal.addEventListener('click', e => { if (e.target === cmodal || e.target.closest('.pm-close')) cmodal.close(); });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-cert]');
  if (b) openCert(+b.dataset.cert);
});

/* All Certifications page */
const cfilters = { status:'all', issuer:'all' };
function certFilterGroup(key, options){
  const box = $('#f-c' + key); if (!box) return;
  const val = c => key === 'status' ? (c.status === 'wip' ? 'wip' : 'done') : c.issuer;
  box.innerHTML = [['all', t('js.all')], ...options].map(([v, label]) => {
    const n = v === 'all' ? CERTS.length : CERTS.filter(c => val(c) === v).length;
    return `<button class="filter" type="button" data-ckey="${key}" data-val="${esc(v)}" aria-pressed="${cfilters[key] === v}">${esc(label)}<span class="n">${n}</span></button>`;
  }).join('');
}
function renderAllCerts(){
  const grid = $('#allCerts'); if (!grid) return;
  certFilterGroup('status', [['done', t('js.certDone')], ['wip', t('js.cInProgress')]]);
  certFilterGroup('issuer', [...new Set(CERTS.map(c => c.issuer))].map(n => [n, n]));
  const list = CERTS.filter(c =>
    (cfilters.status === 'all' || (c.status === 'wip' ? 'wip' : 'done') === cfilters.status) &&
    (cfilters.issuer === 'all' || c.issuer === cfilters.issuer));
  const groups = {};
  list.forEach(c => { const k = c.status === 'wip' ? 'wip' : certYear(c); (groups[k] = groups[k] || []).push(c); });
  const keys = Object.keys(groups).sort((a, b) => a === 'wip' ? -1 : b === 'wip' ? 1 : b - a);
  grid.innerHTML = list.length ? keys.map(k => `
    <section class="yr-group" aria-label="${k === 'wip' ? esc(t('js.cInProgress')) : k}">
      <h2 class="yr${k === 'wip' ? ' yr-text' : ''}"><span>${k === 'wip' ? esc(t('js.cInProgress')) : k}</span><small>${groups[k].length}</small></h2>
      <div class="yr-rows">${groups[k].map(c => {
        const sk = certSkills(c);
        return `<article class="cert-row">
          ${certHead(c)}
          <h3><button class="ptitle" type="button" data-cert="${CERTS.indexOf(c)}">${esc(c.title[lang])}</button></h3>
          <p class="pdesc">${esc(c.desc[lang])}</p>
          ${sk.length ? `<div class="ptags">${sk.slice(0, 4).map(x => `<span class="ptag">${esc(x)}</span>`).join('')}${sk.length > 4 ? `<span class="ptag more">+${sk.length - 4}</span>` : ''}</div>` : ''}
          <div class="cert-foot">${c.date[lang] ? `<span class="date">${esc(c.date[lang])}</span>` : '<span></span>'}<button class="pview" type="button" data-cert="${CERTS.indexOf(c)}">${esc(t('js.cDetails'))}</button></div>
        </article>`; }).join('')}</div>
    </section>`).join('') : `<p class="empty">${esc(t('js.cEmpty'))}</p>`;
  $('#cResultCount').textContent = t(list.length === 1 ? 'js.cResult1' : 'js.cResults').replace('{n}', list.length);
  $('#cResetFilters').hidden = cfilters.status === 'all' && cfilters.issuer === 'all';
  loadLogos(grid);
}
document.addEventListener('click', e => {
  const b = e.target.closest('.filter[data-ckey]'); if (!b) return;
  cfilters[b.dataset.ckey] = b.dataset.val; renderAllCerts();
});
$('#cResetFilters')?.addEventListener('click', () => { cfilters.status = cfilters.issuer = 'all'; renderAllCerts(); });
$$('.certTotal').forEach(el => el.textContent = CERTS.length);
if ($('#certCount')) $('#certCount').textContent = CERTS.filter(c => c.status === 'done').length;


/* ---------- Company logos ----------
   Save a logo in assets/logos/ with the name used in data-logo
   (e.g. assets/logos/microsoft.png) and it replaces the letters.
   PNG, SVG, JPG and WEBP all work. No file? The letters stay. */
function loadLogos(scope = document){
  $$('.logo[data-logo]', scope).forEach(box => {
    if (box.dataset.tried) return;
    box.dataset.tried = '1';
    const embedded = window.LOGO_DATA && window.LOGO_DATA[box.dataset.logo];
    if (embedded) {
      const img = new Image(); img.alt = ''; img.src = embedded;
      box.textContent = ''; box.appendChild(img); box.classList.add('has-img');
      return;
    }
    const exts = ['png', 'svg', 'jpg', 'webp'];
    const tryNext = i => {
      if (i >= exts.length) return;
      const img = new Image();
      img.alt = '';
      img.onload = () => { box.textContent = ''; box.appendChild(img); box.classList.add('has-img'); };
      img.onerror = () => tryNext(i + 1);
      img.src = `assets/logos/${box.dataset.logo}.${exts[i]}`;
    };
    tryNext(0);
  });
}

/* ---------- Learning tracker ---------- */
function renderLearning(){
  const grid = $('#learnGrid'); if (!grid || typeof LEARNING === 'undefined') return;
  const [y, m] = LEARNING_UPDATED.split('-').map(Number);
  $('#lnUpdated').textContent = t('js.lnUpdated').replace('{d}', new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month:'long', year:'numeric' }).format(new Date(y, m - 1, 1)));
  grid.innerHTML = LEARNING.map(c0 => {
    let c = c0;
    let pct = c.progress, endLabel = null;
    if (c.start && c.end){                     // fill the bar by date
      const toDate = v => { const [yy, mm] = v.split('-').map(Number); return new Date(yy, mm - 1, 1); };
      const s0 = toDate(c.start), e0 = toDate(c.end);
      pct = Math.round(Math.min(1, Math.max(0, (Date.now() - s0) / (e0 - s0))) * 100);
      endLabel = t('js.lnEnds').replace('{d}', new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month:'long', year:'numeric' }).format(e0));
    }
    c = { ...c, progress: pct, progressLabel: endLabel ? { [lang]: `${pct}% · ${endLabel}` } : c.progressLabel };
    const hasPct = typeof c.progress === 'number';
    const bar = hasPct
      ? `<div class="ln-bar" role="progressbar" aria-valuenow="${c.progress}" aria-valuemin="0" aria-valuemax="100"><span style="--w:${c.progress}%"></span></div><span class="ln-pct">${c.progressLabel ? esc(c.progressLabel[lang]) : c.progress + '%'}</span>`
      : `<div class="ln-bar ind" role="progressbar" aria-label="${esc(t('js.lnActive'))}"><span></span></div><span class="ln-pct">${esc(t('js.lnActive'))}</span>`;
    const steps = c.steps ? `<ol class="ln-steps">${c.steps.map(st => `<li class="ln-${st.status}"><i aria-hidden="true"></i><span>${esc(st[lang])}</span><em>${esc(t('js.ln_' + st.status))}</em></li>`).join('')}</ol>` : '';
    const covers = c.covers ? `<p class="ln-k">${esc(t('js.lnCovers'))}</p><ul class="ln-covers">${c.covers.map(x => `<li>${esc(x[lang])}</li>`).join('')}</ul>` : '';
    return `
    <article class="card ln-card">
      <div class="cert-top"><div class="issuer"><span class="logo" data-logo="${esc(c.file)}" aria-hidden="true">${esc(c.logo)}</span><span>${esc(c.provider)} · ${esc(c.meta[lang])}</span></div></div>
      <h3>${esc(c.title[lang])}</h3>
      <div class="ln-progress">${bar}</div>
      ${steps}${covers}
      <div class="chips">${(c.tools || []).map(x => `<span class="c l">${esc(x)}</span>`).join('')}</div>
    </article>`;
  }).join('');
  loadLogos(grid);
}

/* ---------- Skills ---------- */
const SK_COLLAPSE = 5;
/* Which projects used which skill. Keys are English skill names, values are English project titles.
   Only list a link when the project really used that skill. */
const SKILL_PROJECTS = {
  'Microsoft 365': ['Microsoft 365 & Endpoint Management','Entra ID Licence Management','Aramco CCC Cybersecurity Assessment','IT Operations & Financial Administration'],
  'Microsoft Entra ID': ['Microsoft 365 & Endpoint Management','Entra ID Licence Management','Aramco CCC Cybersecurity Assessment','Entra ID Identity & Access Lab'],
  'Identity & Access Management': ['Entra ID Identity & Access Lab','Entra ID Licence Management'],
  'User Account Management': ['Entra ID Identity & Access Lab','Entra ID Licence Management'],
  'Microsoft Intune': ['Intune App Deployment','Microsoft 365 & Endpoint Management'],
  'Endpoint Management': ['Intune App Deployment','Microsoft 365 & Endpoint Management'],
  'Microsoft Defender': ['Microsoft 365 & Endpoint Management'],
  'Software Deployment': ['Intune App Deployment'],
  'Troubleshooting': ['Intune App Deployment'],
  'Software Troubleshooting': ['Intune App Deployment'],
  'IT Documentation': ['IT Operations & Financial Administration','Aramco CCC Cybersecurity Assessment'],
  'Cybersecurity Fundamentals': ['Aramco CCC Cybersecurity Assessment'],
  'Email Security': ['DMARC Domain Scanner'],
  'Email Authentication': ['DMARC Domain Scanner'],
  'SPF': ['DMARC Domain Scanner'], 'DKIM': ['DMARC Domain Scanner'], 'DMARC': ['DMARC Domain Scanner'],
  'DNS Management': ['DMARC Domain Scanner'], 'DNS & Domain Management': ['DMARC Domain Scanner'],
  'Generative AI': ['Sales Analyser AI Agent','DMARC Domain Scanner'],
  'AI Agents': ['Sales Analyser AI Agent'],
  'Microsoft Power Automate': ['Power Automate Business Workflow'],
  'Workflow Automation': ['Power Automate Business Workflow'],
  'Python': ['Python Programming Coursework'],
  'HTML': ['Web Development & Graphic Design'],
  'Linux': ['Linux Foundations Virtual Lab'],
  'Bash Scripting': ['Linux Foundations Virtual Lab'],
  'Microsoft Excel': ['IT Service Desk Analytics Dashboard','Database & Spreadsheet Modelling','Aramco CCC Cybersecurity Assessment','Sales Analyser AI Agent','IT Operations & Financial Administration'],
  'Microsoft Access': ['Database & Spreadsheet Modelling'],
  'Data Visualisation': ['IT Service Desk Analytics Dashboard'],
  'Adobe Photoshop': ['Web Development & Graphic Design'],
  'Autodesk Maya': ['Web Development & Graphic Design'],
  'Web Design': ['Web Development & Graphic Design','Website Development & Maintenance'],
  'Website Management': ['Website Development & Maintenance']
};
const skillProjects = name => (SKILL_PROJECTS[name] || []).map(tt => PROJECTS.findIndex(p => p.title.en === tt)).filter(i => i > -1);

function renderSkills(){
  if (!$('#skillGrid')) return;
  let ci = 0;
  const WIDE = new Set(["Microsoft Cloud & M365","AI & Automation","Development & Systems","Google Workspace"]);
  const FULL = new Set(["Professional & Business"]);
  $('#skillGrid').innerHTML = SKILLS.map(g => {
    const cls = ['sk-card'];
    if (FULL.has(g.en)) cls.push('sk-card--full');
    else if (WIDE.has(g.en)) cls.push('sk-card--wide');
    return `<article class="${cls.join(' ')}">
      <header class="sk-card-head">
        <span class="sk-card-title">${esc(g[lang])}</span>
        <span class="sk-card-count">${g.items.length}</span>
      </header>
      <div class="sk-body">
        <div class="chips${g.items.length > SK_COLLAPSE ? ' clamp' : ''}">${g.items.map(([en,fr,type]) => { const n = skillProjects(en).length; return n ? `<span class="c ${type} has-p" role="button" tabindex="0" data-skill="${esc(en)}" data-n="${n}" style="--ci:${ci++}">${esc(lang==='fr'?fr:en)}</span>` : `<span class="c ${type}" style="--ci:${ci++}">${esc(lang==='fr'?fr:en)}</span>`; }).join('')}</div>
        ${g.items.length > SK_COLLAPSE ? `<button class="sk-more" type="button" aria-expanded="false" data-n="${g.items.length}">${esc(t('js.skMore').replace('{n}', g.items.length))}</button>` : ''}
      </div>
    </article>`;
  }).join('');
}

/* ---------- Skill graph (global handle) ---------- */
let graph = null;

/* ================================================================
   SKILL NETWORK GRAPH
   Force-directed: 9 hub (category) nodes + 87 skill leaf nodes.
   Canvas 2D, DPR-aware. Colours by origin: w=accent, s=plan, l=wip.
   ================================================================ */
class SkillGraph {
  constructor(canvas, tipEl) {
    this.canvas  = canvas;
    this.ctx     = canvas.getContext('2d');
    this.tip     = tipEl;
    this.nodes   = [];
    this.edges   = [];
    this.filter  = 'all';
    this.hovered = null;
    this.alpha   = 1;
    this.raf     = null;
    this.W = 0; this.H = 0;
    this._inited = false;

    this._build();
    this._bindEvents();
    this._resize();
    window.addEventListener('resize', () => this._resize(), { passive: true });
    this._loop();
  }

  /* ---- Build nodes & edges from SKILLS data ---- */
  _build() {
    const hubByGroup = {};
    SKILLS.forEach((group, gi) => {
      const hub = {
        type: 'hub', group: gi,
        label: group.en, labelFr: group.fr,
        x: 0, y: 0, vx: 0, vy: 0, r: 24, mass: 4
      };
      this.nodes.push(hub);
      hubByGroup[gi] = hub;
    });
    SKILLS.forEach((group, gi) => {
      group.items.forEach(([en, fr, src]) => {
        const skill = {
          type: 'skill', group: gi, src,
          label: en, labelFr: fr,
          x: 0, y: 0, vx: 0, vy: 0, r: 5.5, mass: 1
        };
        this.nodes.push(skill);
        this.edges.push({ a: hubByGroup[gi], b: skill });
      });
    });
  }

  /* ---- Size canvas and seed initial positions once ---- */
  _resize() {
    const dpr  = window.devicePixelRatio || 1;
    const wrap = this.canvas.parentElement;
    const rect = wrap.getBoundingClientRect();
    const W    = Math.max(rect.width  || 800, 300);
    const H    = Math.max(rect.height || 520, 300);

    this.W = W; this.H = H;
    this.canvas.width        = W * dpr;
    this.canvas.height       = H * dpr;
    this.canvas.style.width  = W + 'px';
    this.canvas.style.height = H + 'px';

    if (!this._inited) {
      this._inited = true;
      const cx   = W / 2, cy = H / 2;
      const hubs = this.nodes.filter(n => n.type === 'hub');
      const rHub = Math.min(W, H) * 0.27;

      hubs.forEach((hub, i) => {
        const angle = (i / hubs.length) * Math.PI * 2 - Math.PI / 2;
        hub.x = cx + Math.cos(angle) * rHub;
        hub.y = cy + Math.sin(angle) * rHub;
      });
      this.nodes.filter(n => n.type === 'skill').forEach(skill => {
        const hub = hubs[skill.group];
        const a   = Math.random() * Math.PI * 2;
        const d   = 50 + Math.random() * 35;
        skill.x   = hub.x + Math.cos(a) * d;
        skill.y   = hub.y + Math.sin(a) * d;
      });
    }
  }

  /* ---- Physics simulation tick ---- */
  _tick() {
    const { nodes, edges, W, H } = this;
    const cx = W / 2, cy = H / 2;
    const alpha = Math.max(this.alpha, 0);

    if (alpha > 0.001) {
      // Centre gravity
      nodes.forEach(n => {
        n.vx += (cx - n.x) * 0.003 * alpha;
        n.vy += (cy - n.y) * 0.003 * alpha;
      });

      // Repulsion — O(n²), fine for ~96 nodes
      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const d  = Math.sqrt(dx * dx + dy * dy) || 0.01;
          const minD = (a.r + b.r) * 4.5;
          if (d < minD) {
            const f  = (minD - d) / minD * 0.12 * alpha;
            const fx = (dx / d) * f, fy = (dy / d) * f;
            a.vx -= fx / a.mass; a.vy -= fy / a.mass;
            b.vx += fx / b.mass; b.vy += fy / b.mass;
          }
        }
      }

      // Spring edges
      const tLen = 72;
      edges.forEach(({ a, b }) => {
        const dx = b.x - a.x, dy = b.y - a.y;
        const d  = Math.sqrt(dx * dx + dy * dy) || 1;
        const f  = (d - tLen) / d * 0.06 * alpha;
        const fx = dx * f, fy = dy * f;
        a.vx += fx / a.mass; a.vy += fy / a.mass;
        b.vx -= fx / b.mass; b.vy -= fy / b.mass;
      });

      this.alpha *= 0.994;
    }

    // Integrate + boundary
    nodes.forEach(n => {
      n.vx *= 0.5; n.vy *= 0.5;
      n.x  += n.vx; n.y  += n.vy;
      const pad = n.r + 8;
      n.x = Math.max(pad, Math.min(W - pad, n.x));
      n.y = Math.max(pad, Math.min(H - pad, n.y));
    });
  }

  /* ---- Canvas draw ---- */
  _draw() {
    const { canvas, ctx, nodes, edges, filter, hovered } = this;
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    const cs = getComputedStyle(document.documentElement);
    const C = {
      accent: cs.getPropertyValue('--accent').trim(),
      plan:   cs.getPropertyValue('--plan').trim(),
      wip:    cs.getPropertyValue('--wip').trim(),
      line:   cs.getPropertyValue('--line').trim(),
      surf:   cs.getPropertyValue('--surface').trim(),
      ink:    cs.getPropertyValue('--ink').trim(),
    };
    const srcCol = { w: C.accent, s: C.plan, l: C.wip };

    // Edges
    edges.forEach(({ a, b }) => {
      const active = filter === 'all' || b.src === filter;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle  = C.line;
      ctx.globalAlpha  = active ? 0.6 : 0.1;
      ctx.lineWidth    = 0.8;
      ctx.stroke();
    });

    // Skill nodes (drawn before hubs so hubs sit on top)
    ctx.globalAlpha = 1;
    nodes.filter(n => n.type === 'skill').forEach(n => {
      const active  = filter === 'all' || n.src === filter;
      const isHover = n === hovered;
      const color   = srcCol[n.src] || C.accent;
      const r       = isHover ? n.r * 1.9 : n.r;

      ctx.globalAlpha = active ? (isHover ? 1 : 0.72) : 0.12;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      if (isHover) {
        ctx.globalAlpha  = 0.55;
        ctx.strokeStyle  = '#fff';
        ctx.lineWidth    = 1.5;
        ctx.stroke();
      }
    });

    // Hub nodes
    nodes.filter(n => n.type === 'hub').forEach(n => {
      const isHover = n === hovered;
      const r = isHover ? n.r * 1.1 : n.r;

      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = C.surf;
      ctx.fill();

      ctx.strokeStyle  = C.accent;
      ctx.globalAlpha  = isHover ? 1 : 0.6;
      ctx.lineWidth    = isHover ? 2 : 1.5;
      ctx.stroke();

      // Word-wrapped label inside hub
      ctx.globalAlpha  = isHover ? 1 : 0.82;
      ctx.fillStyle    = C.ink;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.font         = `600 9px sans-serif`;

      const rawLabel = lang === 'fr'
        ? (SKILLS[n.group]?.fr || n.label)
        : n.label;
      const maxW  = r * 1.65;
      const words = rawLabel.split(/[\s&\/]+/);
      const lines = [];
      let   cur   = '';
      words.forEach(w => {
        const test = cur ? cur + ' ' + w : w;
        if (ctx.measureText(test).width <= maxW) { cur = test; }
        else { if (cur) lines.push(cur); cur = w; }
      });
      if (cur) lines.push(cur);

      const lineH  = 11;
      const startY = n.y - ((lines.length - 1) * lineH) / 2;
      lines.forEach((line, i) => ctx.fillText(line, n.x, startY + i * lineH));
    });

    ctx.restore();
  }

  /* ---- Hit-test ---- */
  _hit(mx, my) {
    let found = null, best = Infinity;
    this.nodes.forEach(n => {
      const d = Math.hypot(n.x - mx, n.y - my);
      if (d < n.r + 8 && d < best) { found = n; best = d; }
    });
    return found;
  }

  /* ---- Events ---- */
  _bindEvents() {
    const { canvas, tip } = this;
    const pos = e => {
      const r = canvas.getBoundingClientRect();
      const s = e.touches ? e.touches[0] : e;
      return { x: s.clientX - r.left, y: s.clientY - r.top };
    };

    canvas.addEventListener('mousemove', e => {
      const { x, y } = pos(e);
      const node = this._hit(x, y);
      this.hovered      = node;
      canvas.style.cursor = node ? 'pointer' : 'default';

      if (tip) {
        if (node) {
          const srcLbl    = { w: 'At work', s: 'From study', l: 'Learning now' };
          const nodeLabel = lang === 'fr' ? node.labelFr : node.label;
          tip.textContent = node.type === 'hub'
            ? nodeLabel
            : `${nodeLabel} · ${srcLbl[node.src]}`;
          const wr = canvas.parentElement.getBoundingClientRect();
          tip.style.left  = Math.min(e.clientX - wr.left + 14, this.W - 180) + 'px';
          tip.style.top   = Math.max(e.clientY - wr.top  - 38, 4) + 'px';
          tip.classList.add('visible');
        } else {
          tip.classList.remove('visible');
        }
      }
    }, { passive: true });

    canvas.addEventListener('mouseleave', () => {
      this.hovered = null;
      tip?.classList.remove('visible');
    });
  }

  /* ---- Main loop ---- */
  _loop() {
    const step = () => {
      this._tick();
      this._draw();
      this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }

  setFilter(src) { this.filter = src; }
  setLang()      { /* labels re-read from SKILLS each draw frame */ }
  pause()        { if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; } }
  resume()       { if (!this.raf) this._loop(); }
}

/* ================================================================
   GITHUB ACTIVITY FEED
   ================================================================ */
function timeAgo(d) {
  const s = Math.floor((Date.now() - new Date(d)) / 1000);
  if (s < 60)    return `${s}s ago`;
  if (s < 3600)  return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  const days = Math.floor(s / 86400);
  return days === 1 ? '1 day ago' : `${days}d ago`;
}

/* ---------- Weather widget ---------- */
const WX_CITIES = [
  { id:'lon',  name:'London',     tz:'Europe/London', lat:  51.51, lon:  -0.13 },
  { id:'par',  name:'Paris',      tz:'Europe/Paris',  lat:  48.85, lon:   2.35, code:'FR' },
  { id:'dxb',  name:'Dubai',      tz:'Asia/Dubai',    lat:  25.20, lon:  55.27, code:'AE' },
  { id:'pdy',  name:'Pondichéry', tz:'Asia/Kolkata',  lat:  11.93, lon:  79.83, code:'IN' },
];
const WX = {};
const FLAGS = {
  gb:'<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#012169"/><path d="M0 0l60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/><path d="M30 0v40M0 20h60" stroke="#C8102E" stroke-width="8"/></svg>',
  fr:'<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#0055A4"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#EF4135"/></svg>',
  ae:'<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/><rect y="0" x="16" width="44" height="13.4" fill="#00732F"/><rect y="26.6" x="16" width="44" height="13.4" fill="#000"/><rect width="16" height="40" fill="#FF0000"/></svg>',
  in:'<svg viewBox="0 0 60 40"><rect width="60" height="13.4" fill="#FF9933"/><rect y="13.3" width="60" height="13.4" fill="#fff"/><rect y="26.6" width="60" height="13.4" fill="#138808"/><circle cx="30" cy="20" r="5" fill="none" stroke="#000080" stroke-width="1.2"/><circle cx="30" cy="20" r="1" fill="#000080"/></svg>'
};
const PLACES = {
  lon:{ flag:'gb', name:{en:'London',fr:'Londres'}, country:{en:'United Kingdom',fr:'Royaume-Uni'},
    head:{en:'Home.',fr:'Chez moi.'}, facts:[{k:{en:'Work',fr:'Travail'},v:{en:'Service desk by day.',fr:'Service desk la journée.'}},{k:{en:'Study',fr:'Études'},v:{en:'Apprenticeship in AI and automation.',fr:'Apprentissage en IA et automatisation.'}},{k:{en:'Build',fr:'Projets'},v:{en:'Labs and side projects the rest of the time.',fr:'Labs et projets perso le reste du temps.'}}],
    tags:{en:['English','Home base'],fr:['Anglais','Port d’attache']},
    story:{en:'London is home. It’s where I work, study and build: service desk by day, labs and side projects the rest of the time.',
           fr:'Londres, c’est chez moi. C’est là que je travaille, que j’étudie et que je construis : service desk la journée, labs et projets perso le reste du temps.'} },
  par:{ flag:'fr', name:{en:'Paris',fr:'Paris'}, country:{en:'France',fr:'France'},
    head:{en:'Family, and everything French.',fr:'La famille, et tout ce qui est français.'}, facts:[{k:{en:'Family',fr:'Famille'},v:{en:'I have family there, which makes it feel special to me.',fr:'J’y ai de la famille, ce qui rend la ville spéciale pour moi.'}},{k:{en:'Culture',fr:'Culture'},v:{en:'The French culture, the architecture and the atmosphere.',fr:'La culture française, l’architecture et l’atmosphère.'}},{k:{en:'Language',fr:'Langue'},v:{en:'I enjoy speaking French and would love to spend more time there.',fr:'J’aime parler français et j’aimerais y passer plus de temps.'}}],
    tags:{en:['French','Family'],fr:['Français','Famille']},
    story:{en:'I like Paris because I have family there, which makes it feel special to me. I love the French culture, the architecture and the atmosphere. I also enjoy speaking French and would love to spend more time there.',
           fr:'J’aime Paris parce que j’y ai de la famille, ce qui rend la ville spéciale pour moi. J’adore la culture française, l’architecture et l’atmosphère. J’aime aussi parler français et j’aimerais y passer plus de temps.'} },
  dxb:{ flag:'ae', name:{en:'Dubai',fr:'Dubaï'}, country:{en:'United Arab Emirates',fr:'Émirats arabes unis'},
    head:{en:'Ambition and diversity.',fr:'L’ambition et la diversité.'}, facts:[{k:{en:'Lifestyle',fr:'Style de vie'},v:{en:'Modern, and always moving.',fr:'Moderne, et toujours en mouvement.'}},{k:{en:'People',fr:'Gens'},v:{en:'I love how different cultures come together there.',fr:'J’adore voir autant de cultures se rencontrer.'}},{k:{en:'Future',fr:'Avenir'},v:{en:'A place with lots of opportunities for the future.',fr:'Un lieu plein d’opportunités pour l’avenir.'}}],
    tags:{en:['Arabic · English','Opportunity'],fr:['Arabe · Anglais','Opportunités']},
    story:{en:'I like Dubai for its modern lifestyle, diversity and ambition. I love how different cultures come together there, and I see it as a place with lots of opportunities for the future.',
           fr:'J’aime Dubaï pour son mode de vie moderne, sa diversité et son ambition. J’adore voir autant de cultures se rencontrer, et je la vois comme un lieu plein d’opportunités pour l’avenir.'} },
  pdy:{ flag:'in', name:{en:'Pondichéry',fr:'Pondichéry'}, country:{en:'India',fr:'Inde'},
    head:{en:'My hometown.',fr:'Ma ville natale.'}, facts:[{k:{en:'Family',fr:'Famille'},v:{en:'I’m connected to it through my family.',fr:'Je m’y sens lié par ma famille.'}},{k:{en:'Roots',fr:'Racines'},v:{en:'My culture and roots, and I’ve been there many times throughout my life.',fr:'Ma culture et mes racines, et j’y suis allé de nombreuses fois au cours de ma vie.'}},{k:{en:'Influences',fr:'Influences'},v:{en:'A unique mix of French and Indian influences.',fr:'Un mélange unique d’influences françaises et indiennes.'}}], sub:{en:'It will always be a special place to me.',fr:'Ce sera toujours un endroit spécial pour moi.'},
    tags:{en:['Tamil · French · English','Hometown'],fr:['Tamoul · Français · Anglais','Ville natale']},
    story:{en:'Pondichéry is my hometown, and I’ve been there many times throughout my life. I’m connected to it through my family, culture and roots. I love its unique mix of French and Indian influences, and it will always be a special place to me.',
           fr:'Pondichéry est ma ville natale, et j’y suis allé de nombreuses fois au cours de ma vie. Je m’y sens lié par ma famille, ma culture et mes racines. J’adore son mélange unique d’influences françaises et indiennes, et ce sera toujours un endroit spécial pour moi.'} }
};
const GREET = { lon:['Hello','Hello'], par:['Bonjour','Bonjour'], dxb:['مرحبا','Marhaba'], pdy:['வணக்கம்','Vanakkam'] };
function distKm(c){
  const R = 6371, r = x => x * Math.PI / 180, a = WX_CITIES[0];
  const dLat = r(c.lat - a.lat), dLon = r(c.lon - a.lon);
  const h = Math.sin(dLat/2)**2 + Math.cos(r(a.lat)) * Math.cos(r(c.lat)) * Math.sin(dLon/2)**2;
  const k = 2 * R * Math.asin(Math.sqrt(h));
  return k < 1000 ? Math.round(k / 10) * 10 : Math.round(k / 100) * 100;
}
function localHM(tz, now){
  const p = new Intl.DateTimeFormat('en-GB', { hour:'2-digit', minute:'2-digit', hour12:false, timeZone:tz }).formatToParts(now);
  return p.find(x=>x.type==='hour').value.replace('24','00') + ':' + p.find(x=>x.type==='minute').value;
}
function isDay(c, now){
  const w = WX[c.id], hm = localHM(c.tz, now);
  if (w && w.sr && w.ss) return hm >= w.sr.slice(11,16) && hm < w.ss.slice(11,16);
  return hm >= '07:00' && hm < '19:00';
}
const WMO_TXT = c => c===0?['Clear sky','Ciel dégagé']:c<=2?['Partly cloudy','Peu nuageux']:c===3?['Overcast','Couvert']:c<=48?['Fog','Brouillard']:c<=57?['Drizzle','Bruine']:c<=67?['Rain','Pluie']:c<=77?['Snow','Neige']:c<=82?['Showers','Averses']:c<=86?['Snow showers','Averses de neige']:['Thunderstorm','Orage'];
const flagEl = k => `<span class="flag" aria-hidden="true">${FLAGS[k]}</span>`;

function wmoEmoji(code) {
  if (code === 0)          return '☀️';
  if (code === 1)          return '🌤';
  if (code === 2)          return '⛅';
  if (code === 3)          return '☁️';
  if (code <= 48)          return '🌫';
  if (code <= 57)          return '🌦';
  if (code <= 67)          return '🌧';
  if (code <= 77)          return '🌨';
  if (code <= 82)          return '🌦';
  if (code <= 86)          return '🌨';
  return '⛈';
}

async function loadWeather() {
  const BASE   = 'https://api.open-meteo.com/v1/forecast';
  const PARAMS = 'current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&daily=sunrise,sunset&timezone=auto&forecast_days=1';
  await Promise.all(WX_CITIES.map(c =>
    fetch(`${BASE}?latitude=${c.lat}&longitude=${c.lon}&${PARAMS}`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d && d.current) WX[c.id] = { t: Math.round(d.current.temperature_2m), f: Math.round(d.current.apparent_temperature), w: Math.round(d.current.wind_speed_10m), c: d.current.weather_code, sr: d.daily && d.daily.sunrise && d.daily.sunrise[0], ss: d.daily && d.daily.sunset && d.daily.sunset[0], i: wmoEmoji(d.current.weather_code) }; })
      .catch(() => null)
  ));
  tickClock();
}

/* ---------- Skills radar chart ---------- */
let chartFilter = 'all', chartCurrent = null, chartRaf = null;

/* Short single-line labels for the radar chart axes */
const SK_SHORT = {
  en: ["IT Support","Cloud & M365","Cybersecurity","Dev & Auto","Data","Web & Design"],
  fr: ["Support IT","Cloud & M365","Cybersécurité","Dev & Auto","Données","Web & Design"]
};

function buildChart(src) {
  const el = $('#skillChart'); if (!el) return;
  chartFilter = src;
  const W = 320, H = 300, cx = W / 2, cy = H / 2, maxR = 90;
  const n = SKILLS.length;
  const angle = i => (i / n) * 2 * Math.PI - Math.PI / 2;

  const counts = SKILLS.map(g => ({
    all: g.items.length,
    w:   g.items.filter(([,,t]) => t === 'w').length,
    s:   g.items.filter(([,,t]) => t === 's').length,
    l:   g.items.filter(([,,t]) => t === 'l').length,
  }));
  const maxAll = Math.max(...counts.map(c => c.all));
  const target = counts.map(c => (src === 'all' ? c.all : (c[src] || 0)) / maxAll);

  const ptXY = (frac, i) => {
    const r = frac * maxR, a = angle(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  /* dy and anchor based on position around the chart */
  const labelAttrs = i => {
    const a = angle(i);
    const top    = a < -Math.PI * 0.75 || a > Math.PI * 0.75;
    const bottom = Math.abs(a - Math.PI / 2) < Math.PI * 0.25;
    const right  = Math.cos(a) > 0.2;
    const left   = Math.cos(a) < -0.2;
    const anc = (right ? 'start' : left ? 'end' : 'middle');
    const dy  = (top ? '-0.4em' : bottom ? '1.1em' : '0.35em');
    return { anc, dy };
  };

  if (!$('#skPoly', el)) {
    /* Build static scaffold once */
    const grid = [0.33, 0.67, 1].map(f => {
      const pts = SKILLS.map((_, i) => ptXY(f, i).map(v => v.toFixed(1)).join(',')).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="var(--line)" stroke-width="1"${f < 1 ? ' stroke-dasharray="3 3"' : ''}/>`;
    }).join('');

    const axes = SKILLS.map((_, i) => {
      const [x2, y2] = ptXY(1, i);
      return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--line)" stroke-width="1" opacity="0.5"/>`;
    }).join('');

    const labs = SKILLS.map((g, i) => {
      const [x, y] = ptXY(1.38, i);
      const { anc, dy } = labelAttrs(i);
      const label = esc(SK_SHORT[lang][i]);
      return `<text id="slab${i}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anc}" dy="${dy}" font-size="11" font-family="var(--mono)" fill="var(--muted)" font-weight="500">${label}</text>`;
    }).join('');

    const dots = SKILLS.map((_, i) => `<circle id="sdt${i}" r="3.5" fill="var(--accent)" cx="0" cy="0"/>`).join('');

    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;overflow:visible" aria-hidden="true">${grid}${axes}<polygon id="skPoly" points="" fill="var(--accent)" fill-opacity="0.13" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>${dots}${labs}</svg>`;
    chartCurrent = SKILLS.map(() => 0);
  } else {
    /* Re-render labels for language change */
    SKILLS.forEach((g, i) => {
      const lab = $(`#slab${i}`, el); if (!lab) return;
      lab.textContent = SK_SHORT[lang][i];
    });
  }

  if (!chartCurrent) chartCurrent = SKILLS.map(() => 0);

  if (chartRaf) cancelAnimationFrame(chartRaf);
  const from = [...chartCurrent];
  const t0 = performance.now(), dur = 550;

  (function step(now) {
    const t = Math.min(1, (now - t0) / dur);
    const ease = 1 - Math.pow(1 - t, 3);
    chartCurrent = from.map((f, i) => f + (target[i] - f) * ease);
    const pts = chartCurrent.map((v, i) => ptXY(v, i).map(n => n.toFixed(1)).join(',')).join(' ');
    $('#skPoly', el).setAttribute('points', pts);
    chartCurrent.forEach((v, i) => {
      const [dx, dy] = ptXY(v, i);
      const d = $(`#sdt${i}`, el);
      if (d) { d.setAttribute('cx', dx.toFixed(1)); d.setAttribute('cy', dy.toFixed(1)); }
    });
    if (t < 1) chartRaf = requestAnimationFrame(step);
    else { chartCurrent = [...target]; chartRaf = null; }
  })(t0);
}

/* ---------- Stat tile counter animation ---------- */
function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const sfx = (lang === 'fr' ? el.dataset.sfxFr : el.dataset.sfxEn) || '';
  const t0 = performance.now(), dur = 1100;
  (function step(now) {
    const progress = Math.min(1, (now - t0) / dur);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target) + sfx;
    if (progress < 1) requestAnimationFrame(step);
    else { el.textContent = target + sfx; el.dataset.done = '1'; }
  })(t0);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
$$('[data-counter]').forEach(el => counterObs.observe(el));

/* Skills section: animate stat bars + chip stagger on first scroll-in */
const skSect = $('#skills');
if (skSect) new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    $('.sk-stats')?.classList.add('ready');
    $('#skillGrid')?.classList.add('ready');
    obs.disconnect();
  });
}, { threshold: 0.15 }).observe(skSect);

/* ---------- CV download button ---------- */
function updateCvBtn() {
  const fr = lang === 'fr';
  const file = `assets/Zaafir_CV_${fr ? 'FR' : 'EN'}.pdf`;
  const name = `Zaafir_CV_${fr ? 'FR' : 'EN'}.pdf`;
  $$('.cv-dl').forEach(a => { a.href = file; a.setAttribute('download', name); });
}
updateCvBtn();
document.addEventListener('langchange', () => {
  updateCvBtn();
  $$('[data-sfx-en],[data-sfx-fr]').forEach(el => {
    const sfx = (lang === 'fr' ? el.dataset.sfxFr : el.dataset.sfxEn) || '';
    el.textContent = parseInt(el.dataset.counter, 10) + sfx;
  });
  graph?.setLang();
});

/* ---------- Lab tabs ---------- */
$$('[data-tab]').forEach(btn => btn.addEventListener('click', () => {
  $$('[data-tab]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  btn.classList.add('active'); btn.setAttribute('aria-selected','true');
  const target = btn.dataset.tab;
  $$('.lab-panel').forEach(p => { const on = p.id === target; p.toggleAttribute('hidden', !on); p.classList.toggle('active', on); });
}));

/* ---------- Contact form: opens the visitor's email app ---------- */
$('#cform')?.addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#f-name').value.trim(), msg = $('#f-msg').value.trim();
  const note = $('#fnote');
  if (!name || !msg){ note.textContent = t('js.formErr'); return; }
  const topic = $('input[name="topic"]:checked').value;
  const subj = t(topic === 'role' ? 'js.subjRole' : topic === 'project' ? 'js.subjProj' : 'js.subjOther') + ' — ' + name;
  location.href = `mailto:${MAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(msg + '\n\n' + name)}`;
  note.textContent = t('js.formOk');
});

/* ---------- Email address ----------
   The address is never written out in the page, so bots that scan
   websites for email addresses can't pick it up. It's put together
   here only when someone clicks an Email / Write button. */
const MAIL = ['zaafir796', 'gmail.com'].join(String.fromCharCode(64));
$$('[data-mail]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  location.href = 'mailto:' + MAIL;
}));

/* =====================================================================
   V2 EXTRAS
   ===================================================================== */

/* Cursor spotlight: cards glow where the pointer is */
document.addEventListener('pointermove', e => {
  const el = e.target.closest?.('.spot, .card');
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, { passive:true });
$$('.card').forEach(c => c.classList.add('spot'));

/* Scroll progress bar + timeline fill */
const progress = $('#progress'), timeline = $('#timeline'), tlFill = $('#tlFill');
function onScroll(){
  const doc = document.documentElement;
  const max = doc.scrollHeight - innerHeight;
  progress?.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : 0);
  if (timeline && tlFill){
    const r = timeline.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
    tlFill.style.setProperty('--fill', (pct * 100).toFixed(1) + '%');
  }
}
addEventListener('scroll', onScroll, { passive:true });
addEventListener('resize', onScroll);
onScroll();

/* Live London clock */
function tickClock(){
  const c = $('#clock'); if (!c) return;
  const loc = lang === 'fr' ? 'fr-FR' : 'en-GB';
  const now = new Date();
  c.textContent = new Intl.DateTimeFormat(loc, { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false, timeZone:'Europe/London' }).format(now);
  $('#clockDate').textContent = new Intl.DateTimeFormat(loc, { weekday:'long', day:'numeric', month:'long', timeZone:'Europe/London' }).format(now);
  const lw = WX.lon, cw = $('#clockWx');
  if (cw) cw.innerHTML = `${flagEl('gb')}<span>${lw ? lw.i + ' ' + lw.t + '°C' : 'London'}</span>`;
  if (cw) cw.dataset.city = 'lon';
  const rows = $('#worldRows');
  if (rows) {
    rows.innerHTML = WX_CITIES.slice(1).map(c => {
      const tm = new Intl.DateTimeFormat(loc, { hour:'2-digit', minute:'2-digit', hour12:false, timeZone:c.tz }).format(now);
      const w = WX[c.id];
      return `<button type="button" class="w-row" data-city="${c.id}" aria-label="${esc(PLACES[c.id].name[lang])}">${flagEl(PLACES[c.id].flag)}<span class="w-city">${esc(PLACES[c.id].name[lang])}</span><span class="w-time">${tm}<i class="w-dn" aria-hidden="true">${isDay(c, now) ? '☀︎' : '☾'}</i></span><span class="w-t">${w ? w.i + ' ' + w.t + '°' : '·'}</span></button>`;
    }).join('');
  }
}
tickClock(); setInterval(tickClock, 1000);

/* Filter bento skill cards by origin source */
function filterBento(src) {
  const grid = $('#skillGrid');
  if (!grid) return;
  if (src === 'all') {
    grid.removeAttribute('data-filter');
    $$('.sk-card').forEach(c => c.classList.remove('sk-card--dim'));
  } else {
    grid.setAttribute('data-filter', src);
    $$('.sk-card').forEach(card => {
      card.classList.toggle('sk-card--dim', !card.querySelector(`.c.${src}`));
    });
  }
}

/* Skills: focus by source — dims non-matching cards/chips */
document.addEventListener('click', e => {
  const b = e.target.closest('.sk-stat[data-src]'); if (!b) return;
  $$('.sk-stat').forEach(x => { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); x.classList.toggle('active', x === b); });
  filterBento(b.dataset.src);
});

/* Highlight the current section in the menu (v2 sections) */
/* ---------- Highlight the current section in the menu ---------- */
const navLinks = $$('.links a, .drawer-nav a');
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) a.classList.toggle('active', href === '#' + en.target.id);
  });
}), { rootMargin: '-45% 0px -50% 0px' });
if ($('#about')) $$('main section').forEach(s => spy.observe(s));

/* ---------- Mobile drawer ---------- */
(function(){
  const burger = $('#burger'), drawer = $('#drawer'), overlay = $('#drawerOverlay'), close = $('#drawerClose');
  if (!burger || !drawer) return;
  function openDrawer(){ drawer.classList.add('open'); overlay.classList.add('open'); burger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  function closeDrawer(){ drawer.classList.remove('open'); overlay.classList.remove('open'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  burger.addEventListener('click', ()=> drawer.classList.contains('open') ? closeDrawer() : openDrawer());
  close?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', closeDrawer));
  drawer.querySelectorAll('[data-term]').forEach(b => b.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key==='Escape' && drawer.classList.contains('open')) closeDrawer(); });

  /* Mirror theme + lang buttons from drawer to main nav */
  const lb2 = $('#langBtn2'), tb2 = $('#themeBtn2'), lb = $('#langBtn'), tb = $('#themeBtn');
  lb2?.addEventListener('click', ()=> lb?.click());
  tb2?.addEventListener('click', ()=> tb?.click());
  /* Keep drawer sun/moon icons in sync */
  new MutationObserver(()=>{
    const moonH = tb?.querySelector('.i-moon')?.hidden;
    const dm = tb2?.querySelector('.i-moon'), ds = tb2?.querySelector('.i-sun');
    if(dm) dm.hidden = moonH; if(ds) ds.hidden = !moonH;
  }).observe(tb, { attributes:true, subtree:true });
})();

/* ---------- Start ---------- */
applyLang();
loadLogos();

/* Trigger chip-in animation after first paint */
requestAnimationFrame(() => { $('#skillGrid')?.classList.add('ready'); });

loadWeather();

/* Skills: long categories start collapsed to about two rows */
document.addEventListener('click', e => {
  const b = e.target.closest('.sk-more'); if (!b) return;
  const card = b.closest('.sk-card');
  const open = card.classList.toggle('open');
  b.setAttribute('aria-expanded', open);
  b.textContent = open ? t('js.skLess') : t('js.skMore').replace('{n}', b.dataset.n);
});


/* "Currently" strip: built from learning-data.js and projects-data.js, so it stays true when you update them */
function renderNow(){
  const box = $('#nowStrip'); if (!box || typeof LEARNING === 'undefined') return;
  const items = [];
  const app = LEARNING.find(x => x.file === 'qa');
  if (app) items.push({ k:'js.nowStudy', v: app.title[lang], href:'#learning' });
  const ms = LEARNING.find(x => x.steps);
  const cur = ms && ms.steps.find(s => s.status === 'current');
  if (cur) items.push({ k:'js.nowTowards', v: cur[lang].split(' (').pop().replace(')', '') === cur[lang] ? cur[lang] : cur[lang].match(/\(([^)]+)\)/)[1] + ' · ' + cur[lang].replace(/\s*\([^)]*\)/, ''), href:'#learning' });
  const gw = LEARNING.find(x => x.file === 'google');
  if (gw) items.push({ k:'js.nowLearn', v: gw.title[lang], href:'#learning' });
  const wip = PROJECTS.find(p => p.status === 'wip');
  if (wip) items.push({ k:'js.nowBuild', v: wip.title[lang], open: PROJECTS.indexOf(wip) });
  box.innerHTML = `<span class="cur-k"><i class="live-dot"></i>${esc(t('js.nowLabel'))}</span>` +
    items.map(x => x.open != null
      ? `<button type="button" class="cur-i" data-open="${x.open}"><small>${esc(t(x.k))}</small><b>${esc(x.v)}</b></button>`
      : `<a class="cur-i" href="${x.href}"><small>${esc(t(x.k))}</small><b>${esc(x.v)}</b></a>`).join('') +
    `<span class="cur-upd">${esc(t('js.nowUpd'))} ${esc(fmtDate(LEARNING_UPDATED))}</span>`;
}

/* World clock popups */
const wmodal = document.createElement('dialog');
wmodal.className = 'pmodal wmodal';
document.body.appendChild(wmodal);
function offsetVsLondon(tz){
  const now = new Date();
  const h = z => { const p = new Intl.DateTimeFormat('en-GB',{hour:'numeric',minute:'numeric',hour12:false,timeZone:z}).formatToParts(now); return (+p.find(x=>x.type==='hour').value%24)*60 + +p.find(x=>x.type==='minute').value; };
  let d = (h(tz) - h('Europe/London') + 1440 + 720) % 1440 - 720;
  return d;
}
function openCity(id){
  const c = WX_CITIES.find(x => x.id === id), p = PLACES[id], w = WX[id];
  if (!c || !p) return;
  const loc = lang === 'fr' ? 'fr-FR' : 'en-GB';
  const now = new Date();
  const tm = new Intl.DateTimeFormat(loc, { hour:'2-digit', minute:'2-digit', hour12:false, timeZone:c.tz }).format(now);
  const dt = new Intl.DateTimeFormat(loc, { weekday:'long', day:'numeric', month:'long', timeZone:c.tz }).format(now);
  const off = offsetVsLondon(c.tz), hrs = Math.abs(off) / 60;
  const hh = Math.floor(hrs), mm = Math.round((hrs - hh) * 60);
  const hs = lang === 'fr' ? (mm ? `${hh} h ${mm}` : `${hh} h`) : (mm ? `${hh}h${mm}m` : `${hh}h`);
  const offTxt = id === 'lon' ? t('js.wHome') : off === 0 ? t('js.wSame') : off > 0 ? t('js.wAhead').replace('{h}', hs) : t('js.wBehind').replace('{h}', hs);
  const wt = w ? WMO_TXT(w.c)[lang === 'fr' ? 1 : 0] : '';
  wmodal.innerHTML = `
    <div class="pm-head tk-head">
      <span class="issuer">${flagEl(p.flag)}<span>${esc(p.country[lang])}</span></span>
      <span class="pm-right"><button class="pm-close" type="button" aria-label="${esc(t('js.close'))}">✕</button></span>
    </div>
    <h3>${esc(p.name[lang])}</h3>
    <div class="w-big">
      <div><b>${tm}</b><span>${esc(dt)}</span><span>${esc(offTxt)}</span></div>
      <div class="w-wx">${w ? `<b>${w.i} ${w.t}°C</b><span>${esc(wt)}</span><span>${esc(t('js.wFeels'))} ${w.f}° · ${w.w} km/h</span>` : `<span>${esc(t('js.wNone'))}</span>`}</div>
    </div>
    <div class="w-greet"><b lang="${id==='dxb'?'ar':id==='pdy'?'ta':id==='par'?'fr':'en'}">${GREET[id][0]}</b>${GREET[id][0] !== GREET[id][1] ? `<span>${GREET[id][1]}</span>` : ''}<i class="w-dn">${isDay(c, now) ? '☀︎' : '☾'} ${esc(t(isDay(c, now) ? 'js.wDay' : 'js.wNight'))}</i></div>
    <dl class="tk-grid w-stats">
      <div><dt>${esc(t('js.wRise'))}</dt><dd>${w && w.sr ? w.sr.slice(11,16) : '—'}</dd></div>
      <div><dt>${esc(t('js.wSet'))}</dt><dd>${w && w.ss ? w.ss.slice(11,16) : '—'}</dd></div>
      <div><dt>${esc(t('js.wDist'))}</dt><dd>${id === 'lon' ? esc(t('js.wHere')) : '≈ ' + distKm(c).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB') + ' km'}</dd></div>
    </dl>
    <h4 class="w-head">${esc(p.head[lang])}</h4>
    ${p.sub ? `<p class="w-sub">${esc(p.sub[lang])}</p>` : ''}
    <dl class="w-facts">${p.facts.map(f => `<div><dt>${esc(f.k[lang])}</dt><dd>${esc(f.v[lang])}</dd></div>`).join('')}</dl>
`;
  if (!wmodal.open) wmodal.showModal();
  $('.pm-close', wmodal).focus();
}
wmodal.addEventListener('click', e => { if (e.target === wmodal || e.target.closest('.pm-close')) wmodal.close(); });
document.addEventListener('click', e => { const b = e.target.closest('[data-city]'); if (b) openCity(b.dataset.city); });


/* Skill -> projects pop-up */
const smodal = document.createElement('dialog');
smodal.className = 'pmodal smodal';
document.body.appendChild(smodal);
function openSkill(en){
  const idx = skillProjects(en); if (!idx.length) return;
  const g = SKILLS.flatMap(x => x.items).find(i => i[0] === en);
  const name = g ? (lang === 'fr' ? g[1] : g[0]) : en;
  smodal.innerHTML = `
    <div class="pm-head tk-head"><span class="tk-id">${esc(t('js.skUsed'))}</span><span class="pm-right"><button class="pm-close" type="button" aria-label="${esc(t('js.close'))}">✕</button></span></div>
    <h3>${esc(name)}</h3>
    <p class="w-sub">${esc(t(idx.length === 1 ? 'js.skIn1' : 'js.skInN').replace('{n}', idx.length))}</p>
    <ul class="sk-proj">${idx.map(i => { const p = PROJECTS[i]; return `<li><button type="button" data-open="${i}" data-from-skill><span class="sp-t">${esc(p.title[lang])}</span><span class="sp-m">${esc(fmtDate(p.date))} · ${esc(t('js.' + p.status))}</span></button></li>`; }).join('')}</ul>`;
  if (!smodal.open) smodal.showModal();
  $('.pm-close', smodal).focus();
}
smodal.addEventListener('click', e => { if (e.target === smodal || e.target.closest('.pm-close') || e.target.closest('[data-from-skill]')) smodal.close(); });
document.addEventListener('click', e => { const c = e.target.closest('.c.has-p'); if (c) openSkill(c.dataset.skill); });
document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('has-p')) { e.preventDefault(); openSkill(e.target.dataset.skill); } });
