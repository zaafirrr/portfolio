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
  renderLatest(); renderAll(); renderSkills(); renderCerts(); updateThemeBtn();
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

function projectCard(p){
  const i = PROJECTS.indexOf(p);
  const extra = p.tags.length - SHOW_TAGS;
  return `
  <article class="card pcard">
    <span class="plabel">${esc(p.label[lang])}</span>
    <h3><button class="ptitle" type="button" data-open="${i}">${titleHTML(p)}</button></h3>
    <div class="pchips">${statusChip(p)}<span class="chip">${esc(WITH[p.with].chip[lang])}</span></div>
    <p class="pdesc">${esc(p.desc[lang])}</p>
    <div class="ptags">${p.tags.slice(0, SHOW_TAGS).map(x => `<span class="ptag">${esc(x)}</span>`).join('')}${extra > 0 ? `<span class="ptag more">+${extra}</span>` : ''}</div>
    <div class="pfoot">
      <button class="pview" type="button" data-open="${i}">${esc(t('js.view'))}</button>
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
    <div class="pm-head">
      <span class="plabel">${esc(p.label[lang])}</span>
      <button class="pm-close" type="button" aria-label="${esc(t('js.close'))}">✕</button>
    </div>
    <h3>${titleHTML(p)}</h3>
    <div class="pchips">${statusChip(p)}<span class="chip">${esc(WITH[p.with].chip[lang])}</span><span class="chip">${esc(CATS[p.cat][lang])}</span></div>
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
  grid.innerHTML = list.length ? list.map(projectCard).join('') : `<p class="empty">${esc(t('js.empty'))}</p>`;
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
function renderCerts(){
  if (!$('#certs')) return;
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
if ($('#certCount')) $('#certCount').textContent = CERTS.filter(c => c.status === 'done').length;


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
  if (!$('#skills')) return;
  $('#skills').innerHTML = SKILLS.map(g => `
    <div class="card"><h3>${esc(g[lang])}</h3>
      <div class="chips">${g.items.map(([en, fr, type]) => `<span class="c ${type}">${esc(lang === 'fr' ? fr : en)}</span>`).join('')}</div>
    </div>`).join('');
}

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

/* ---------- Highlight the current section in the menu ---------- */
const navLinks = $$('.links a');
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
if ($('#about')) $$('main section').forEach(s => spy.observe(s));

/* ---------- Start ---------- */
applyLang();
loadLogos();
