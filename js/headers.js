/* =====================================================================
   EMAIL HEADER ANALYSER
   Paste the raw headers of an email (or load a sample) and it explains:
   SPF / DKIM / DMARC results, whether the sender lines up, the route
   the message took, and any red flags. Everything runs in the browser;
   nothing is sent anywhere. The samples use reserved example domains
   and documentation IP addresses, so they point at nobody real.
   ===================================================================== */

const HD_SAMPLES = {
  bad: `Return-Path: <bounce-77421@cheap-mailer.example>
Received: from mx.harbourandco.example (mx.harbourandco.example [192.0.2.10])
	by mail.harbourandco.example with ESMTPS; Thu, 8 Oct 2026 09:14:52 +0100
Received: from unknown (HELO cheap-mailer.example) ([203.0.113.45])
	by mx.harbourandco.example with SMTP; Thu, 8 Oct 2026 09:14:49 +0100
Received: from localhost ([198.51.100.7])
	by cheap-mailer.example with SMTP; Thu, 8 Oct 2026 08:02:11 +0000
Authentication-Results: mx.harbourandco.example;
	spf=fail (sender IP is 203.0.113.45) smtp.mailfrom=cheap-mailer.example;
	dkim=none (message not signed);
	dmarc=fail action=quarantine header.from=brightline-bank.example
From: "Brightline Bank Security" <security@brightline-bank.example>
Reply-To: verify.account.team@freemail.example
To: sam@harbourandco.example
Subject: URGENT: Verify your account within 24 hours
Date: Thu, 8 Oct 2026 08:02:10 +0000
Message-ID: <a81f9c2e.4471@cheap-mailer.example>
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8`,
  good: `Return-Path: <servicedesk@harbourandco.example>
Received: from mx.harbourandco.example (mx.harbourandco.example [192.0.2.10])
	by mail.harbourandco.example with ESMTPS; Fri, 9 Oct 2026 10:01:07 +0100
Received: from mail-out.harbourandco.example (mail-out.harbourandco.example [192.0.2.25])
	by mx.harbourandco.example with ESMTPS; Fri, 9 Oct 2026 10:01:05 +0100
Authentication-Results: mx.harbourandco.example;
	spf=pass smtp.mailfrom=harbourandco.example;
	dkim=pass header.d=harbourandco.example header.s=sel1;
	dmarc=pass action=none header.from=harbourandco.example
DKIM-Signature: v=1; a=rsa-sha256; d=harbourandco.example; s=sel1; h=from:to:subject:date
From: "IT Service Desk" <servicedesk@harbourandco.example>
To: sam@harbourandco.example
Subject: Planned maintenance: Saturday 9:00-11:00
Date: Fri, 9 Oct 2026 10:01:03 +0100
Message-ID: <20261009100103.5521@harbourandco.example>
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8`
};

const HD_TEXT = {
  en: {
    lvl:['Low','Medium','High'],
    empty:'Paste some headers first, or load a sample.',
    notHeaders:'That doesn\'t look like email headers. Look for lines like "From:", "Received:" and "Authentication-Results:".',
    risk:{ low:'Low risk', medium:'Medium risk', high:'High risk' },
    riskSub:{ low:'Nothing stands out. Still check the content before clicking anything.', medium:'Some things don\'t line up. Treat with caution.', high:'Several warning signs. Very likely spoofed or phishing.' },
    auth:'Authentication', align:'Sender check', route:'Route', flags:'Red flags', noFlags:'No red flags found.',
    hops:'{n} hops', origin:'Origin', delivered:'Delivered', unknown:'not found', delay:'+{d}',
    res:{ pass:'Pass', fail:'Fail', softfail:'Soft fail', neutral:'Neutral', none:'None', temperror:'Temp error', permerror:'Perm error', unknown:'Not found' },
    explain:{
      spf:{ pass:'The sending server is allowed to send for this domain.', fail:'The sending server is NOT allowed to send for this domain.', softfail:'The server probably isn\'t allowed to send for this domain.', none:'The domain has no SPF record.', unknown:'No SPF result in these headers.' },
      dkim:{ pass:'The message was signed and wasn\'t changed in transit.', fail:'A signature exists but doesn\'t match. The message may have been altered.', none:'The message wasn\'t signed.', unknown:'No DKIM result in these headers.' },
      dmarc:{ pass:'The visible From address is authenticated.', fail:'The visible From address could not be authenticated, a strong sign of spoofing.', none:'The sender\'s domain has no DMARC policy.', unknown:'No DMARC result in these headers.' },
    },
    rows:{ from:'From', returnPath:'Return-Path', replyTo:'Reply-To', dkimD:'Signed by (DKIM)', msgId:'Message-ID domain' },
    match:'matches', differs:'differs',
    f:{
      spfFail:'SPF failed: the server that sent this isn\'t authorised for the sender\'s domain.',
      spfSoft:'SPF soft fail: the sending server probably isn\'t authorised.',
      dkimBad:'No valid DKIM signature, so there\'s no proof the content is untouched.',
      dmarcFail:'DMARC failed: the From address is very likely forged.',
      dmarcNone:'The sender\'s domain doesn\'t publish a DMARC policy.',
      replyTo:'Replies go to a different domain ({d}) from the sender.',
      returnPath:'Bounces go to a different domain ({d}). Common with mailing services, but worth noting.',
      dkimAlign:'The DKIM signature is from {d}, not the sender\'s domain.',
      msgId:'The Message-ID was created by {d}, not the sender\'s domain.',
      helo:'The first server identified itself vaguely ("unknown" or a bare IP).',
      urgent:'The subject uses pressure words ("{w}").',
    }
  },
  fr: {
    lvl:['Faible','Moyen','Élevé'],
    empty:'Collez d\'abord des en-têtes, ou chargez un exemple.',
    notHeaders:'Cela ne ressemble pas à des en-têtes d\'e-mail. Cherchez des lignes comme « From: », « Received: » et « Authentication-Results: ».',
    risk:{ low:'Risque faible', medium:'Risque moyen', high:'Risque élevé' },
    riskSub:{ low:'Rien d\'anormal. Vérifiez quand même le contenu avant de cliquer.', medium:'Certains éléments ne concordent pas. Prudence.', high:'Plusieurs signaux d\'alerte. Très probablement usurpé ou du phishing.' },
    auth:'Authentification', align:'Vérification de l\'expéditeur', route:'Trajet', flags:'Signaux d\'alerte', noFlags:'Aucun signal d\'alerte.',
    hops:'{n} sauts', origin:'Origine', delivered:'Livré', unknown:'introuvable', delay:'+{d}',
    res:{ pass:'Conforme', fail:'Échec', softfail:'Échec souple', neutral:'Neutre', none:'Aucun', temperror:'Erreur temporaire', permerror:'Erreur permanente', unknown:'Introuvable' },
    explain:{
      spf:{ pass:'Le serveur d\'envoi est autorisé pour ce domaine.', fail:'Le serveur d\'envoi n\'est PAS autorisé pour ce domaine.', softfail:'Le serveur n\'est probablement pas autorisé pour ce domaine.', none:'Le domaine n\'a pas d\'enregistrement SPF.', unknown:'Aucun résultat SPF dans ces en-têtes.' },
      dkim:{ pass:'Le message est signé et n\'a pas été modifié en route.', fail:'Une signature existe mais ne correspond pas. Le message a peut-être été modifié.', none:'Le message n\'est pas signé.', unknown:'Aucun résultat DKIM dans ces en-têtes.' },
      dmarc:{ pass:'L\'adresse d\'expéditeur visible est authentifiée.', fail:'L\'adresse d\'expéditeur visible n\'a pas pu être authentifiée : fort signe d\'usurpation.', none:'Le domaine de l\'expéditeur n\'a pas de politique DMARC.', unknown:'Aucun résultat DMARC dans ces en-têtes.' },
    },
    rows:{ from:'De', returnPath:'Return-Path', replyTo:'Répondre à', dkimD:'Signé par (DKIM)', msgId:'Domaine du Message-ID' },
    match:'concorde', differs:'diffère',
    f:{
      spfFail:'Échec SPF : le serveur d\'envoi n\'est pas autorisé pour le domaine de l\'expéditeur.',
      spfSoft:'Échec souple SPF : le serveur n\'est probablement pas autorisé.',
      dkimBad:'Aucune signature DKIM valide : rien ne prouve que le contenu est intact.',
      dmarcFail:'Échec DMARC : l\'adresse d\'expéditeur est très probablement falsifiée.',
      dmarcNone:'Le domaine de l\'expéditeur ne publie pas de politique DMARC.',
      replyTo:'Les réponses partent vers un autre domaine ({d}) que l\'expéditeur.',
      returnPath:'Les rebonds partent vers un autre domaine ({d}). Courant avec les services d\'envoi, mais à noter.',
      dkimAlign:'La signature DKIM vient de {d}, pas du domaine de l\'expéditeur.',
      msgId:'Le Message-ID a été créé par {d}, pas par le domaine de l\'expéditeur.',
      helo:'Le premier serveur s\'est identifié de façon vague (« unknown » ou simple IP).',
      urgent:'L\'objet utilise des mots de pression (« {w} »).',
    }
  }
};
const hT = () => HD_TEXT[lang === 'fr' ? 'fr' : 'en'];

/* ---------- Parsing ---------- */
function parseHeaders(raw){
  const lines = raw.replace(/\r/g, '').split('\n');
  const out = [];
  for (const line of lines){
    if (/^\s/.test(line) && out.length) out[out.length - 1][1] += ' ' + line.trim();   // folded line
    else { const m = line.match(/^([\w-]+):\s*(.*)$/); if (m) out.push([m[1].toLowerCase(), m[2]]); }
  }
  return out;
}
const SLD = /\.(co|org|ac|gov|net|com|ltd|plc|me)\.[a-z]{2}$/i;
const baseDomain = d => { if (!d) return ''; d = d.toLowerCase().replace(/[>\s]/g, ''); const parts = d.split('.'); return parts.slice(SLD.test(d) ? -3 : -2).join('.'); };
const domainOf = v => (String(v || '').match(/@([a-z0-9.-]+\.[a-z]{2,})/i) || [])[1]?.toLowerCase() || '';
const UNITS = s => s < 60 ? `${s}s` : s < 3600 ? `${Math.round(s / 60)} min` : `${(s / 3600).toFixed(1)} h`;

function analyse(raw){
  const T = hT(), H = parseHeaders(raw);
  const get = n => H.find(h => h[0] === n)?.[1] || '';
  const all = n => H.filter(h => h[0] === n).map(h => h[1]);
  if (!H.some(h => ['from','received','authentication-results','return-path'].includes(h[0]))) return { error: T.notHeaders };

  const ar = all('authentication-results').join(' ; ');
  const pick = k => ((ar.match(new RegExp(`\\b${k}=(\\w+)`, 'i')) || [])[1] || '').toLowerCase();
  let spf = pick('spf'), dkim = pick('dkim'), dmarc = pick('dmarc');
  if (!spf){ const r = get('received-spf'); spf = ((r.match(/^(\w+)/) || [])[1] || '').toLowerCase(); }
  const norm = v => (v in T.res ? v : v ? 'unknown' : 'unknown');
  spf = norm(spf); dkim = norm(dkim); dmarc = norm(dmarc);

  const from = get('from'), fromDom = domainOf(from), fb = baseDomain(fromDom);
  const rp = domainOf(get('return-path')), rt = domainOf(get('reply-to')), mid = domainOf(get('message-id'));
  const dkimD = ((get('dkim-signature').match(/\bd=([^;\s]+)/i) || ar.match(/header\.d=([^;\s]+)/i) || [])[1] || '').toLowerCase();

  const checks = [
    ['from', fromDom, null],
    ['returnPath', rp, rp ? baseDomain(rp) === fb : null],
    ['replyTo', rt, rt ? baseDomain(rt) === fb : null],
    ['dkimD', dkimD, dkimD ? baseDomain(dkimD) === fb : null],
    ['msgId', mid, mid ? baseDomain(mid) === fb : null],
  ].filter(c => c[1]);

  // Route: Received headers are newest first, so reverse for origin → delivery
  const hops = all('received').map(v => {
    const fromM = v.match(/from\s+(.+?)\s+by\s/i), byM = v.match(/\bby\s+([^\s;]+)/i);
    const dateStr = v.split(';').pop().trim(); const date = new Date(dateStr);
    return { from:(fromM ? fromM[1] : '').replace(/\s+/g, ' ').slice(0, 90), by: byM ? byM[1] : '', date: isNaN(date) ? null : date };
  }).reverse();
  hops.forEach((h, i) => { if (i && h.date && hops[i - 1].date) h.delay = Math.max(0, (h.date - hops[i - 1].date) / 1000); });

  // Red flags, weighted 3 (high) / 2 (medium) / 1 (low)
  const flags = [];
  if (spf === 'fail') flags.push([3, T.f.spfFail]); else if (spf === 'softfail') flags.push([2, T.f.spfSoft]);
  if (dkim === 'fail' || dkim === 'none') flags.push([2, T.f.dkimBad]);
  if (dmarc === 'fail') flags.push([3, T.f.dmarcFail]); else if (dmarc === 'none') flags.push([1, T.f.dmarcNone]);
  if (rt && baseDomain(rt) !== fb) flags.push([3, T.f.replyTo.replace('{d}', rt)]);
  if (rp && baseDomain(rp) !== fb) flags.push([1, T.f.returnPath.replace('{d}', rp)]);
  if (dkimD && baseDomain(dkimD) !== fb) flags.push([2, T.f.dkimAlign.replace('{d}', dkimD)]);
  if (mid && baseDomain(mid) !== fb) flags.push([1, T.f.msgId.replace('{d}', mid)]);
  if (hops[0] && /unknown|^\(?\[?\d{1,3}(\.\d{1,3}){3}/i.test(hops[0].from)) flags.push([1, T.f.helo]);
  const urg = (get('subject').match(/\b(urgent|immediately|suspend\w*|verify|password|locked|final notice|invoice|24 hours|urgente?|suspendu|vérifie\w*)\b/i) || [])[0];
  if (urg) flags.push([1, T.f.urgent.replace('{w}', urg)]);
  const score = flags.reduce((n, f) => n + f[0], 0);
  const risk = score >= 5 ? 'high' : score >= 2 ? 'medium' : 'low';
  return { spf, dkim, dmarc, checks, hops, flags: flags.sort((a, b) => b[0] - a[0]), risk, subject: get('subject') };
}

/* ---------- Rendering ---------- */
const resClass = r => r === 'pass' ? 's-done' : (r === 'fail' || r === 'permerror') ? 's-bad' : r === 'unknown' ? 's-plan' : 's-wip';
const hdOut = $('#hdOut');

function renderHd(raw){
  const T = hT();
  if (!raw.trim()){ hdOut.innerHTML = `<div class="dm-row"><span class="dm-key">!</span><span class="dm-val">${esc(T.empty)}</span></div>`; return; }
  const r = analyse(raw);
  if (r.error){ hdOut.innerHTML = `<div class="dm-row"><span class="dm-key">!</span><span class="dm-val">${esc(r.error)}</span></div>`; return; }
  const authRow = (k, v) => `
    <div class="hd-auth"><span class="dm-key">${k.toUpperCase()}</span><span class="pill ${resClass(v)}">${esc(T.res[v] || v)}</span><span class="hd-ex">${esc((T.explain[k][v]) || T.explain[k].unknown)}</span></div>`;
  hdOut.innerHTML = `
    <div class="dm-summary hd-${r.risk}">
      <span class="dm-grade ${r.risk === 'low' ? 'g-a' : r.risk === 'medium' ? 'g-c' : 'g-d'}">${r.risk === 'low' ? '✓' : '!'}</span>
      <p><b>${esc(T.risk[r.risk])}</b>${r.subject ? ` — <span class="hd-subj">${esc(r.subject)}</span>` : ''}<small>${esc(T.riskSub[r.risk])}</small></p>
    </div>
    <div class="hd-block"><p class="ph-k">${esc(T.auth)}</p>${authRow('spf', r.spf)}${authRow('dkim', r.dkim)}${authRow('dmarc', r.dmarc)}</div>
    ${r.checks.length ? `<div class="hd-block"><p class="ph-k">${esc(T.align)}</p>
      ${r.checks.map(([k, d, ok]) => `<div class="hd-check"><span class="hd-ck">${esc(T.rows[k])}</span><code>${esc(d)}</code>${ok === null ? '' : `<span class="pill ${ok ? 's-done' : 's-bad'}">${esc(ok ? T.match : T.differs)}</span>`}</div>`).join('')}</div>` : ''}
    ${r.hops.length ? `<div class="hd-block"><p class="ph-k">${esc(T.route)} <span>${esc(T.hops.replace('{n}', r.hops.length))}</span></p>
      <ol class="hd-route">${r.hops.map((h, i) => `<li><i aria-hidden="true"></i><div><b>${esc(h.by || T.unknown)}</b><span>${esc(i === 0 ? T.origin + ': ' : '')}${esc(h.from || T.unknown)}</span></div>${h.delay != null ? `<em>${esc(T.delay.replace('{d}', UNITS(h.delay)))}</em>` : ''}</li>`).join('')}</ol></div>` : ''}
    <div class="hd-block"><p class="ph-k">${esc(T.flags)} ${r.flags.length ? `<span>${r.flags.length}</span>` : ''}</p>
      ${r.flags.length ? `<ul class="ph-list">${r.flags.map(([w, txt]) => `<li class="${w >= 3 ? 'hit' : w === 2 ? 'miss' : 'none'}"><b>${esc(T.lvl[w >= 3 ? 2 : w === 2 ? 1 : 0])}</b>${esc(txt)}</li>`).join('')}</ul>` : `<p class="hd-ok">${esc(T.noFlags)}</p>`}</div>`;
}

let hdLast = null;
$('#hdForm')?.addEventListener('submit', e => { e.preventDefault(); hdLast = $('#hdInput').value; renderHd(hdLast); });
$$('[data-sample]').forEach(b => b.addEventListener('click', () => {
  $('#hdInput').value = HD_SAMPLES[b.dataset.sample]; hdLast = $('#hdInput').value; renderHd(hdLast);
}));
$('#hdClear')?.addEventListener('click', () => { $('#hdInput').value = ''; hdLast = null; hdOut.innerHTML = hdEmptyHTML; $('#hdInput').focus(); });
const hdEmptyHTML = hdOut ? hdOut.innerHTML : '';
document.addEventListener('langchange', () => { if (hdLast !== null) renderHd(hdLast); });
