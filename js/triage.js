/* =====================================================================
   SERVICE DESK TRIAGE GAME
   Six made-up tickets. For each one, set the priority (impact x urgency)
   and choose the best first step. Scoring: 2 points for the right
   priority (1 if one level off) and 2 for the right first step.
   All people, systems and companies are fictional.
   ===================================================================== */
(function () {
  'use strict';
  const root = document.getElementById('trApp');
  if (!root) return;
  const E = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lg = () => (typeof lang !== 'undefined' && lang === 'fr' ? 'fr' : 'en');

  const UI = {
    en: {
      start: 'Start triage', again: 'Play again', next: 'Next ticket', finish: 'See my result', check: 'Check my answers',
      of: (i, n) => `Ticket ${i} of ${n}`, score: 'Score', prio: 'Set the priority', step: 'Choose the best first step',
      intro: 'You are on the service desk. Six tickets have just arrived. Set a priority from impact and urgency, then pick the best first step.',
      matrix: 'Priority guide', p: ['P1 Critical', 'P2 High', 'P3 Medium', 'P4 Low'],
      pd: ['Business stopped, many users or a security incident', 'Serious impact on a person or small team, or a firm deadline', 'Normal work affected, a workaround exists or it is planned', 'Minor, cosmetic or a single-user inconvenience'],
      fp: 'Priority', fs: 'First step', right: 'Right', off: 'Not quite', yours: 'You chose', best: 'Best answer',
      req: 'Pick a priority and a first step to continue.',
      pts: n => `+${n} points`, final: 'Your result', outOf: n => `out of ${n}`,
      r: ['Keep practising: re-read the priority guide and try again.', 'Solid start: your instincts are good, now tighten the priorities.', 'Strong triage: you weigh impact and urgency well.', 'Service desk lead material: excellent judgement.'],
      note: 'Training simulation. All tickets and people are made up.'
    },
    fr: {
      start: 'Commencer le tri', again: 'Rejouer', next: 'Ticket suivant', finish: 'Voir mon résultat', check: 'Vérifier mes réponses',
      of: (i, n) => `Ticket ${i} sur ${n}`, score: 'Score', prio: 'Définissez la priorité', step: 'Choisissez la meilleure première étape',
      intro: 'Vous êtes au service desk. Six tickets viennent d’arriver. Définissez une priorité selon l’impact et l’urgence, puis choisissez la meilleure première étape.',
      matrix: 'Guide des priorités', p: ['P1 Critique', 'P2 Élevée', 'P3 Moyenne', 'P4 Faible'],
      pd: ['Activité bloquée, nombreux utilisateurs ou incident de sécurité', 'Impact sérieux sur une personne ou une petite équipe, ou échéance ferme', 'Travail normal touché, contournement possible ou demande planifiée', 'Mineur, esthétique ou gêne pour un seul utilisateur'],
      fp: 'Priorité', fs: 'Première étape', right: 'Juste', off: 'Pas tout à fait', yours: 'Votre choix', best: 'Meilleure réponse',
      req: 'Choisissez une priorité et une première étape pour continuer.',
      pts: n => `+${n} points`, final: 'Votre résultat', outOf: n => `sur ${n}`,
      r: ['Continuez à vous entraîner : relisez le guide des priorités et réessayez.', 'Bon début : vos instincts sont bons, affinez maintenant les priorités.', 'Tri solide : vous pesez bien l’impact et l’urgence.', 'Profil de responsable de service desk : excellent jugement.'],
      note: 'Simulation de formation. Tous les tickets et personnes sont fictifs.'
    }
  };

  /* prio: 1..4. opts[0] is always the correct step; the order is shuffled when shown. */
  const TICKETS = [
    { id: 'INC-4101', t: { en: 'Nobody in the office can open email', fr: 'Personne au bureau ne peut ouvrir ses e-mails' },
      b: { en: '“Outlook says Disconnected on every PC in the building. It started 10 minutes ago.”', fr: '« Outlook affiche Déconnecté sur tous les PC du bâtiment. Cela a commencé il y a 10 minutes. »' },
      f: { en: [['People affected', '40'], ['Business hours', 'Yes']], fr: [['Personnes touchées', '40'], ['Heures ouvrées', 'Oui']] }, p: 1,
      o: { en: ['Check Microsoft 365 service health and the internet link first', 'Reinstall Outlook on each PC', 'Ask each user to restart their computer'], fr: ['Vérifier d’abord l’état du service Microsoft 365 et la liaison internet', 'Réinstaller Outlook sur chaque PC', 'Demander à chaque utilisateur de redémarrer son ordinateur'] },
      w: { en: 'Everyone is affected at once, so the cause is shared (service or network), not 40 separate PCs. Check the common cause first.', fr: 'Tout le monde est touché en même temps : la cause est commune (service ou réseau), pas 40 PC distincts. Vérifiez d’abord la cause commune.' } },
    { id: 'INC-4102', t: { en: 'Second monitor flickers', fr: 'Le second écran scintille' },
      b: { en: '“My second monitor flickers now and then. I can still work fine.”', fr: '« Mon second écran scintille de temps en temps. Je peux toujours travailler. »' },
      f: { en: [['People affected', '1'], ['Workaround', 'Yes']], fr: [['Personnes touchées', '1'], ['Contournement', 'Oui']] }, p: 4,
      o: { en: ['Try another cable or port and update the graphics driver', 'Order a replacement laptop', 'Raise it as a critical incident'], fr: ['Essayer un autre câble ou port et mettre à jour le pilote graphique', 'Commander un portable de remplacement', 'La déclarer comme incident critique'] },
      w: { en: 'One person, still working: low impact and low urgency. Start with the cheap fixes (cable, port, driver).', fr: 'Une personne, qui peut travailler : impact et urgence faibles. Commencez par les corrections simples (câble, port, pilote).' } },
    { id: 'INC-4103', t: { en: 'Odd message on a finance PC, files renamed', fr: 'Message étrange sur un PC de la compta, fichiers renommés' },
      b: { en: '“A message says my files are locked and I must pay. All my documents have a strange ending.”', fr: '« Un message dit que mes fichiers sont verrouillés et que je dois payer. Tous mes documents ont une extension bizarre. »' },
      f: { en: [['People affected', '1 (so far)'], ['Type', 'Possible security incident']], fr: [['Personnes touchées', '1 (pour l’instant)'], ['Type', 'Incident de sécurité possible']] }, p: 1,
      o: { en: ['Isolate the device from the network and escalate to security', 'Restart the PC to see if it clears', 'Restore the files from the recycle bin'], fr: ['Isoler l’appareil du réseau et escalader à la sécurité', 'Redémarrer le PC pour voir si cela disparaît', 'Restaurer les fichiers depuis la corbeille'] },
      w: { en: 'A possible ransomware infection can spread. Contain it first by disconnecting the device, then escalate. Security incidents start at critical.', fr: 'Un rançongiciel possible peut se propager. Contenez-le d’abord en déconnectant l’appareil, puis escaladez. Un incident de sécurité démarre en critique.' } },
    { id: 'INC-4104', t: { en: 'New starter on Monday', fr: 'Nouvel arrivant lundi' },
      b: { en: '“A new colleague starts on Monday and will need an account and a laptop.”', fr: '« Une nouvelle collègue arrive lundi et aura besoin d’un compte et d’un portable. »' },
      f: { en: [['Needed by', 'Monday (3 days)'], ['Type', 'Planned request']], fr: [['Pour le', 'Lundi (3 jours)'], ['Type', 'Demande planifiée']] }, p: 3,
      o: { en: ['Follow the onboarding checklist: create the account, assign licences, prepare the laptop', 'Wait until Monday morning', 'Share an existing account for the first week'], fr: ['Suivre la liste d’accueil : créer le compte, attribuer les licences, préparer le portable', 'Attendre lundi matin', 'Partager un compte existant la première semaine'] },
      w: { en: 'A planned request with a clear deadline. It matters, but nothing is broken. Work to the checklist and never share accounts.', fr: 'Demande planifiée avec une échéance claire. Elle compte, mais rien n’est en panne. Suivez la liste et ne partagez jamais de compte.' } },
    { id: 'INC-4105', t: { en: 'I entered my password on a strange page', fr: 'J’ai saisi mon mot de passe sur une page étrange' },
      b: { en: '“I clicked a link in an email and typed my password into the page. Now I think it was fake.”', fr: '« J’ai cliqué sur un lien dans un e-mail et saisi mon mot de passe. Je pense maintenant que c’était un faux. »' },
      f: { en: [['People affected', '1'], ['Risk', 'Password may be stolen']], fr: [['Personnes touchées', '1'], ['Risque', 'Mot de passe peut-être volé']] }, p: 2,
      o: { en: ['Reset the password, revoke sessions, check sign-ins and inbox rules, report it', 'Tell the user to ignore it', 'Delete the email and close the ticket'], fr: ['Réinitialiser le mot de passe, révoquer les sessions, vérifier connexions et règles de boîte, le signaler', 'Dire à l’utilisateur d’ignorer', 'Supprimer l’e-mail et clore le ticket'] },
      w: { en: 'One account, but attackers move fast once they have a password. High priority: reset, revoke sessions, and look for forwarding rules.', fr: 'Un seul compte, mais les attaquants agissent vite avec un mot de passe. Priorité élevée : réinitialiser, révoquer les sessions et chercher des règles de transfert.' } },
    { id: 'INC-4106', t: { en: 'One of three printers is jammed', fr: 'Une imprimante sur trois est bloquée' },
      b: { en: '“The 3rd floor printer keeps jamming. The other two printers work.”', fr: '« L’imprimante du 3e étage se bloque sans cesse. Les deux autres fonctionnent. »' },
      f: { en: [['People affected', 'A few'], ['Workaround', 'Use another printer']], fr: [['Personnes touchées', 'Quelques-unes'], ['Contournement', 'Utiliser une autre imprimante']] }, p: 4,
      o: { en: ['Point users to a working printer and schedule a site visit', 'Replace the printer today', 'Treat it as a critical incident'], fr: ['Orienter les utilisateurs vers une imprimante qui marche et planifier une visite', 'Remplacer l’imprimante aujourd’hui', 'La traiter comme un incident critique'] },
      w: { en: 'There is a good workaround, so urgency is low. Keep people working, then fix it at a sensible time.', fr: 'Un bon contournement existe : l’urgence est faible. Gardez les gens productifs puis réparez au bon moment.' } },
    { id: 'INC-4107', t: { en: 'Payroll system down before cut-off', fr: 'Système de paie en panne avant l’échéance' },
      b: { en: '“The payroll system will not load. The bank file must be sent in 2 hours or everyone is paid late.”', fr: '« Le système de paie ne se charge pas. Le fichier bancaire doit partir dans 2 heures sinon tout le monde est payé en retard. »' },
      f: { en: [['People affected', 'All staff'], ['Deadline', '2 hours']], fr: [['Personnes touchées', 'Tout le personnel'], ['Échéance', '2 heures']] }, p: 1,
      o: { en: ['Escalate to the system owner now and check the service and recent changes', 'Ask Finance to try again tomorrow', 'Add it to the weekly maintenance list'], fr: ['Escalader tout de suite au responsable du système et vérifier le service et les changements récents', 'Demander à la compta de réessayer demain', 'L’ajouter à la liste de maintenance hebdomadaire'] },
      w: { en: 'High impact (everyone is paid late) and a hard deadline. That is critical. Get the owner involved immediately.', fr: 'Fort impact (tout le monde payé en retard) et échéance ferme : c’est critique. Impliquez le responsable immédiatement.' } },
    { id: 'INC-4108', t: { en: 'Access to a shared mailbox', fr: 'Accès à une boîte partagée' },
      b: { en: '“Can I get access to the projects@ shared mailbox? I started on that project this week.”', fr: '« Puis-je avoir accès à la boîte partagée projets@ ? J’ai commencé sur ce projet cette semaine. »' },
      f: { en: [['People affected', '1'], ['Type', 'Access request']], fr: [['Personnes touchées', '1'], ['Type', 'Demande d’accès']] }, p: 3,
      o: { en: ['Get approval from the mailbox owner or manager, then grant access', 'Make the user a Global Administrator', 'Send them the mailbox password'], fr: ['Obtenir l’accord du propriétaire ou du manager, puis accorder l’accès', 'Faire de l’utilisateur un administrateur général', 'Lui envoyer le mot de passe de la boîte'] },
      w: { en: 'A normal request. Follow least privilege: approval first, then the minimum permission. Never share passwords or hand out admin roles.', fr: 'Demande ordinaire. Appliquez le moindre privilège : accord d’abord, puis permission minimale. Jamais de mot de passe partagé ni de rôle admin.' } },
    { id: 'INC-4109', t: { en: 'Battery drains very fast', fr: 'La batterie se vide très vite' },
      b: { en: '“My laptop battery now lasts 2 hours instead of 8. I can work at my desk with the charger.”', fr: '« La batterie de mon portable tient 2 heures au lieu de 8. Je peux travailler au bureau avec le chargeur. »' },
      f: { en: [['People affected', '1'], ['Workaround', 'Use the charger']], fr: [['Personnes touchées', '1'], ['Contournement', 'Utiliser le chargeur']] }, p: 3,
      o: { en: ['Run a battery health report, check power settings, and arrange a swap if it is worn', 'Wipe and reinstall Windows', 'Ignore it, batteries always do that'], fr: ['Lancer un rapport d’état de la batterie, vérifier l’alimentation, et prévoir un échange si elle est usée', 'Effacer et réinstaller Windows', 'Ignorer, les batteries font toujours ça'] },
      w: { en: 'One user, working with a workaround. Medium-low, but it should be fixed. Gather evidence before replacing hardware.', fr: 'Un utilisateur, qui travaille avec un contournement. Priorité moyenne à faible, mais à corriger. Rassemblez des preuves avant de remplacer le matériel.' } },
    { id: 'INC-4110', t: { en: 'MFA prompts not arriving for the sales team', fr: 'Les demandes MFA n’arrivent plus à l’équipe commerciale' },
      b: { en: '“Since this morning five of us never get the sign-in approval prompt, so we cannot log in.”', fr: '« Depuis ce matin, cinq d’entre nous ne reçoivent plus la demande d’approbation, donc nous ne pouvons pas nous connecter. »' },
      f: { en: [['People affected', '5 (sales team)'], ['Can they work?', 'No']], fr: [['Personnes touchées', '5 (équipe commerciale)'], ['Peuvent-ils travailler ?', 'Non']] }, p: 2,
      o: { en: ['Check sign-in logs and authentication methods for a common cause, and the service health', 'Turn MFA off for the whole company', 'Tell them to wait and try again later'], fr: ['Vérifier les journaux de connexion et les méthodes d’authentification pour une cause commune, ainsi que l’état du service', 'Désactiver la MFA pour toute l’entreprise', 'Leur dire d’attendre et de réessayer plus tard'] },
      w: { en: 'A small team is blocked from working: high priority. Look for the shared cause. Never weaken security for everyone to fix a few people.', fr: 'Une petite équipe ne peut pas travailler : priorité élevée. Cherchez la cause commune. N’affaiblissez jamais la sécurité de tous pour dépanner quelques-uns.' } }
  ];

  const N = 6;
  let G = null;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  function newGame() {
    G = { queue: shuffle(TICKETS).slice(0, N).map(t => ({ t, order: shuffle([0, 1, 2]) })), i: 0, score: 0, prio: null, step: null, done: false, last: null };
  }

  function render() {
    const u = UI[lg()];
    if (!G) {
      root.innerHTML = `<div class="tr-start"><p>${E(u.intro)}</p>
        <div class="tr-guide"><p class="ph-k">${E(u.matrix)}</p>${u.p.map((p, k) => `<p><span class="pill ${['s-bad', 's-wip', 's-done', 's-plan'][k]}">${E(p)}</span> ${E(u.pd[k])}</p>`).join('')}</div>
        <button class="btn primary" type="button" data-act="start">${E(u.start)}</button><p class="hd-ck">${E(u.note)}</p></div>`;
      return;
    }
    if (G.i >= N) {
      const max = N * 4, pct = G.score / max;
      const band = pct >= .85 ? 3 : pct >= .65 ? 2 : pct >= .4 ? 1 : 0;
      root.innerHTML = `<div class="tr-end"><p class="ph-k">${E(u.final)}</p>
        <p class="tr-big">${G.score}<small> ${E(u.outOf(max))}</small></p>
        <div class="dns-bar" role="img" aria-label="${G.score} / ${max}"><i style="width:${Math.round(pct * 100)}%"></i></div>
        <p>${E(u.r[band])}</p><button class="btn primary" type="button" data-act="start">${E(u.again)}</button></div>`;
      return;
    }
    const q = G.queue[G.i], T = q.t, l = lg();
    const opts = q.order.map(k => ({ k, text: T.o[l][k] }));
    const locked = G.done;
    root.innerHTML = `
      <div class="tr-top"><span class="ph-k">${E(u.of(G.i + 1, N))}</span><span class="ph-k">${E(u.score)}: <b>${G.score}</b></span></div>
      <article class="tr-ticket"><div class="tk-head"><span class="tk-id">#${E(T.id)}</span></div>
        <h4>${E(T.t[l])}</h4><p class="tr-msg">${E(T.b[l])}</p>
        <dl class="tk-grid tr-facts">${T.f[l].map(f => `<div><dt>${E(f[0])}</dt><dd>${E(f[1])}</dd></div>`).join('')}</dl></article>
      <fieldset class="tr-q" ${locked ? 'disabled' : ''}><legend class="ph-k">1. ${E(u.prio)}</legend>
        <div class="tr-prios">${u.p.map((p, k) => `<label class="tr-prio${G.prio === k + 1 ? ' on' : ''}${locked && T.p === k + 1 ? ' right' : ''}${locked && G.prio === k + 1 && G.prio !== T.p ? ' wrong' : ''}"><input type="radio" name="trp" value="${k + 1}" ${G.prio === k + 1 ? 'checked' : ''}><b>${E(p)}</b><span>${E(u.pd[k])}</span></label>`).join('')}</div></fieldset>
      <fieldset class="tr-q" ${locked ? 'disabled' : ''}><legend class="ph-k">2. ${E(u.step)}</legend>
        <div class="tr-opts">${opts.map(o => `<label class="tr-opt${G.step === o.k ? ' on' : ''}${locked && o.k === 0 ? ' right' : ''}${locked && G.step === o.k && o.k !== 0 ? ' wrong' : ''}"><input type="radio" name="trs" value="${o.k}" ${G.step === o.k ? 'checked' : ''}><span>${E(o.text)}</span></label>`).join('')}</div></fieldset>
      ${locked ? `<div class="tr-fb"><p><b>${E(G.last.pp === 2 ? u.right : G.last.pp === 1 ? u.off : u.off)}.</b> ${E(u.p[T.p - 1])} · ${E(u.pts(G.last.pts))}</p><p>${E(T.w[l])}</p></div>
        <button class="btn primary" type="button" data-act="next">${E(G.i + 1 >= N ? u.finish : u.next)}</button>`
        : `<button class="btn primary" type="button" data-act="check">${E(u.check)}</button><p class="hd-ck tr-req" hidden>${E(u.req)}</p>`}`;
  }

  root.addEventListener('change', e => {
    if (!G || G.done) return;
    if (e.target.name === 'trp') G.prio = +e.target.value;
    if (e.target.name === 'trs') G.step = +e.target.value;
    root.querySelectorAll('.tr-prio').forEach(x => x.classList.toggle('on', x.querySelector('input').checked));
    root.querySelectorAll('.tr-opt').forEach(x => x.classList.toggle('on', x.querySelector('input').checked));
  });
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const a = b.dataset.act;
    if (a === 'start') { newGame(); render(); root.querySelector('.tr-ticket')?.scrollIntoView({ block: 'nearest' }); }
    else if (a === 'check') {
      if (G.prio === null || G.step === null) { root.querySelector('.tr-req').hidden = false; return; }
      const T = G.queue[G.i].t;
      const pp = G.prio === T.p ? 2 : Math.abs(G.prio - T.p) === 1 ? 1 : 0;
      const sp = G.step === 0 ? 2 : 0;
      G.score += pp + sp; G.done = true; G.last = { pp, pts: pp + sp };
      render();
    } else if (a === 'next') { G.i++; G.prio = null; G.step = null; G.done = false; G.last = null; render(); }
  });
  document.addEventListener('langchange', render);
  render();
})();
