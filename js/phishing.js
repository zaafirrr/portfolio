/* =====================================================================
   SPOT THE PHISH — a small training game
   Three fictional emails. Visitors click the parts that look suspicious,
   then decide whether the email is phishing or legitimate.
   All brands, people and addresses below are made up.

   To add an email, copy a round. "flags" lists the parts that are red
   flags; every clickable part has a data-part name in render().
   ===================================================================== */

const PH_ROUNDS = [
  { verdict:'phish',
    fromName:'Brightline Bank Security', from:'security@brightline-bank-alerts.net',
    replyTo:'verify.account.team@gmail-support.co',
    subject:{ en:'URGENT: Your account will be suspended in 24 hours', fr:'URGENT : votre compte sera suspendu dans 24 heures' },
    greeting:{ en:'Dear Customer,', fr:'Cher client,' },
    body:[
      { en:'We detected unusual sign-in activity on your account. To avoid permanent suspension, you must verify your identity immediately.', fr:'Nous avons détecté une connexion inhabituelle sur votre compte. Pour éviter une suspension définitive, vous devez vérifier votre identité immédiatement.' },
    ],
    cta:{ en:'Verify my account', fr:'Vérifier mon compte', url:'http://brightline-bank.secure-login-verify.xyz/account' },
    sign:{ en:'Brightline Bank Security Team', fr:'L\'équipe sécurité de Brightline Bank' },
    flags:{
      from:    { en:'The sender\'s domain isn\'t the bank\'s real domain. "brightline-bank-alerts.net" is made to look official.', fr:'Le domaine de l\'expéditeur n\'est pas celui de la banque. « brightline-bank-alerts.net » imite un domaine officiel.' },
      replyTo: { en:'Replies go to a free email address on a different domain. A real bank would never do that.', fr:'Les réponses partent vers une adresse gratuite sur un autre domaine. Une vraie banque ne ferait jamais ça.' },
      subject: { en:'Urgency and threats ("24 hours", "suspended") are used to rush you into acting.', fr:'L\'urgence et les menaces (« 24 heures », « suspendu ») servent à vous pousser à agir vite.' },
      greeting:{ en:'A generic greeting. Your bank knows your name.', fr:'Formule générique. Votre banque connaît votre nom.' },
      cta:     { en:'The button leads to an unrelated .xyz site over plain http. Always check where a link really goes.', fr:'Le bouton mène vers un site .xyz sans rapport, en http non sécurisé. Vérifiez toujours la vraie destination d\'un lien.' },
    } },

  { verdict:'phish',
    fromName:'SwiftParcel Delivery', from:'no-reply@swiftparce1.com',
    subject:{ en:'Your parcel could not be delivered', fr:'Votre colis n\'a pas pu être livré' },
    greeting:{ en:'Hello,', fr:'Bonjour,' },
    body:[
      { en:'We tried to deliver your parcel today but nobody was home. A redelivery fee of £1.99 is required.', fr:'Nous avons tenté de livrer votre colis aujourd\'hui mais personne n\'était là. Des frais de nouvelle livraison de 1,99 £ sont requis.' },
      { en:'Kindly fill you card details in the attached form to rebook delivery.', fr:'Veuillez remplir vous coordonnées bancaires dans le formulaire joint pour reprogrammer.', grammar:true },
    ],
    attach:'Delivery_Label.pdf.exe',
    sign:{ en:'SwiftParcel Customer Care', fr:'Service client SwiftParcel' },
    flags:{
      from:   { en:'Look closely: "swiftparce1" uses the number 1 instead of the letter l. A lookalike domain.', fr:'Regardez bien : « swiftparce1 » utilise le chiffre 1 à la place de la lettre l. Un domaine sosie.' },
      body0:  { en:'A tiny fee is a classic trick. The real goal is your card details.', fr:'Des frais minimes : une ruse classique. Le vrai but, ce sont vos coordonnées bancaires.' },
      body1:  { en:'Clumsy wording ("fill you card details") and a request for card details by email.', fr:'Formulation maladroite et demande de coordonnées bancaires par e-mail.' },
      attach: { en:'".pdf.exe" is a program pretending to be a PDF. Opening it could install malware.', fr:'« .pdf.exe » est un programme déguisé en PDF. L\'ouvrir pourrait installer un logiciel malveillant.' },
    } },

  { verdict:'legit',
    fromName:'IT Service Desk', from:'servicedesk@harbourandco.co.uk',
    subject:{ en:'Planned maintenance: Saturday 9:00–11:00', fr:'Maintenance prévue : samedi 9h00–11h00' },
    greeting:{ en:'Hi Sam,', fr:'Bonjour Sam,' },
    body:[
      { en:'We\'ll be updating the shared file server this Saturday between 9:00 and 11:00. You may not be able to open shared folders during that time.', fr:'Nous mettrons à jour le serveur de fichiers partagé ce samedi entre 9h00 et 11h00. Les dossiers partagés pourront être indisponibles pendant ce temps.' },
      { en:'No action is needed from you. If anything looks wrong on Monday, raise a ticket in the usual support portal.', fr:'Aucune action n\'est nécessaire de votre part. Si quelque chose ne va pas lundi, ouvrez un ticket dans le portail de support habituel.' },
    ],
    sign:{ en:'Priya, IT Service Desk · Harbour & Co', fr:'Priya, Service Desk IT · Harbour & Co' },
    flags:{} },
];

const PH_TEXT = {
  en: {
    round:'Email {n} of {t}', found:'Red flags found', score:'Score',
    hint:'Click anything suspicious, then make your call.',
    phish:'🎣 It\'s phishing', legit:'✅ Looks legitimate', next:'Next email →', results:'See my results →', again:'Play again',
    from:'From', replyTo:'Reply-to', to:'To', subject:'Subject', toYou:'you@example.com', attachment:'Attachment',
    hover:'Link goes to:', fine:'That part looks normal.', already:'Already spotted.',
    rightPhish:'Correct, this was phishing.', wrongPhish:'This one was phishing.',
    rightLegit:'Correct, this email is legitimate.', wrongLegit:'This one was actually legitimate.',
    legitWhy:'It comes from the company\'s own domain, uses your name, asks for nothing, and points you to the usual support portal.',
    missed:'Missed', spotted:'Spotted', flagsTitle:'Red flags',
    none:'No red flags spotted yet.',
    endTitle:'Your result', endScore:'{s} out of {m} points',
    ranks:[ 'Keep practising: phishers are counting on a quick click.', 'Good eye. A few tricks still slipped past.', 'Sharp. You\'d make a solid first line of defence.', 'Phish hunter. Nothing gets past you.' ],
    tip:'Tip: when in doubt, don\'t click. Go to the website yourself, or report it to your IT team.',
  },
  fr: {
    round:'E-mail {n} sur {t}', found:'Signaux repérés', score:'Score',
    hint:'Cliquez sur tout ce qui semble suspect, puis tranchez.',
    phish:'🎣 C\'est du phishing', legit:'✅ Semble légitime', next:'E-mail suivant →', results:'Voir mon résultat →', again:'Rejouer',
    from:'De', replyTo:'Répondre à', to:'À', subject:'Objet', toYou:'vous@example.com', attachment:'Pièce jointe',
    hover:'Le lien mène à :', fine:'Cette partie semble normale.', already:'Déjà repéré.',
    rightPhish:'Exact, c\'était du phishing.', wrongPhish:'C\'était du phishing.',
    rightLegit:'Exact, cet e-mail est légitime.', wrongLegit:'Celui-ci était en fait légitime.',
    legitWhy:'Il vient du domaine de l\'entreprise, utilise votre prénom, ne demande rien et renvoie vers le portail de support habituel.',
    missed:'Manqué', spotted:'Repéré', flagsTitle:'Signaux d\'alerte',
    none:'Aucun signal repéré pour l\'instant.',
    endTitle:'Votre résultat', endScore:'{s} points sur {m}',
    ranks:[ 'Continuez à vous entraîner : les fraudeurs comptent sur un clic rapide.', 'Bon œil. Quelques pièges sont passés.', 'Vigilant. Vous feriez une bonne première ligne de défense.', 'Chasseur de phishing. Rien ne vous échappe.' ],
    tip:'Astuce : dans le doute, ne cliquez pas. Allez vous-même sur le site, ou signalez-le à votre équipe IT.',
  }
};

const gameEl = $('#game');
const pT = () => PH_TEXT[lang === 'fr' ? 'fr' : 'en'];
const MAX = PH_ROUNDS.reduce((n, r) => n + Object.keys(r.flags).length + 2, 0);
let G;
const newGame = () => (G = { round:0, found:new Set(), decided:null, score:0, msg:'' });

function partAttrs(key){ return `data-part="${key}" tabindex="0" role="button"`; }

function renderGame(){
  if (!gameEl) return;
  const T = pT();
  if (G.round >= PH_ROUNDS.length) return renderEnd();
  const r = PH_ROUNDS[G.round], keys = Object.keys(r.flags);
  const done = G.decided !== null;
  const cls = k => {
    if (r.flags[k] && (G.found.has(k))) return ' flag-hit';
    if (done && r.flags[k]) return ' flag-miss';
    return '';
  };
  const body = r.body.map((b, i) => `<p class="ph-part${cls('body' + i)}" ${partAttrs('body' + i)}>${esc(b[lang])}</p>`).join('');
  gameEl.innerHTML = `
    <div class="ph-top">
      <span class="ph-round">${esc(T.round.replace('{n}', G.round + 1).replace('{t}', PH_ROUNDS.length))}</span>
      <span class="ph-dots">${PH_ROUNDS.map((_, i) => `<i class="${i < G.round ? 'done' : i === G.round ? 'now' : ''}"></i>`).join('')}</span>
      <span class="ph-score">${esc(T.score)}: <b>${G.score}</b></span>
    </div>
    <div class="ph-body">
      <div class="mail ${done ? 'decided' : ''}">
        <div class="mail-head">
          <div class="ph-part${cls('from')}" ${partAttrs('from')}><span class="mk">${esc(T.from)}</span><b>${esc(r.fromName)}</b> <span class="addr">&lt;${esc(r.from)}&gt;</span></div>
          ${r.replyTo ? `<div class="ph-part${cls('replyTo')}" ${partAttrs('replyTo')}><span class="mk">${esc(T.replyTo)}</span><span class="addr">${esc(r.replyTo)}</span></div>` : ''}
          <div class="mail-to"><span class="mk">${esc(T.to)}</span><span class="addr">${esc(T.toYou)}</span></div>
          <div class="ph-part mail-subj${cls('subject')}" ${partAttrs('subject')}><span class="mk">${esc(T.subject)}</span><b>${esc(r.subject[lang])}</b></div>
        </div>
        <div class="mail-body">
          <p class="ph-part${cls('greeting')}" ${partAttrs('greeting')}>${esc(r.greeting[lang])}</p>
          ${body}
          ${r.cta ? `<p><span class="ph-part mail-btn${cls('cta')}" ${partAttrs('cta')} data-url="${esc(r.cta.url)}">${esc(r.cta[lang])}</span></p>` : ''}
          ${r.attach ? `<div class="ph-part mail-attach${cls('attach')}" ${partAttrs('attach')}><span class="clip" aria-hidden="true">📎</span><span><small>${esc(T.attachment)}</small>${esc(r.attach)}</span></div>` : ''}
          <p class="mail-sign">${esc(r.sign[lang])}</p>
        </div>
        <div class="mail-status" id="phStatus" aria-live="polite">${esc(G.msg || T.hint)}</div>
      </div>
      <aside class="ph-side">
        <p class="ph-k">${esc(T.flagsTitle)} ${keys.length && !done ? `<span>${G.found.size}/${keys.length}</span>` : ''}</p>
        <ul class="ph-list">
          ${keys.filter(k => G.found.has(k) || done).map(k => `<li class="${G.found.has(k) ? 'hit' : 'miss'}"><b>${esc(G.found.has(k) ? T.spotted : T.missed)}</b>${esc(r.flags[k][lang])}</li>`).join('')
            || (done && r.verdict === 'legit' ? `<li class="hit"><b>✓</b>${esc(T.legitWhy)}</li>` : `<li class="none">${esc(T.none)}</li>`)}
        </ul>
        ${done ? `
          <p class="ph-verdict ${G.decided === r.verdict ? 'ok' : 'bad'}">${esc(r.verdict === 'phish' ? (G.decided === 'phish' ? T.rightPhish : T.wrongPhish) : (G.decided === 'legit' ? T.rightLegit : T.wrongLegit))}</p>
          <button class="btn primary ph-next" type="button" data-ph="next">${esc(G.round === PH_ROUNDS.length - 1 ? T.results : T.next)}</button>`
        : `
          <div class="ph-actions">
            <button class="btn ph-btn bad" type="button" data-ph="phish">${esc(T.phish)}</button>
            <button class="btn ph-btn good" type="button" data-ph="legit">${esc(T.legit)}</button>
          </div>`}
      </aside>
    </div>`;
}

function renderEnd(){
  const T = pT();
  const pct = G.score / MAX;
  const rank = T.ranks[pct >= .9 ? 3 : pct >= .7 ? 2 : pct >= .45 ? 1 : 0];
  gameEl.innerHTML = `
    <div class="ph-end">
      <div class="ph-ring" style="--pct:${Math.round(pct * 100)}"><b>${G.score}</b><span>/ ${MAX}</span></div>
      <div>
        <p class="ph-k">${esc(T.endTitle)}</p>
        <h4>${esc(rank)}</h4>
        <p>${esc(T.endScore.replace('{s}', G.score).replace('{m}', MAX))}</p>
        <p class="ph-tip">${esc(T.tip)}</p>
        <button class="btn primary" type="button" data-ph="again">${esc(T.again)}</button>
      </div>
    </div>`;
}

function setStatus(text){ G.msg = text; const s = $('#phStatus'); if (s) s.textContent = text; }

function clickPart(key){
  const r = PH_ROUNDS[G.round], T = pT();
  if (G.decided !== null) return;
  if (r.flags[key]){
    if (G.found.has(key)) return setStatus(T.already);
    G.found.add(key); G.score += 1; G.msg = r.flags[key][lang];
    renderGame();
  } else setStatus(T.fine);
}

gameEl?.addEventListener('click', e => {
  const part = e.target.closest('[data-part]');
  if (part) return clickPart(part.dataset.part);
  const b = e.target.closest('[data-ph]'); if (!b) return;
  const act = b.dataset.ph, r = PH_ROUNDS[G.round];
  if (act === 'phish' || act === 'legit'){
    G.decided = act; if (act === r.verdict) G.score += 2; G.msg = ''; renderGame();
  } else if (act === 'next'){
    G.round += 1; G.found = new Set(); G.decided = null; G.msg = ''; renderGame();
    gameEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
  } else if (act === 'again'){ newGame(); renderGame(); }
});
gameEl?.addEventListener('keydown', e => {
  const part = e.target.closest('[data-part]');
  if (part && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); clickPart(part.dataset.part); }
});
/* Hovering the button shows where the link really goes, like an email client's status bar */
gameEl?.addEventListener('pointerover', e => {
  const l = e.target.closest('[data-url]'); if (!l || G.decided !== null) return;
  setStatus(`${pT().hover} ${l.dataset.url}`);
});
gameEl?.addEventListener('focusin', e => {
  const l = e.target.closest('[data-url]'); if (l && G.decided === null) setStatus(`${pT().hover} ${l.dataset.url}`);
});

document.addEventListener('langchange', () => { G.msg = ''; renderGame(); });
newGame(); renderGame();
