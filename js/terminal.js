/* =====================================================================
   TERMINAL
   Press / (or Ctrl+K / Cmd+K), or click any element with data-term,
   to open a small command line for exploring the portfolio.
   Type "help" to see every command.
   ===================================================================== */

const TT = {
  en: {
    welcome: 'Welcome to zaafir.portfolio — type <b>help</b> to see what I can do.',
    unknown: 'Command not found: {c}. Type <b>help</b> for the list.',
    help: 'Available commands',
    usageOpen: 'Usage: open <number>. Run <b>projects</b> to see the numbers.',
    usageGoto: 'Usage: goto <about|experience|projects|lab|skills|learning|credentials|contact>',
    opening: 'Opening {x}…',
    themeSet: 'Theme set to {x}.',
    langSet: 'Language set to {x}.',
    sudo: 'Permission granted. Escalating to the contact form…',
    sudoNo: 'zaafir is not in the sudoers file. This incident will be reported. (Try: sudo hire-zaafir)',
    checking: 'Querying public DNS for {x}…',
    grade: 'Grade',
    cmds: {
      help:'show this list', whoami:'who is Zaafir?', about:'a short introduction', experience:'work history',
      projects:'list all projects', open:'open a project by number', skills:'tools and skills', certs:'certifications',
      contact:'ways to get in touch', headers:'analyse an email\'s headers (try: headers bad)', phish:'play Spot the Phish', learning:'what I\'m studying now', goto:'jump to a section',
      theme:'switch light / dark', lang:'switch English / French', date:'today\'s date in London', clear:'clear the screen', exit:'close the terminal'
    },
    whoami: ['Zaafir', 'IT Professional · Microsoft Technologies · Cybersecurity · AI & Automation', 'Service Desk Analyst at Zinath Solutions · London, UK', 'Studying: AI & Automation Apprenticeship'],
    about: 'I support colleagues and clients with day-to-day IT, system and data issues across Microsoft 365, Entra ID and email security. I find the cause, fix it, and document it so others can follow.',
    exp: [['Apr 2024 – now','Service Desk Analyst · Zinath Solutions'],['Apr 2022 – Apr 2024','Assistant Administrator · Zinath Solutions'],['Aug – Sep 2026','Oracle Cyber Security Work Experience · Springpod'],['Nov – Dec 2024','Fujitsu: Cloud Work Experience · Springpod'],['Sep – Oct 2024','Software Developer Work Experience · Springpod']],
    openHint: 'Type <b>open 1</b> (or any number) for details.',
  },
  fr: {
    welcome: 'Bienvenue sur zaafir.portfolio — tapez <b>help</b> pour voir les commandes.',
    unknown: 'Commande introuvable : {c}. Tapez <b>help</b> pour la liste.',
    help: 'Commandes disponibles',
    usageOpen: 'Utilisation : open <numéro>. Lancez <b>projects</b> pour voir les numéros.',
    usageGoto: 'Utilisation : goto <about|experience|projects|lab|skills|learning|credentials|contact>',
    opening: 'Ouverture de {x}…',
    themeSet: 'Thème : {x}.',
    langSet: 'Langue : {x}.',
    sudo: 'Accès accordé. Direction le formulaire de contact…',
    sudoNo: 'zaafir n\'est pas dans le fichier sudoers. Cet incident sera signalé. (Essayez : sudo hire-zaafir)',
    checking: 'Interrogation du DNS public pour {x}…',
    grade: 'Note',
    cmds: {
      help:'afficher cette liste', whoami:'qui est Zaafir ?', about:'une courte présentation', experience:'parcours professionnel',
      projects:'lister tous les projets', open:'ouvrir un projet par numéro', skills:'outils et compétences', certs:'certifications',
      contact:'me contacter', headers:'analyser les en-têtes d\'un e-mail (essayez : headers bad)', phish:'jouer à Repérez le phishing', learning:'ce que j\'étudie', goto:'aller à une section',
      theme:'basculer clair / sombre', lang:'basculer anglais / français', date:'date du jour à Londres', clear:'effacer l\'écran', exit:'fermer le terminal'
    },
    whoami: ['Zaafir', 'Professionnel de l\'informatique · Technologies Microsoft · Cybersécurité · IA & Automatisation', 'Analyste Service Desk chez Zinath Solutions · Londres, Royaume-Uni', 'En formation : apprentissage IA & Automatisation'],
    about: 'J\'accompagne collègues et clients au quotidien sur les problèmes informatiques, systèmes et données, avec Microsoft 365, Entra ID et la sécurité des e-mails. Je trouve la cause, je corrige et je documente.',
    exp: [['avr. 2024 – auj.','Analyste Service Desk · Zinath Solutions'],['avr. 2022 – avr. 2024','Assistant administratif · Zinath Solutions'],['août – sept. 2026','Oracle : expérience en cybersécurité · Springpod'],['nov. – déc. 2024','Fujitsu : expérience Cloud · Springpod'],['sept. – oct. 2024','Expérience Développeur logiciel · Springpod']],
    openHint: 'Tapez <b>open 1</b> (ou un autre numéro) pour les détails.',
  }
};
const tT = () => TT[lang === 'fr' ? 'fr' : 'en'];
const SECTIONS = ['about','experience','projects','lab','skills','learning','credentials','contact'];
const onHome = !!$('#about');

/* ---------- Build the window ---------- */
const term = document.createElement('dialog');
term.className = 'term-dlg';
term.setAttribute('aria-label', 'Terminal');
term.innerHTML = `
  <div class="term-bar"><span class="dots"><i></i><i></i><i></i><span>zaafir@portfolio: ~</span></span><button class="term-close" type="button" aria-label="Close">esc ✕</button></div>
  <div class="term-out" id="termOut" role="log" aria-live="polite"></div>
  <form class="term-in" id="termForm" autocomplete="off"><label for="termInput">zaafir@portfolio:~$</label><input id="termInput" spellcheck="false" autocapitalize="off" aria-label="Command"></form>
  <div class="term-chips" id="termChips"></div>`;
document.body.appendChild(term);
const out = $('#termOut', term), input = $('#termInput', term);
let history = [], hIdx = -1, greeted = false;

const print = (html, cls = '') => { const d = document.createElement('div'); if (cls) d.className = cls; d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; };
const pad = (s, n) => s + ' '.repeat(Math.max(1, n - s.length));

function renderChips(){
  $('#termChips', term).innerHTML = ['help','whoami','projects','phish','learning','headers bad','contact','sudo hire-zaafir']
    .map(c => `<button type="button" data-run="${esc(c)}">${esc(c)}</button>`).join('');
}

function openTerm(){
  if (!term.open) term.showModal();
  renderChips();
  if (!greeted){ print(tT().welcome, 'dim'); greeted = true; }
  setTimeout(() => input.focus(), 30);
}
function closeTerm(){ if (term.open) term.close(); }

/* ---------- Commands ---------- */
const COMMANDS = {
  help(){
    const T = tT();
    print(`<span class="acc">${T.help}</span>`);
    print(Object.keys(T.cmds).map(k => `  <span class="ok">${pad(k, 12)}</span><span class="dim">${esc(T.cmds[k])}</span>`).join('\n'));
  },
  whoami(){ const w = tT().whoami; print(`<span class="acc">${esc(w[0])}</span>\n${w.slice(1).map(esc).join('\n')}`); },
  about(){ print(esc(tT().about)); },
  experience(){ print(tT().exp.map(([d, r]) => `  <span class="dim">${pad(d, 22)}</span>${esc(r)}`).join('\n')); },
  projects(){
    print(PROJECTS.map((p, i) => `  <span class="acc">${String(i + 1).padStart(2)}</span>  ${esc(p.title[lang])} <span class="dim">· ${esc(fmtDate(p.date))} · </span><span class="${p.status === 'done' ? 'ok' : p.status === 'plan' ? 'dim' : 'warn'}">${esc(t('js.' + p.status))}</span>`).join('\n'));
    print(tT().openHint, 'dim');
  },
  open(arg){
    const n = parseInt(arg, 10);
    if (!n || n < 1 || n > PROJECTS.length) return print(tT().usageOpen, 'warn');
    print(fill(tT().opening, { x: esc(PROJECTS[n - 1].title[lang]) }), 'dim');
    closeTerm(); setTimeout(() => openProject(n - 1), 120);
  },
  skills(){ print(SKILLS.map(g => `<span class="acc">${esc(g[lang])}</span>\n  ${g.items.map(([en, fr, ty]) => `<span class="${ty === 'w' ? 'ok' : ty === 'l' ? 'warn' : ''}">${esc(lang === 'fr' ? fr : en)}</span>`).join(', ')}`).join('\n')); },
  certs(){ print(CERTS.map(c => `  <span class="${c.status === 'done' ? 'ok' : 'warn'}">${c.status === 'done' ? '✔' : '…'}</span> ${esc(c.title[lang])} <span class="dim">· ${esc(c.issuer)}${c.date[lang] ? ' · ' + esc(c.date[lang]) : ''}</span>`).join('\n')); },
  contact(){
    print(`  <span class="ok">${pad('email', 10)}</span><button class="tbtn" type="button" data-run="email">${esc(MAIL)}</button>
  <span class="ok">${pad('linkedin', 10)}</span><a href="https://www.linkedin.com/in/zaafir-exe/" target="_blank" rel="noopener">linkedin.com/in/zaafir-exe</a>
  <span class="ok">${pad('github', 10)}</span><a href="https://github.com/zaafirrr" target="_blank" rel="noopener">github.com/zaafirrr</a>`);
  },
  email(){ location.href = 'mailto:' + MAIL; },
  linkedin(){ window.open('https://www.linkedin.com/in/zaafir-exe/', '_blank', 'noopener'); },
  github(){ window.open('https://github.com/zaafirrr', '_blank', 'noopener'); },
  headers(arg){
    COMMANDS.goto('lab');
    setTimeout(() => {
      $('#headers')?.scrollIntoView({ behavior:'smooth' });
      if (arg === 'bad' || arg === 'good') $(`[data-sample="${arg}"]`)?.click(); else $('#hdInput')?.focus();
    }, onHome ? 350 : 0);
  },
  goto(arg){
    const s = (arg || '').toLowerCase();
    if (!SECTIONS.includes(s)) return print(tT().usageGoto, 'warn');
    closeTerm();
    if (onHome) $('#' + s)?.scrollIntoView({ behavior: 'smooth' });
    else location.href = 'index.html#' + s;
  },
  phish(){ COMMANDS.goto('lab'); setTimeout(() => $('#phish')?.scrollIntoView({ behavior:'smooth' }), onHome ? 350 : 0); },
  learning(){
    print(LEARNING.map(c => `  <span class="acc">${esc(c.title[lang])}</span> <span class="dim">· ${esc(c.provider)}</span>${c.steps ? '\n' + c.steps.map(st => `    <span class="${st.status === 'done' ? 'ok' : st.status === 'current' ? 'warn' : 'dim'}">${st.status === 'done' ? '✔' : st.status === 'current' ? '▸' : '·'} ${esc(st[lang])}</span>`).join('\n') : ''}`).join('\n'));
  },
  theme(arg){
    const next = arg === 'light' || arg === 'dark' ? arg : (isDark() ? 'light' : 'dark');
    root.dataset.theme = next; store.set('theme', next); updateThemeBtn();
    print(fill(tT().themeSet, { x: next }), 'ok');
  },
  lang(arg){
    const next = arg === 'en' || arg === 'fr' ? arg : (lang === 'fr' ? 'en' : 'fr');
    lang = next; store.set('lang', lang); applyLang(); renderChips();
    print(fill(tT().langSet, { x: next === 'fr' ? 'Français' : 'English' }), 'ok');
  },
  date(){ print(new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { dateStyle:'full', timeStyle:'short', timeZone:'Europe/London' }).format(new Date())); },
  clear(){ out.innerHTML = ''; },
  exit(){ closeTerm(); },
  sudo(arg){
    if (/^hire(-zaafir)?$/.test(arg || '')){
      print(tT().sudo, 'ok');
      setTimeout(() => { closeTerm(); if (onHome) $('#contact').scrollIntoView({ behavior:'smooth' }); else location.href = 'index.html#contact'; setTimeout(() => $('#f-name')?.focus(), 700); }, 700);
    } else print(tT().sudoNo, 'bad');
  },
};
const ALIASES = { ls:'projects', exp:'experience', cls:'clear', quit:'exit', cert:'certs', '?':'help', me:'whoami' };

async function run(line){
  const raw = line.trim(); if (!raw) return;
  print(`<em>$</em> ${esc(raw)}`, 'cmd');
  history.unshift(raw); hIdx = -1;
  const [c, ...args] = raw.split(/\s+/);
  const name = ALIASES[c.toLowerCase()] || c.toLowerCase();
  const fn = COMMANDS[name];
  if (!fn) return print(fill(tT().unknown, { c: esc(c) }), 'bad');
  await fn(...args);
}

/* ---------- Input handling ---------- */
$('#termForm', term).addEventListener('submit', e => { e.preventDefault(); const v = input.value; input.value = ''; run(v); });
input.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp'){ e.preventDefault(); if (hIdx < history.length - 1) input.value = history[++hIdx]; }
  else if (e.key === 'ArrowDown'){ e.preventDefault(); hIdx > 0 ? input.value = history[--hIdx] : (hIdx = -1, input.value = ''); }
  else if (e.key === 'Tab'){
    e.preventDefault();
    const v = input.value.toLowerCase();
    const hits = Object.keys(COMMANDS).filter(k => k.startsWith(v));
    if (hits.length === 1) input.value = hits[0] + ' ';
    else if (hits.length > 1) print(hits.join('   '), 'dim');
  }
  else if (e.key === 'l' && e.ctrlKey){ e.preventDefault(); COMMANDS.clear(); }
});
term.addEventListener('click', e => {
  if (e.target === term || e.target.closest('.term-close')) return closeTerm();
  const r = e.target.closest('[data-run]');
  if (r){ run(r.dataset.run); input.focus(); }
});

/* Open with /, Ctrl+K, Cmd+K, or any [data-term] element */
document.addEventListener('keydown', e => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
  if ((e.key === '/' && !typing) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))){
    if (term.open && e.key === '/') return;
    e.preventDefault(); openTerm();
  }
});
document.addEventListener('click', e => { if (e.target.closest('[data-term]')) openTerm(); });
document.addEventListener('langchange', () => { if (term.open) renderChips(); });
