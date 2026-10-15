/* =====================================================================
   CONDITIONAL ACCESS BUILDER
   A teaching simulator for Microsoft Entra Conditional Access. Build one
   policy (who, what, when, and what is required), then see how it treats
   nine made-up sign-ins. It is not connected to any tenant and nothing
   is stored. Real tenants evaluate every policy together and a block
   always wins; this tool shows one policy at a time so the logic is clear.
   ===================================================================== */
(function () {
  'use strict';
  const root = document.getElementById('caApp');
  if (!root) return;

  const L = {
    en: {
      users: 'Users', apps: 'Target resources', loc: 'Location', dev: 'Device', risk: 'Sign-in risk', client: 'Client apps', grant: 'Grant access', state: 'Policy state',
      excl: 'Exclude the emergency access (break-glass) account',
      presets: 'Start from a template', build: 'Build a policy', test: 'Test sign-ins', sum: 'Result',
      u: { all: 'All users', admin: 'Administrators', guest: 'Guest users', staff: 'Employees' },
      a: { all: 'All cloud apps', m365: 'Microsoft 365 apps', azure: 'Azure management', adm: 'Admin portals' },
      l: { any: 'Any location', out: 'Outside trusted locations' },
      d: { any: 'Any device', bad: 'Not compliant or unmanaged' },
      r: { any: 'Any risk level', med: 'Medium or high', high: 'High only' },
      c: { any: 'Any client app', legacy: 'Legacy authentication only' },
      g: { none: 'Allow access (no extra requirement)', mfa: 'Require multifactor authentication', dev: 'Require compliant device', both: 'Require MFA and compliant device', either: 'Require MFA or compliant device', block: 'Block access' },
      s: { on: 'On', report: 'Report-only', off: 'Off' },
      tpl: { admins: 'MFA for administrators', legacy: 'Block legacy authentication', risky: 'Block high-risk sign-ins', device: 'Compliant device for Microsoft 365', outside: 'MFA outside the office' },
      out: { skip: 'Not in scope', ok: 'Allowed', mfa: 'MFA required', blocked: 'Blocked' },
      why: {
        off: 'The policy is off, so it is not evaluated.',
        user: 'This policy does not apply to this user.', app: 'This policy does not apply to this app.',
        cond: 'The conditions do not match this sign-in.', excl: 'Excluded: this is the break-glass account.',
        allow: 'The policy applies and allows access with no extra requirement.',
        block: 'The policy applies and blocks access.',
        mfa: 'The policy applies and the user must complete MFA.',
        mfaLegacy: 'Legacy protocols cannot prompt for MFA, so this sign-in is blocked.',
        devOk: 'The device is already compliant, so access is allowed.',
        devNo: 'The device is not compliant, so access is blocked until it is enrolled or fixed.',
        bothNo: 'The device is not compliant, so access is blocked even after MFA.',
        both: 'The device is compliant and the user must complete MFA.',
        eitherDev: 'The device is compliant, so the user is not asked for MFA.',
        eitherMfa: 'The device is not compliant, so the user must complete MFA instead.'
      },
      rep: 'Report-only: shows what would happen, without enforcing it.',
      stats: (n, b, m, a) => `${n} sign-ins affected: ${b} blocked, ${m} challenged for MFA, ${a} allowed.`,
      none: 'No sign-ins are affected by this policy.',
      warnLock: 'This blocks every user from every app with no exclusion. In a real tenant that can lock everyone out, including you. Always exclude a break-glass account.',
      warnGuest: 'Guests usually cannot satisfy device compliance, because their device is managed by their own organisation.',
      warnLegacy: 'Legacy authentication cannot do MFA. Blocking it is safer than asking for MFA.',
      warnAllow: 'This policy allows access without any requirement, so it protects nothing on its own.',
      good: 'A solid baseline: it applies broadly and asks for something real.',
      note: 'Simulated with made-up sign-ins. Real policies are evaluated together; any block wins.',
      copy: 'Copy summary', copied: 'Copied', reset: 'Reset',
      sc: ['Priya, employee', 'Tom, employee', 'Sam, administrator', 'Alex, administrator', 'Jordan, guest', 'Mia, employee', 'Mailbox app (IMAP)', 'Dev, employee', 'Break-glass account'],
      scd: ['Microsoft 365, in the office, managed laptop', 'Microsoft 365, at home, personal phone', 'Azure portal, at home, managed laptop', 'Admin portal, unfamiliar country, personal PC, medium risk', 'SharePoint, outside, personal device', 'Microsoft 365, outside, managed laptop, high risk', 'Microsoft 365 mailbox, office, old email client', 'Microsoft 365, abroad on holiday, managed laptop', 'Admin portal, emergency use, personal PC']
    },
    fr: {
      users: 'Utilisateurs', apps: 'Ressources cibles', loc: 'Emplacement', dev: 'Appareil', risk: 'Risque de connexion', client: 'Applications clientes', grant: 'Accorder l’accès', state: 'État de la stratégie',
      excl: 'Exclure le compte d’accès d’urgence (break-glass)',
      presets: 'Partir d’un modèle', build: 'Créer une stratégie', test: 'Connexions de test', sum: 'Résultat',
      u: { all: 'Tous les utilisateurs', admin: 'Administrateurs', guest: 'Utilisateurs invités', staff: 'Employés' },
      a: { all: 'Toutes les applications cloud', m365: 'Applications Microsoft 365', azure: 'Gestion Azure', adm: 'Portails d’administration' },
      l: { any: 'N’importe quel emplacement', out: 'Hors emplacements approuvés' },
      d: { any: 'N’importe quel appareil', bad: 'Non conforme ou non géré' },
      r: { any: 'Tout niveau de risque', med: 'Moyen ou élevé', high: 'Élevé uniquement' },
      c: { any: 'Toute application cliente', legacy: 'Authentification héritée uniquement' },
      g: { none: 'Autoriser l’accès (sans exigence)', mfa: 'Exiger l’authentification multifacteur', dev: 'Exiger un appareil conforme', both: 'Exiger MFA et appareil conforme', either: 'Exiger MFA ou appareil conforme', block: 'Bloquer l’accès' },
      s: { on: 'Activée', report: 'Rapport seul', off: 'Désactivée' },
      tpl: { admins: 'MFA pour les administrateurs', legacy: 'Bloquer l’authentification héritée', risky: 'Bloquer les connexions à haut risque', device: 'Appareil conforme pour Microsoft 365', outside: 'MFA hors du bureau' },
      out: { skip: 'Hors périmètre', ok: 'Autorisé', mfa: 'MFA requise', blocked: 'Bloqué' },
      why: {
        off: 'La stratégie est désactivée, elle n’est donc pas évaluée.',
        user: 'Cette stratégie ne s’applique pas à cet utilisateur.', app: 'Cette stratégie ne s’applique pas à cette application.',
        cond: 'Les conditions ne correspondent pas à cette connexion.', excl: 'Exclu : c’est le compte break-glass.',
        allow: 'La stratégie s’applique et autorise l’accès sans exigence supplémentaire.',
        block: 'La stratégie s’applique et bloque l’accès.',
        mfa: 'La stratégie s’applique et l’utilisateur doit passer la MFA.',
        mfaLegacy: 'Les protocoles hérités ne peuvent pas demander la MFA : cette connexion est bloquée.',
        devOk: 'L’appareil est déjà conforme, l’accès est autorisé.',
        devNo: 'L’appareil n’est pas conforme : accès bloqué tant qu’il n’est pas inscrit ou corrigé.',
        bothNo: 'L’appareil n’est pas conforme : accès bloqué même après la MFA.',
        both: 'L’appareil est conforme et l’utilisateur doit passer la MFA.',
        eitherDev: 'L’appareil est conforme : la MFA n’est pas demandée.',
        eitherMfa: 'L’appareil n’est pas conforme : l’utilisateur doit passer la MFA.'
      },
      rep: 'Rapport seul : montre ce qui se passerait, sans l’appliquer.',
      stats: (n, b, m, a) => `${n} connexions concernées : ${b} bloquées, ${m} avec MFA, ${a} autorisées.`,
      none: 'Aucune connexion n’est concernée par cette stratégie.',
      warnLock: 'Cela bloque tous les utilisateurs sur toutes les applications, sans exclusion. Dans un vrai tenant, tout le monde peut être verrouillé dehors, vous compris. Excluez toujours un compte break-glass.',
      warnGuest: 'Les invités ne peuvent généralement pas satisfaire la conformité de l’appareil, car leur appareil est géré par leur propre organisation.',
      warnLegacy: 'L’authentification héritée ne gère pas la MFA. La bloquer est plus sûr que demander la MFA.',
      warnAllow: 'Cette stratégie autorise l’accès sans aucune exigence : elle ne protège rien seule.',
      good: 'Une bonne base : elle s’applique largement et exige quelque chose de réel.',
      note: 'Simulation avec des connexions fictives. Les vraies stratégies sont évaluées ensemble ; un blocage l’emporte toujours.',
      copy: 'Copier le résumé', copied: 'Copié', reset: 'Réinitialiser',
      sc: ['Priya, employée', 'Tom, employé', 'Sam, administrateur', 'Alex, administrateur', 'Jordan, invité', 'Mia, employée', 'Appli de messagerie (IMAP)', 'Dev, employé', 'Compte break-glass'],
      scd: ['Microsoft 365, au bureau, portable géré', 'Microsoft 365, à la maison, téléphone personnel', 'Portail Azure, à la maison, portable géré', 'Portail d’administration, pays inhabituel, PC personnel, risque moyen', 'SharePoint, hors bureau, appareil personnel', 'Microsoft 365, hors bureau, portable géré, risque élevé', 'Boîte Microsoft 365, au bureau, ancien client de messagerie', 'Microsoft 365, à l’étranger en vacances, portable géré', 'Portail d’administration, urgence, PC personnel']
    }
  };
  const TX = () => L[typeof lang !== 'undefined' && lang === 'fr' ? 'fr' : 'en'];
  const E = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* Made-up sign-ins: user type, app, location, device, risk, client */
  const SIGNINS = [
    { u: 'staff', a: 'm365', l: 'office', d: 'ok', r: 'none', c: 'modern' },
    { u: 'staff', a: 'm365', l: 'home', d: 'bad', r: 'none', c: 'modern' },
    { u: 'admin', a: 'azure', l: 'home', d: 'ok', r: 'none', c: 'modern' },
    { u: 'admin', a: 'adm', l: 'abroad', d: 'bad', r: 'med', c: 'modern' },
    { u: 'guest', a: 'm365', l: 'home', d: 'bad', r: 'none', c: 'modern' },
    { u: 'staff', a: 'm365', l: 'abroad', d: 'ok', r: 'high', c: 'modern' },
    { u: 'staff', a: 'm365', l: 'office', d: 'bad', r: 'none', c: 'legacy' },
    { u: 'staff', a: 'm365', l: 'abroad', d: 'ok', r: 'low', c: 'modern' },
    { u: 'bg', a: 'adm', l: 'home', d: 'bad', r: 'none', c: 'modern' }
  ];

  const DEFAULT = { u: 'all', a: 'all', l: 'any', d: 'any', r: 'any', c: 'any', g: 'mfa', s: 'on', excl: true };
  const TPL = {
    admins: { u: 'admin', a: 'all', l: 'any', d: 'any', r: 'any', c: 'any', g: 'mfa' },
    legacy: { u: 'all', a: 'all', l: 'any', d: 'any', r: 'any', c: 'legacy', g: 'block' },
    risky: { u: 'all', a: 'all', l: 'any', d: 'any', r: 'high', c: 'any', g: 'block' },
    device: { u: 'staff', a: 'm365', l: 'any', d: 'any', r: 'any', c: 'any', g: 'dev' },
    outside: { u: 'all', a: 'all', l: 'out', d: 'any', r: 'any', c: 'any', g: 'mfa' }
  };
  let P = Object.assign({}, DEFAULT);
  let lastSummary = '';

  function evaluate(si) {
    const t = TX();
    if (P.s === 'off') return { o: 'skip', w: t.why.off };
    if (si.u === 'bg' && P.excl) return { o: 'skip', w: t.why.excl };
    if (P.u !== 'all' && P.u !== si.u && !(si.u === 'bg' && P.u === 'admin')) return { o: 'skip', w: t.why.user };
    if (P.a !== 'all' && P.a !== si.a) return { o: 'skip', w: t.why.app };
    if (P.l === 'out' && si.l === 'office') return { o: 'skip', w: t.why.cond };
    if (P.d === 'bad' && si.d === 'ok') return { o: 'skip', w: t.why.cond };
    if (P.r === 'med' && !(si.r === 'med' || si.r === 'high')) return { o: 'skip', w: t.why.cond };
    if (P.r === 'high' && si.r !== 'high') return { o: 'skip', w: t.why.cond };
    if (P.c === 'legacy' && si.c !== 'legacy') return { o: 'skip', w: t.why.cond };
    const legacy = si.c === 'legacy', ok = si.d === 'ok';
    switch (P.g) {
      case 'none': return { o: 'ok', w: t.why.allow };
      case 'block': return { o: 'blocked', w: t.why.block };
      case 'mfa': return legacy ? { o: 'blocked', w: t.why.mfaLegacy } : { o: 'mfa', w: t.why.mfa };
      case 'dev': return ok ? { o: 'ok', w: t.why.devOk } : { o: 'blocked', w: t.why.devNo };
      case 'both': return !ok ? { o: 'blocked', w: t.why.bothNo } : legacy ? { o: 'blocked', w: t.why.mfaLegacy } : { o: 'mfa', w: t.why.both };
      case 'either': return ok ? { o: 'ok', w: t.why.eitherDev } : legacy ? { o: 'blocked', w: t.why.mfaLegacy } : { o: 'mfa', w: t.why.eitherMfa };
    }
    return { o: 'skip', w: '' };
  }

  const sel = (id, label, opts, val) => `<label class="field ca-f" for="${id}"><span>${E(label)}</span><select id="${id}" data-k="${id.slice(3)}">${Object.keys(opts).map(k => `<option value="${k}"${k === val ? ' selected' : ''}>${E(opts[k])}</option>`).join('')}</select></label>`;
  const PILL = { skip: 's-plan', ok: 's-done', mfa: 's-wip', blocked: 's-bad' };

  function render() {
    const t = TX();
    const res = SIGNINS.map(evaluate);
    const aff = res.filter(r => r.o !== 'skip');
    const nb = res.filter(r => r.o === 'blocked').length, nm = res.filter(r => r.o === 'mfa').length, na = res.filter(r => r.o === 'ok').length;
    const warns = [];
    if (P.g === 'block' && P.u === 'all' && P.a === 'all' && P.l === 'any' && P.d === 'any' && P.r === 'any' && P.c === 'any' && !P.excl) warns.push(['bad', t.warnLock]);
    if (P.u === 'guest' && (P.g === 'dev' || P.g === 'both')) warns.push(['warn', t.warnGuest]);
    if (P.c === 'legacy' && P.g === 'mfa') warns.push(['warn', t.warnLegacy]);
    if (P.g === 'none') warns.push(['warn', t.warnAllow]);
    if (!warns.length && (P.g === 'mfa' || P.g === 'block') && P.s === 'on' && aff.length) warns.push(['ok', t.good]);

    const polName = [t.u[P.u], t.a[P.a], t.g[P.g]].join(' · ');
    lastSummary = `Conditional Access policy (simulated)\nUsers: ${t.u[P.u]}\nApps: ${t.a[P.a]}\nLocation: ${t.l[P.l]}\nDevice: ${t.d[P.d]}\nSign-in risk: ${t.r[P.r]}\nClient apps: ${t.c[P.c]}\nGrant: ${t.g[P.g]}\nState: ${t.s[P.s]}\n\n` +
      SIGNINS.map((s, i) => `${t.sc[i]} (${t.scd[i]}): ${t.out[res[i].o]}`).join('\n');

    root.innerHTML = `
      <div class="ca-tpl" role="group" aria-label="${E(t.presets)}"><span class="ph-k">${E(t.presets)}</span>
        ${Object.keys(TPL).map(k => `<button class="btn" type="button" data-tpl="${k}">${E(t.tpl[k])}</button>`).join('')}
        <button class="linkbtn" type="button" id="caReset">${E(t.reset)}</button></div>
      <div class="ca-grid">
        <div class="hd-block ca-build"><p class="ph-k">${E(t.build)}</p>
          ${sel('ca-u', t.users, t.u, P.u)}${sel('ca-a', t.apps, t.a, P.a)}
          <label class="ca-check"><input type="checkbox" id="ca-excl" ${P.excl ? 'checked' : ''}><span>${E(t.excl)}</span></label>
          ${sel('ca-l', t.loc, t.l, P.l)}${sel('ca-d', t.dev, t.d, P.d)}${sel('ca-r', t.risk, t.r, P.r)}${sel('ca-c', t.client, t.c, P.c)}
          ${sel('ca-g', t.grant, t.g, P.g)}${sel('ca-s', t.state, t.s, P.s)}
        </div>
        <div class="hd-block ca-test"><p class="ph-k">${E(t.test)}<span>${E(P.s === 'report' ? t.rep : '')}</span></p>
          <p class="hd-ck ca-sum">${E(aff.length ? t.stats(aff.length, nb, nm, na) : t.none)}</p>
          <ul class="ca-list">${SIGNINS.map((s, i) => `<li class="ca-${res[i].o}"><div><b>${E(t.sc[i])}</b><span>${E(t.scd[i])}</span><em>${E(res[i].w)}</em></div><span class="pill ${PILL[res[i].o]}">${E(t.out[res[i].o])}</span></li>`).join('')}</ul>
          ${warns.map(w => `<p class="ca-warn ${w[0]}">${E(w[1])}</p>`).join('')}
          <p class="hd-ck">${E(t.note)}</p>
          <button class="linkbtn" type="button" id="caCopy">${E(t.copy)}</button>
        </div>
      </div>`;
  }

  root.addEventListener('change', e => {
    const el = e.target;
    if (el.id === 'ca-excl') P.excl = el.checked;
    else if (el.dataset.k) P[el.dataset.k] = el.value;
    else return;
    render();
    const again = el.id && root.querySelector('#' + el.id); if (again) again.focus();
  });
  root.addEventListener('click', async e => {
    const tpl = e.target.closest('[data-tpl]');
    if (tpl) { P = Object.assign({}, DEFAULT, TPL[tpl.dataset.tpl], { s: 'on', excl: true }); render(); return; }
    if (e.target.id === 'caReset') { P = Object.assign({}, DEFAULT); render(); return; }
    if (e.target.id === 'caCopy') {
      try { await navigator.clipboard.writeText(lastSummary); e.target.textContent = TX().copied; setTimeout(() => { e.target.textContent = TX().copy; }, 1600); } catch (err) { /* clipboard blocked */ }
    }
  });
  document.addEventListener('langchange', render);
  render();
})();
