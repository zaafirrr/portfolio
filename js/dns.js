/* =====================================================================
   DNS & EMAIL AUTHENTICATION CHECKER
   Looks up a domain's public DNS records (SPF, DMARC, DKIM, MX, NS, CAA,
   MTA-STS) over DNS-over-HTTPS, so it runs entirely in the browser with
   no server and no API key. It only reads public records.
   DKIM selectors can't be listed, so a set of common ones is tried.
   ===================================================================== */
(function () {
  'use strict';
  const form = document.getElementById('dnsForm');
  if (!form) return;
  const input = document.getElementById('dnsInput');
  const out = document.getElementById('dnsOut');
  const copyBtn = document.getElementById('dnsCopy');

  const TXT = {
    en: {
      scanning: 'Looking up records…', badDomain: 'Enter a domain such as example.com (no https:// or paths).',
      offline: 'Could not reach a public DNS resolver. Preview windows and some networks block outside requests; on the live site this should work. Use "Show sample" to see what a result looks like.',
      sample: 'Sample data for a made-up domain, not a real lookup.',
      summary: 'Email authentication summary', copy: 'Copy report', copied: 'Copied',
      spf: 'SPF', dmarc: 'DMARC', dkim: 'DKIM', mx: 'Mail servers (MX)', ns: 'Name servers (NS)', caa: 'Certificate authorities (CAA)', mta: 'MTA-STS',
      none: 'Not found', lookups: 'DNS lookups', policy: 'Policy', reports: 'Reports to', pct: 'Applies to',
      spfMissing: 'No SPF record. Anyone can send mail pretending to be this domain.',
      spfMulti: 'More than one SPF record. Receivers will treat this as a permanent error. Merge them into one.',
      spfStrict: 'Ends with -all: mail from servers not listed is rejected.',
      spfSoft: 'Ends with ~all: mail from other servers is accepted but marked suspicious.',
      spfWeak: 'Ends with ?all or +all: this gives little or no protection.',
      spfNoAll: 'No "all" mechanism at the end, so the record does not say what to do with other senders.',
      spfOver: 'Over the 10 DNS-lookup limit. Receivers can return a permanent error (PermError).',
      spfNear: 'Close to the 10-lookup limit.',
      dmarcMissing: 'No DMARC record. Spoofed mail is not reported or blocked.',
      dmarcNone: 'p=none: monitoring only. Spoofed mail is still delivered.',
      dmarcQuar: 'p=quarantine: failing mail is sent to spam.',
      dmarcRej: 'p=reject: failing mail is blocked. This is the strongest setting.',
      dkimFound: 'Found at selector', dkimNone: 'No DKIM record at the common selectors tried. The domain may use a custom selector name, so this is not proof it is missing.',
      mxNone: 'No MX records. The domain cannot receive email.', mxNull: 'Null MX: the domain says it does not accept email.',
      hosted: 'Hosted by', mtaOk: 'MTA-STS policy published', mtaNo: 'Not published',
      caaNone: 'No CAA records, so any certificate authority may issue certificates.',
      tried: 'Selectors tried', checks: 'checks passed',
      ok: 'Good', warn: 'Review', bad: 'Missing', info: 'Info',
      rSpf: 'SPF valid and strict', rDmarc: 'DMARC published', rEnf: 'DMARC enforcing', rDkim: 'DKIM found', rMx: 'Receives mail (MX)'
    },
    fr: {
      scanning: 'Recherche des enregistrements…', badDomain: 'Saisissez un domaine comme example.com (sans https:// ni chemin).',
      offline: 'Impossible de joindre un résolveur DNS public. Certains aperçus et réseaux bloquent les requêtes externes ; sur le site en ligne cela devrait fonctionner. Utilisez « Voir un exemple » pour un aperçu du résultat.',
      sample: 'Données d’exemple pour un domaine fictif, pas une vraie recherche.',
      summary: 'Résumé de l’authentification e-mail', copy: 'Copier le rapport', copied: 'Copié',
      spf: 'SPF', dmarc: 'DMARC', dkim: 'DKIM', mx: 'Serveurs de messagerie (MX)', ns: 'Serveurs de noms (NS)', caa: 'Autorités de certification (CAA)', mta: 'MTA-STS',
      none: 'Introuvable', lookups: 'Requêtes DNS', policy: 'Politique', reports: 'Rapports vers', pct: 'S’applique à',
      spfMissing: 'Aucun enregistrement SPF. N’importe qui peut envoyer des e-mails en se faisant passer pour ce domaine.',
      spfMulti: 'Plus d’un enregistrement SPF. Les destinataires le traiteront comme une erreur permanente. Fusionnez-les en un seul.',
      spfStrict: 'Se termine par -all : le courrier des serveurs non listés est rejeté.',
      spfSoft: 'Se termine par ~all : le courrier des autres serveurs est accepté mais marqué suspect.',
      spfWeak: 'Se termine par ?all ou +all : protection faible ou nulle.',
      spfNoAll: 'Pas de mécanisme « all » à la fin : l’enregistrement ne dit pas quoi faire des autres expéditeurs.',
      spfOver: 'Au-delà de la limite de 10 requêtes DNS. Les destinataires peuvent renvoyer une erreur permanente (PermError).',
      spfNear: 'Proche de la limite de 10 requêtes.',
      dmarcMissing: 'Aucun enregistrement DMARC. Les e-mails usurpés ne sont ni signalés ni bloqués.',
      dmarcNone: 'p=none : surveillance uniquement. Les e-mails usurpés sont toujours livrés.',
      dmarcQuar: 'p=quarantine : le courrier en échec va dans les indésirables.',
      dmarcRej: 'p=reject : le courrier en échec est bloqué. C’est le réglage le plus strict.',
      dkimFound: 'Trouvé au sélecteur', dkimNone: 'Aucun enregistrement DKIM aux sélecteurs courants testés. Le domaine peut utiliser un sélecteur personnalisé : ce n’est pas une preuve d’absence.',
      mxNone: 'Aucun enregistrement MX. Le domaine ne peut pas recevoir d’e-mails.', mxNull: 'MX nul : le domaine indique qu’il n’accepte pas d’e-mails.',
      hosted: 'Hébergé par', mtaOk: 'Politique MTA-STS publiée', mtaNo: 'Non publié',
      caaNone: 'Aucun CAA : n’importe quelle autorité peut émettre des certificats.',
      tried: 'Sélecteurs testés', checks: 'contrôles réussis',
      ok: 'Bon', warn: 'À revoir', bad: 'Absent', info: 'Info',
      rSpf: 'SPF valide et strict', rDmarc: 'DMARC publié', rEnf: 'DMARC appliqué', rDkim: 'DKIM trouvé', rMx: 'Reçoit du courrier (MX)'
    }
  };
  const T = () => TXT[typeof lang !== 'undefined' && lang === 'fr' ? 'fr' : 'en'];
  const E = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const SELECTORS = ['selector1', 'selector2', 'google', 'default', 's1', 's2', 'k1', 'dkim', 'mail'];
  const RESOLVERS = [
    n => `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=`,
    n => `https://dns.google/resolve?name=${encodeURIComponent(n)}&type=`
  ];
  const cache = new Map();

  async function dns(name, type) {
    const key = type + ':' + name;
    if (cache.has(key)) return cache.get(key);
    let lastErr;
    for (const mk of RESOLVERS) {
      try {
        const res = await fetch(mk(name) + type, { headers: { accept: 'application/dns-json' } });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const j = await res.json();
        const answers = (j.Answer || []).filter(a => a.type === ({ TXT: 16, MX: 15, NS: 2, CAA: 257, A: 1 }[type]));
        const data = answers.map(a => a.data);
        const r = { status: j.Status, data, anyAnswer: (j.Answer || []).length > 0 };
        cache.set(key, r);
        return r;
      } catch (e) { lastErr = e; }
    }
    throw lastErr || new Error('dns');
  }
  const txtJoin = d => d.replace(/^"|"$/g, '').replace(/"\s+"/g, '');

  /* ---- SPF: parse and count DNS lookups, following includes ---- */
  async function spfInfo(domain) {
    const r = await dns(domain, 'TXT');
    const recs = r.data.map(txtJoin).filter(s => /^v=spf1(\s|$)/i.test(s));
    if (!recs.length) return { state: 'missing' };
    if (recs.length > 1) return { state: 'multi', records: recs };
    let lookups = 0; const seen = new Set();
    async function walk(rec, depth) {
      const parts = rec.split(/\s+/).slice(1);
      for (const p of parts) {
        const m = p.replace(/^[+\-~?]/, '');
        if (/^(include:|redirect=)/i.test(m)) {
          lookups++;
          const target = m.split(/[:=]/)[1];
          if (depth < 4 && target && !seen.has(target) && lookups <= 14) {
            seen.add(target);
            try {
              const rr = (await dns(target, 'TXT')).data.map(txtJoin).find(s => /^v=spf1(\s|$)/i.test(s));
              if (rr) await walk(rr, depth + 1);
            } catch (e) { /* counted, not followed */ }
          }
        } else if (/^(a|mx|ptr|exists)(:|\/|$)/i.test(m)) lookups++;
      }
    }
    await walk(recs[0], 0);
    const all = (recs[0].match(/\s([+\-~?]?)all\s*$/i) || [])[1];
    return { state: 'ok', record: recs[0], lookups, all: all === undefined ? null : (all || '+') };
  }

  async function dmarcInfo(domain) {
    const r = await dns('_dmarc.' + domain, 'TXT');
    const rec = r.data.map(txtJoin).find(s => /^v=DMARC1/i.test(s));
    if (!rec) return { state: 'missing' };
    const tags = {};
    rec.split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) tags[p.slice(0, i).trim().toLowerCase()] = p.slice(i + 1).trim(); });
    return { state: 'ok', record: rec, tags };
  }

  async function dkimInfo(domain) {
    const found = [];
    await Promise.all(SELECTORS.map(async s => {
      try { const r = await dns(`${s}._domainkey.${domain}`, 'TXT'); if (r.anyAnswer && r.status === 0) found.push(s); } catch (e) { /* skip */ }
    }));
    return found.sort((a, b) => SELECTORS.indexOf(a) - SELECTORS.indexOf(b));
  }

  const PROVIDERS = [[/protection\.outlook\.com\.?$/i, 'Microsoft 365'], [/(google|googlemail)\.com\.?$/i, 'Google Workspace'], [/mimecast/i, 'Mimecast'], [/pphosted\.com\.?$/i, 'Proofpoint'], [/mailgun/i, 'Mailgun'], [/zoho/i, 'Zoho Mail']];
  const provider = host => (PROVIDERS.find(([re]) => re.test(host)) || [])[1];

  function pill(cls, txt) { return `<span class="pill ${cls}">${E(txt)}</span>`; }
  function block(title, status, body) {
    return `<div class="hd-block"><p class="ph-k">${E(title)}${status ? `<span>${status}</span>` : ''}</p>${body}</div>`;
  }
  const code = s => `<code class="dns-rec">${E(s)}</code>`;

  let last = null;
  async function scan(domain) {
    const t = T();
    out.innerHTML = `<div class="dm-row"><span class="dm-key">…</span><span class="dm-val">${E(t.scanning)}</span></div>`;
    copyBtn.hidden = true;
    let spf, dmarc, dkim, mx, ns, caa, mta;
    try {
      [spf, dmarc, dkim, mx, ns, caa, mta] = await Promise.all([
        spfInfo(domain), dmarcInfo(domain), dkimInfo(domain),
        dns(domain, 'MX'), dns(domain, 'NS'), dns(domain, 'CAA'), dns('_mta-sts.' + domain, 'TXT')
      ]);
    } catch (e) {
      out.innerHTML = `<div class="dm-row"><span class="dm-key">!</span><span class="dm-val">${E(t.offline)}</span></div>`;
      return;
    }
    last = { domain, spf, dmarc, dkim, mx, ns, caa, mta };
    render();
  }

  function build() {
    const t = T(); const { domain, spf, dmarc, dkim, mx, ns, caa, mta } = last;
    const rep = []; const blocks = []; const checks = [];

    /* SPF */
    let spfPill, spfBody;
    if (spf.state === 'missing') { spfPill = pill('s-bad', t.bad); spfBody = `<p class="hd-ex">${E(t.spfMissing)}</p>`; checks.push([t.rSpf, false]); }
    else if (spf.state === 'multi') { spfPill = pill('s-bad', t.bad); spfBody = `<p class="hd-ex">${E(t.spfMulti)}</p>` + spf.records.map(code).join(''); checks.push([t.rSpf, false]); }
    else {
      const lines = [];
      let good = true;
      if (spf.all === '-') lines.push([t.spfStrict, 'ok']);
      else if (spf.all === '~') { lines.push([t.spfSoft, 'warn']); }
      else if (spf.all === null) { lines.push([t.spfNoAll, 'warn']); good = false; }
      else { lines.push([t.spfWeak, 'bad']); good = false; }
      if (spf.lookups > 10) { lines.push([t.spfOver, 'bad']); good = false; }
      else if (spf.lookups >= 9) lines.push([t.spfNear, 'warn']);
      const worst = lines.some(l => l[1] === 'bad') ? 's-bad' : lines.some(l => l[1] === 'warn') ? 's-wip' : 's-done';
      spfPill = pill(worst, worst === 's-done' ? t.ok : worst === 's-wip' ? t.warn : t.bad);
      spfBody = code(spf.record) + `<p class="hd-ck">${E(t.lookups)}: <b>${spf.lookups}</b> / 10</p>` + lines.map(l => `<p class="hd-ex">${E(l[0])}</p>`).join('');
      checks.push([t.rSpf, good && (spf.all === '-' || spf.all === '~')]);
    }
    blocks.push(block(t.spf, spfPill, spfBody));
    rep.push(`SPF: ${spf.state === 'ok' ? spf.record + ` (${spf.lookups}/10 lookups)` : spf.state}`);

    /* DMARC */
    let dPill, dBody, enforcing = false;
    if (dmarc.state === 'missing') { dPill = pill('s-bad', t.bad); dBody = `<p class="hd-ex">${E(t.dmarcMissing)}</p>`; checks.push([t.rDmarc, false], [t.rEnf, false]); }
    else {
      const p = (dmarc.tags.p || '').toLowerCase();
      enforcing = p === 'quarantine' || p === 'reject';
      dPill = p === 'reject' ? pill('s-done', t.ok) : p === 'quarantine' ? pill('s-done', t.ok) : pill('s-wip', t.warn);
      const msg = p === 'reject' ? t.dmarcRej : p === 'quarantine' ? t.dmarcQuar : t.dmarcNone;
      const extra = [];
      if (dmarc.tags.pct) extra.push(`${t.pct}: ${dmarc.tags.pct}%`);
      if (dmarc.tags.rua) extra.push(`${t.reports}: ${dmarc.tags.rua}`);
      dBody = code(dmarc.record) + `<p class="hd-ex">${E(msg)}</p>` + (extra.length ? `<p class="hd-ck">${E(extra.join(' · '))}</p>` : '');
      checks.push([t.rDmarc, true], [t.rEnf, enforcing]);
    }
    blocks.push(block(t.dmarc, dPill, dBody));
    rep.push(`DMARC: ${dmarc.state === 'ok' ? dmarc.record : 'not found'}`);

    /* DKIM */
    blocks.push(block(t.dkim, dkim.length ? pill('s-done', t.ok) : pill('s-wip', t.info),
      dkim.length ? `<p class="hd-ex">${E(t.dkimFound)}: <b>${E(dkim.join(', '))}</b></p>` : `<p class="hd-ex">${E(t.dkimNone)}</p>`)
      .replace('</div>', `<p class="hd-ck">${E(t.tried)}: ${E(SELECTORS.join(', '))}</p></div>`));
    checks.push([t.rDkim, dkim.length > 0]);
    rep.push(`DKIM selectors found: ${dkim.length ? dkim.join(', ') : 'none among common selectors'}`);

    /* MX */
    const mxList = mx.data.map(d => { const [pr, ...h] = d.split(' '); return { pr: +pr, host: h.join(' ').replace(/\.$/, '') }; }).sort((a, b) => a.pr - b.pr);
    const isNull = mxList.length === 1 && mxList[0].host === '';
    let mxBody;
    if (!mxList.length) mxBody = `<p class="hd-ex">${E(t.mxNone)}</p>`;
    else if (isNull) mxBody = `<p class="hd-ex">${E(t.mxNull)}</p>`;
    else {
      const prov = provider(mxList[0].host);
      mxBody = `<ul class="dns-list">${mxList.map(m => `<li><span>${m.pr}</span><code>${E(m.host)}</code></li>`).join('')}</ul>` + (prov ? `<p class="hd-ck">${E(t.hosted)}: <b>${E(prov)}</b></p>` : '');
    }
    checks.push([t.rMx, mxList.length > 0 && !isNull]);
    blocks.push(block(t.mx, mxList.length && !isNull ? '' : pill('s-bad', t.bad), mxBody));
    rep.push(`MX: ${mxList.length ? mxList.map(m => `${m.pr} ${m.host}`).join(', ') : 'none'}`);

    /* NS, CAA, MTA-STS */
    const nsList = ns.data.map(d => d.replace(/\.$/, '')).sort();
    blocks.push(block(t.ns, '', nsList.length ? `<ul class="dns-list">${nsList.map(n => `<li><code>${E(n)}</code></li>`).join('')}</ul>` : `<p class="hd-ex">${E(t.none)}</p>`));
    blocks.push(block(t.caa, caa.data.length ? '' : pill('s-wip', t.info), caa.data.length ? `<ul class="dns-list">${caa.data.map(n => `<li><code>${E(n)}</code></li>`).join('')}</ul>` : `<p class="hd-ex">${E(t.caaNone)}</p>`));
    const hasMta = mta.data.some(d => /v=STSv1/i.test(d));
    blocks.push(block(t.mta, hasMta ? pill('s-done', t.ok) : pill('s-wip', t.info), `<p class="hd-ex">${E(hasMta ? t.mtaOk : t.mtaNo)}</p>`));
    rep.push(`NS: ${nsList.join(', ') || 'none'}`, `CAA: ${caa.data.join(', ') || 'none'}`, `MTA-STS: ${hasMta ? 'published' : 'not published'}`);

    const passed = checks.filter(c => c[1]).length;
    const sum = `<div class="hd-block dns-sum"><p class="ph-k">${E(t.summary)}<span>${passed} / ${checks.length} ${E(t.checks)}</span></p>
      <div class="dns-bar" role="img" aria-label="${passed} / ${checks.length}"><i style="width:${Math.round(passed / checks.length * 100)}%"></i></div>
      <ul class="dns-checks">${checks.map(c => `<li class="${c[1] ? 'y' : 'n'}"><span aria-hidden="true">${c[1] ? '✓' : '✕'}</span>${E(c[0])}</li>`).join('')}</ul></div>`;
    last.report = `DNS and email authentication report for ${domain}\n` + `${passed}/${checks.length} checks passed\n\n` + rep.join('\n');
    return sum + blocks.join('');
  }

  function render() {
    if (!last) return;
    out.innerHTML = (last.sample ? `<div class="dm-row"><span class="dm-key">i</span><span class="dm-val">${E(T().sample)}</span></div>` : '') + build();
    copyBtn.hidden = false;
    copyBtn.textContent = T().copy;
  }

  const SAMPLE = {
    domain: 'example-corp.test', sample: true,
    spf: { state: 'ok', record: 'v=spf1 include:spf.protection.outlook.com include:_spf.example-mailer.test -all', lookups: 4, all: '-' },
    dmarc: { state: 'ok', record: 'v=DMARC1; p=quarantine; pct=100; rua=mailto:reports@example-corp.test', tags: { p: 'quarantine', pct: '100', rua: 'mailto:reports@example-corp.test' } },
    dkim: ['selector1', 'selector2'],
    mx: { data: ['0 example-corp-test.mail.protection.outlook.com.'] },
    ns: { data: ['ns1.example-dns.test.', 'ns2.example-dns.test.'] },
    caa: { data: [] },
    mta: { data: [] }
  };
  document.getElementById('dnsSample')?.addEventListener('click', () => { input.value = SAMPLE.domain; last = JSON.parse(JSON.stringify(SAMPLE)); render(); });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let d = input.value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^.*@/, '').split(/[\/?#:]/)[0].replace(/\.$/, '');
    if (!/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/.test(d)) {
      out.innerHTML = `<div class="dm-row"><span class="dm-key">!</span><span class="dm-val">${E(T().badDomain)}</span></div>`;
      return;
    }
    input.value = d;
    scan(d);
  });
  document.querySelectorAll('[data-dns]').forEach(b => b.addEventListener('click', () => { input.value = b.dataset.dns; form.requestSubmit(); }));
  copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(last.report); copyBtn.textContent = T().copied; setTimeout(() => { copyBtn.textContent = T().copy; }, 1600); } catch (e) { /* clipboard blocked */ }
  });
  document.addEventListener('langchange', () => { if (last) render(); });
})();
