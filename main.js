/* ================================================================
   PROJECTS
   To add a project, copy one { ... } block and edit it.
   status: "done" (Completed) | "wip" (In progress) | "plan" (Planned)
   cat:    must match one of the CATS names below
   page:   optional link to a write-up, e.g. "projects/linux-lab.html"
   ================================================================ */
const PROJECTS = [
  {title:"Cybersecurity assessment preparation", cat:"Cybersecurity", status:"wip", kind:"Work · anonymised",
   desc:"Helped prepare and track an Aramco CCC (Cybersecurity Compliance Certificate) assessment for a client: organising controls, coordinating tasks and tracking supporting evidence.",
   tags:["Evidence tracking","Microsoft 365","Azure","Documentation"]},
  {title:"Email security and DMARC analysis", cat:"Cybersecurity", status:"plan", kind:"Personal project",
   desc:"Explain SPF, DKIM and DMARC, review the DNS records of a domain I'm authorised to assess, report common misconfigurations, and optionally build a Python checker.",
   tags:["DNS","SPF","DKIM","DMARC","Python"]},
  {title:"Business process automation", cat:"AI & Automation", status:"plan", kind:"Personal project",
   desc:"A request workflow that validates input, routes for approval, sends notifications, records the outcome and handles failures. Documented before and after, with test cases.",
   tags:["Power Automate","Python","Approvals"]},
  {title:"Entra ID identity lab", cat:"Cloud & Microsoft", status:"plan", kind:"Personal project",
   desc:"A test-tenant lab covering users and groups, role assignments, access control and Conditional Access concepts, noting which features need specific licensing.",
   tags:["Entra ID","Conditional Access","RBAC"]},
  {title:"IT operations dashboard", cat:"Data & Programming", status:"plan", kind:"Personal project",
   desc:"A dashboard built on synthetic service desk data showing ticket volume, categories, resolution times, backlog and recurring issues, with notes on what it tells an IT team.",
   tags:["Excel","Data visualisation"]},
  {title:"Linux security lab", cat:"IT & Infrastructure", status:"plan", kind:"Personal project",
   desc:"An Ubuntu virtual lab for user and permission management, log investigation, services, basic hardening and a simulated incident, with the commands and reasoning documented.",
   tags:["Ubuntu","Linux","Logs","Hardening"]},
];
const STATUS = {done:["Completed","s-done"], wip:["In progress","s-wip"], plan:["Planned","s-plan"]};
const CATS = ["All","IT & Infrastructure","Cybersecurity","Cloud & Microsoft","AI & Automation","Data & Programming"];
const plist = document.getElementById('plist'), filters = document.getElementById('filters');
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function render(cat){
  const items = PROJECTS.filter(p => cat==="All" || p.cat===cat);
  plist.innerHTML = items.length ? items.map(p => `
    <article class="proj">
      <div><div class="cat">${esc(p.cat)} · ${esc(p.kind)}</div><h3>${p.page ? `<a href="${esc(p.page)}">${esc(p.title)} →</a>` : esc(p.title)}</h3></div>
      <div class="right"><span class="pill ${STATUS[p.status][1]}">${STATUS[p.status][0]}</span></div>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    </article>`).join('') : '<p class="note">No projects in this category yet.</p>';
}
filters.innerHTML = CATS.map((c,i)=>`<button class="filter" type="button" aria-pressed="${i===0}">${esc(c)}</button>`).join('');
filters.addEventListener('click', e => {
  const b = e.target.closest('.filter'); if(!b) return;
  filters.querySelectorAll('.filter').forEach(x => x.setAttribute('aria-pressed', x===b));
  render(b.textContent);
});
render("All");

/* ================================================================
   SKILLS
   w = professional experience, s = studied (BTEC), l = currently learning
   ================================================================ */
const SKILLS = {
  "IT support and operations":[["Technical troubleshooting","w"],["User support","w"],["Microsoft 365 support","w"],["IT documentation","w"],["Service desk processes","w"],["Windows environments","w"]],
  "Microsoft and cloud":[["Microsoft 365","w"],["Entra ID","w"],["Identity and access concepts","w"],["Intune","w"],["Defender","w"],["Conditional Access concepts","w"],["Device configuration","w"],["Azure fundamentals","l"]],
  "Cybersecurity":[["SPF, DKIM and DMARC","w"],["Email authentication","w"],["Cyber Essentials concepts","w"],["Identity and access security","w"],["Security assessment support","w"],["Linux fundamentals","l"]],
  "Programming and automation":[["Python fundamentals","s"],["HTML and CSS","s"],["Power Automate","l"],["APIs and integration","l"],["Low-code and no-code","l"]],
  "Data and productivity":[["Microsoft Excel","w"],["Data organisation and reporting","w"],["Process documentation","w"],["Spreadsheet modelling","s"],["Microsoft Access","s"]],
  "Web and design":[["Wix","w"],["HTML web development","s"],["Adobe Photoshop","s"],["Adobe Illustrator","s"],["Autodesk Maya","s"]],
};
document.getElementById('sk').innerHTML = Object.entries(SKILLS).map(([g,list]) =>
  `<div><h3>${esc(g)}</h3><div class="chips">${list.map(([n,t])=>`<span class="c ${t}">${esc(n)}</span>`).join('')}</div></div>`).join('');

/* Copy email button */
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
  const text = b.dataset.copy;
  try { await navigator.clipboard.writeText(text); b.textContent = 'Copied'; }
  catch (e) { b.textContent = 'Select and copy'; }
  setTimeout(() => b.textContent = 'Copy', 1600);
}));
