/* =====================================================================
   PROJECTS
   To add a project, copy one { ... } block and edit it.
   status: "done" (Completed) | "wip" (In progress) | "plan" (Planned)
   cat:    one of the category keys in CATS below
   page:   optional link to a write-up, e.g. "projects/linux-lab.html"
   Each text has an English (en) and French (fr) version.
   ===================================================================== */
const PROJECTS = [
  { cat:"sec", status:"wip", page:"",
    title:{ en:"Cybersecurity Assessment Preparation", fr:"Préparation d'une évaluation de cybersécurité" },
    kind: { en:"Work · Zinath Solutions", fr:"Professionnel · Zinath Solutions" },
    desc: { en:"Helped prepare and track an Aramco CCC (Cybersecurity Compliance Certificate) assessment for a client: organising controls, coordinating tasks and tracking supporting evidence.",
            fr:"Participation à la préparation et au suivi d'une évaluation Aramco CCC (certificat de conformité en cybersécurité) pour un client : organisation des contrôles, coordination des tâches et suivi des preuves." },
    tags:["Evidence tracking","Microsoft 365","Documentation"] },

  { cat:"sec", status:"plan", page:"",
    title:{ en:"Email Security & DMARC Analysis", fr:"Analyse de la sécurité des e-mails et DMARC" },
    kind: { en:"Personal project", fr:"Projet personnel" },
    desc: { en:"Explain SPF, DKIM and DMARC, review the DNS records of a domain I'm authorised to assess, report common misconfigurations, and optionally build a Python checker.",
            fr:"Expliquer SPF, DKIM et DMARC, analyser les enregistrements DNS d'un domaine que je suis autorisé à évaluer, signaler les erreurs de configuration courantes et, en option, créer un outil de vérification en Python." },
    tags:["DNS","SPF","DKIM","DMARC","Python"] },

  { cat:"ai", status:"plan", page:"",
    title:{ en:"Business Process Automation", fr:"Automatisation d'un processus métier" },
    kind: { en:"Personal project", fr:"Projet personnel" },
    desc: { en:"A request workflow that validates input, routes for approval, sends notifications, records the outcome and handles failures. Documented before and after, with test cases.",
            fr:"Un flux de demandes qui valide les informations, les soumet pour approbation, envoie des notifications, enregistre le résultat et gère les erreurs. Documenté avant et après, avec des cas de test." },
    tags:["Power Automate","Python","Approvals"] },

  { cat:"cloud", status:"plan", page:"",
    title:{ en:"Entra ID Identity Lab", fr:"Laboratoire d'identité Entra ID" },
    kind: { en:"Personal project", fr:"Projet personnel" },
    desc: { en:"A test-tenant lab covering users and groups, role assignments, access control and Conditional Access concepts, noting which features need specific licensing.",
            fr:"Un laboratoire sur un tenant de test : utilisateurs et groupes, attribution de rôles, contrôle d'accès et accès conditionnel, en précisant les fonctionnalités soumises à licence." },
    tags:["Entra ID","Conditional Access","RBAC"] },

  { cat:"data", status:"plan", page:"",
    title:{ en:"IT Operations Dashboard", fr:"Tableau de bord des opérations IT" },
    kind: { en:"Personal project", fr:"Projet personnel" },
    desc: { en:"A dashboard built on synthetic service desk data showing ticket volume, categories, resolution times, backlog and recurring issues, with notes on what it tells an IT team.",
            fr:"Un tableau de bord basé sur des données fictives de service desk : volume de tickets, catégories, délais de résolution, tickets en attente et problèmes récurrents, avec une analyse pour l'équipe IT." },
    tags:["Excel","Data visualisation"] },

  { cat:"infra", status:"plan", page:"",
    title:{ en:"Linux Security Lab", fr:"Laboratoire de sécurité Linux" },
    kind: { en:"Personal project", fr:"Projet personnel" },
    desc: { en:"An Ubuntu virtual lab for user and permission management, log investigation, services, basic hardening and a simulated incident, with the commands and reasoning documented.",
            fr:"Un laboratoire virtuel Ubuntu : gestion des utilisateurs et des permissions, analyse des journaux, services, durcissement de base et incident simulé, avec les commandes et le raisonnement documentés." },
    tags:["Ubuntu","Linux","Logs","Hardening"] },
];

/* Project categories (filter buttons) */
const CATS = {
  all:  { en:"All", fr:"Tous" },
  infra:{ en:"IT & Infrastructure", fr:"IT & Infrastructure" },
  sec:  { en:"Cybersecurity", fr:"Cybersécurité" },
  cloud:{ en:"Cloud & Microsoft", fr:"Cloud & Microsoft" },
  ai:   { en:"AI & Automation", fr:"IA & Automatisation" },
  data: { en:"Data & Programming", fr:"Données & Programmation" },
};

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
  { logo:"HP", file:"hackpath", status:"wip", issuer:"HackPath",
    date:{ en:"", fr:"" },
    title:{ en:"Linux Foundations", fr:"Linux Foundations" },
    desc:{ en:"Terminal, files and permissions, users and groups, processes and services, packages, logs and Ubuntu virtual machines.",
           fr:"Terminal, fichiers et permissions, utilisateurs et groupes, processus et services, paquets, journaux et machines virtuelles Ubuntu." } },
];

/* =====================================================================
   SKILLS
   w = professional experience, s = studied (BTEC), l = currently learning
   Format: [English, French, type]
   ===================================================================== */
const SKILLS = [
  { en:"IT Support & Operations", fr:"Support et exploitation IT", items:[
    ["Technical troubleshooting","Dépannage technique","w"],["User support","Support utilisateurs","w"],
    ["Microsoft 365 support","Support Microsoft 365","w"],["IT documentation","Documentation IT","w"],
    ["Service desk processes","Processus de service desk","w"],["Windows environments","Environnements Windows","w"]]},
  { en:"Microsoft & Cloud", fr:"Microsoft et cloud", items:[
    ["Microsoft 365","Microsoft 365","w"],["Entra ID","Entra ID","w"],["Licence management","Gestion des licences","w"],
    ["Intune","Intune","w"],["Defender","Defender","w"],["Conditional Access concepts","Accès conditionnel","w"],
    ["Azure fundamentals","Fondamentaux Azure","l"]]},
  { en:"Cybersecurity", fr:"Cybersécurité", items:[
    ["SPF, DKIM and DMARC","SPF, DKIM et DMARC","w"],["Email authentication","Authentification des e-mails","w"],
    ["Cyber Essentials concepts","Concepts Cyber Essentials","w"],["Compliance evidence tracking","Suivi des preuves de conformité","w"],
    ["Identity and access security","Sécurité des identités et des accès","w"],["Linux fundamentals","Fondamentaux Linux","l"]]},
  { en:"Programming & Automation", fr:"Programmation et automatisation", items:[
    ["Python fundamentals","Bases de Python","s"],["HTML and CSS","HTML et CSS","s"],
    ["Power Automate","Power Automate","l"],["APIs and integration","API et intégration","l"],
    ["Low-code and no-code","Low-code et no-code","l"]]},
  { en:"Data & Productivity", fr:"Données et productivité", items:[
    ["Microsoft Excel","Microsoft Excel","w"],["Databases and records","Bases de données et dossiers","w"],
    ["Expenses, invoices and VAT","Frais, factures et TVA","w"],["Spreadsheet modelling","Modélisation sur tableur","s"],
    ["Microsoft Access","Microsoft Access","s"]]},
  { en:"Web & Design", fr:"Web et design", items:[
    ["Wix","Wix","w"],["HTML web development","Développement web HTML","s"],["Adobe Photoshop","Adobe Photoshop","s"],
    ["Adobe Illustrator","Adobe Illustrator","s"],["Autodesk Maya","Autodesk Maya","s"]]},
];

/* =====================================================================
   Everything below makes the page work. You shouldn't need to edit it.
   ===================================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
                set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };

let lang = store.get('lang') === 'fr' ? 'fr' : 'en';
let activeCat = 'all';
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
  $('#flip').setAttribute('aria-label', t('js.flip'));
  renderFilters(); renderProjects(); renderSkills(); renderCerts(); updateThemeBtn();
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
flip.addEventListener('click', e => {
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
const STATUS = { done:'s-done', wip:'s-wip', plan:'s-plan' };
function renderFilters(){
  $('#filters').innerHTML = Object.keys(CATS).map(k => {
    const n = k === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cat === k).length;
    return `<button class="filter" type="button" data-cat="${k}" aria-pressed="${k === activeCat}">${esc(CATS[k][lang])}<span class="n">${n}</span></button>`;
  }).join('');
}
function renderProjects(){
  const list = PROJECTS.filter(p => activeCat === 'all' || p.cat === activeCat);
  $('#pgrid').innerHTML = list.length ? list.map(p => `
    <article class="card proj">
      <div class="proj-top"><span class="cat">${esc(CATS[p.cat][lang])}</span><span class="pill ${STATUS[p.status]}">${esc(t('js.' + p.status))}</span></div>
      <h3>${esc(p.title[lang])}</h3>
      <span class="kind">${esc(p.kind[lang])}</span>
      <p style="color:var(--muted);font-size:15px">${esc(p.desc[lang])}</p>
      <div class="tags">${p.tags.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>
      ${p.page ? `<a class="view" href="${esc(p.page)}">${esc(t('js.view'))}</a>` : ''}
    </article>`).join('') : `<p class="empty">${esc(t('js.empty'))}</p>`;
}
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.filter'); if (!b) return;
  activeCat = b.dataset.cat;
  renderFilters(); renderProjects();
});
$('#projCount').textContent = PROJECTS.length;

/* ---------- Certifications ---------- */
const CERT_STATUS = { done:['js.certDone','s-done'], wip:['js.wip','s-wip'], plan:['js.plan','s-plan'] };
function renderCerts(){
  $('#certs').innerHTML = CERTS.map(c => `
    <article class="card cert-card">
      <div class="cert-top">
        <div class="issuer"><span class="logo" data-logo="${esc(c.file)}" aria-hidden="true">${esc(c.logo)}</span><span>${esc(c.issuer)}</span></div>
        <span class="pill ${CERT_STATUS[c.status][1]}">${esc(t(CERT_STATUS[c.status][0]))}</span>
      </div>
      <h3>${esc(c.title[lang])}</h3>
      <p>${esc(c.desc[lang])}</p>
      ${c.date[lang] ? `<span class="date">${esc(c.date[lang])}</span>` : ''}
    </article>`).join('');
  loadLogos($('#certs'));
}
$('#certCount').textContent = CERTS.filter(c => c.status === 'done').length;


/* ---------- Company logos ----------
   Save a logo in assets/logos/ with the name used in data-logo
   (e.g. assets/logos/microsoft.png) and it replaces the letters.
   PNG, SVG, JPG and WEBP all work. No file? The letters stay. */
function loadLogos(scope = document){
  $$('.logo[data-logo]', scope).forEach(box => {
    if (box.dataset.tried) return;
    box.dataset.tried = '1';
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

/* ---------- Skills ---------- */
function renderSkills(){
  $('#skills').innerHTML = SKILLS.map(g => `
    <div class="card"><h3>${esc(g[lang])}</h3>
      <div class="chips">${g.items.map(([en, fr, type]) => `<span class="c ${type}">${esc(lang === 'fr' ? fr : en)}</span>`).join('')}</div>
    </div>`).join('');
}

/* ---------- Contact form: opens the visitor's email app ---------- */
$('#cform').addEventListener('submit', e => {
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

/* ---------- Highlight the current section in the menu ---------- */
const navLinks = $$('.links a');
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section').forEach(s => spy.observe(s));

/* ---------- Start ---------- */
applyLang();
loadLogos();
