/* =====================================================================
   interactions.js — enhanced UX layer
   Custom cursor · magnetic buttons · scroll reveal ·
   typewriter headline · security event log
   ===================================================================== */

(function(){
'use strict';

/* ── 1. Custom cursor (dot + lagged ring) ────────────────────────── */
function initCursor(){
  if(window.matchMedia('(hover:none)').matches) return;
  const dot  = Object.assign(document.createElement('div'),{className:'c-dot'});
  const ring = Object.assign(document.createElement('div'),{className:'c-ring'});
  document.body.append(dot,ring);
  let mx=0,my=0,rx=0,ry=0,visible=false;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    if(!visible){ dot.style.opacity=ring.style.opacity='1'; visible=true; }
  });
  document.addEventListener('mouseleave',()=>{ dot.style.opacity=ring.style.opacity='0'; visible=false; });
  let pressed=false;
  document.addEventListener('mousedown',()=>{ pressed=true;  ring.classList.add('pressed'); });
  document.addEventListener('mouseup',  ()=>{ pressed=false; ring.classList.remove('pressed'); });
  // hover state on interactive elements
  const INT='a,button,[role="button"],input,textarea,select,[tabindex]';
  document.addEventListener('mouseover',e=>{
    if(e.target.closest(INT)){ dot.classList.add('hover'); ring.classList.add('hover'); }
  });
  document.addEventListener('mouseout',e=>{
    if(e.target.closest(INT)){ dot.classList.remove('hover'); ring.classList.remove('hover'); }
  });
  function raf(){
    rx+=(mx-rx)*0.11; ry+=(my-ry)*0.11;
    dot.style.transform =`translate(${mx}px,${my}px)`;
    ring.style.transform=`translate(${rx}px,${ry}px)`;
    requestAnimationFrame(raf);
  }
  raf();
}

/* ── 2. Magnetic buttons ─────────────────────────────────────────── */
function initMagnetic(){
  if(window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.btn.primary').forEach(btn=>{
    let ox=0,oy=0;
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const dx=e.clientX-(r.left+r.width/2);
      const dy=e.clientY-(r.top+r.height/2);
      ox=dx*0.28; oy=dy*0.28;
      btn.style.transform=`translate(${ox}px,${oy}px)`;
    });
    btn.addEventListener('mouseleave',()=>{
      btn.style.transform='';
    });
  });
}

/* ── 3. Scroll reveal ────────────────────────────────────────────── */
function initReveal(){
  const TARGETS='.fact,.entry,.pcard,.sk-card,.cert-card,.ln-card,.dm-row,.channel';
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        var t=e.target; t.classList.add('revealed'); obs.unobserve(t);
        // once it has settled, hand the element back to its own hover transitions
        setTimeout(function(){ t.classList.remove('reveal','revealed'); t.style.removeProperty('--reveal-delay'); }, 1300);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  // Stagger siblings
  document.querySelectorAll(TARGETS).forEach((el,i)=>{
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay',`${Math.min(i%4*60,180)}ms`);
    obs.observe(el);
  });
}

/* ── 4. Typewriter headline ─────────────────────────────────────── */
function initTypewriter(){
  const el=document.getElementById('typewriter');
  if(!el) return;
  const lang=document.documentElement.lang.startsWith('fr')?'fr':'en';
  const raw=(lang==='fr'?el.dataset.phrasesFr:el.dataset.phrasesEn)||'';
  const phrases=raw.split('|').filter(Boolean);
  if(!phrases.length) return;
  // Build caret
  const caret=document.createElement('span');
  caret.className='tw-caret';
  el.after(caret);
  let pi=0,ci=0,deleting=false,waiting=false;
  function tick(){
    if(waiting) return;
    const phrase=phrases[pi];
    if(!deleting){
      ci++;
      el.textContent=phrase.slice(0,ci);
      if(ci===phrase.length){ waiting=true; setTimeout(()=>{waiting=false;deleting=true;tick();},2400); return; }
      setTimeout(tick,75+Math.random()*40);
    } else {
      ci--;
      el.textContent=phrase.slice(0,ci);
      if(ci===0){ deleting=false; pi=(pi+1)%phrases.length; setTimeout(tick,400); return; }
      setTimeout(tick,40+Math.random()*20);
    }
  }
  // Small delay so page is ready
  setTimeout(tick,900);
  // Re-run on language switch
  document.addEventListener('langchange',()=>{
    const lng=document.documentElement.lang.startsWith('fr')?'fr':'en';
    const r2=(lng==='fr'?el.dataset.phrasesFr:el.dataset.phrasesEn)||'';
    const p2=r2.split('|').filter(Boolean);
    if(!p2.length) return;
    Object.assign({},phrases); // just reassign below
    phrases.length=0; p2.forEach(p=>phrases.push(p));
    pi=0; ci=0; deleting=false; waiting=false;
    el.textContent='';
    setTimeout(tick,400);
  });
}

/* ── 5. Security event log ──────────────────────────────────────── */
const SEC_EVENTS=[
  {level:'ok',  tag:'AUTH', msg:'Session authenticated · zaafir@portfolio'},
  {level:'ok',  tag:'TLS',  msg:'Certificate valid · 364d remaining'},
  {level:'warn',tag:'SCAN', msg:'Port scan detected · 185.220.x.x blocked'},
  {level:'ok',  tag:'2FA',  msg:'TOTP verified · MFA enforced'},
  {level:'ok',  tag:'SPF',  msg:'zinathsolutions.com · pass'},
  {level:'ok',  tag:'DKIM', msg:'Signature valid · RSA-2048'},
  {level:'ok',  tag:'FW',   msg:'Ruleset updated · 847 active rules'},
  {level:'info',tag:'SIEM', msg:'Low: 1 failed login attempt (1/5)'},
  {level:'ok',  tag:'MDM',  msg:'Intune compliance · all devices pass'},
  {level:'warn',tag:'ALERT',msg:'Unusual sign-in · new location flagged'},
  {level:'ok',  tag:'ENTRA',msg:'Conditional Access policy applied'},
  {level:'ok',  tag:'CERT', msg:'Azure AI-900 verified · on file'},
  {level:'ok',  tag:'DNS',  msg:'DNSSEC validation · passed'},
  {level:'info',tag:'PATCH',msg:'7 updates pending · scheduled 02:00'},
  {level:'ok',  tag:'AAD',  msg:'MFA registration · 100% users'},
  {level:'warn',tag:'IDS',  msg:'Anomaly detected · quarantined'},
  {level:'ok',  tag:'DMARC',msg:'Policy: reject · 0 leaks (30d)'},
];
let secIdx=0;
function initSecLog(){
  const wrap=document.getElementById('logLines');
  if(!wrap) return;
  function ts(){
    const n=new Date();
    return[n.getHours(),n.getMinutes(),n.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':');
  }
  function addLine(){
    const MAX=12;
    if(wrap.children.length>=MAX) wrap.firstElementChild.remove();
    const ev=SEC_EVENTS[secIdx++ % SEC_EVENTS.length];
    const line=document.createElement('div');
    line.className=`log-line log-${ev.level}`;
    line.innerHTML=`<span class="log-ts">${ts()}</span><span class="log-tag log-tag-${ev.level}">${ev.tag}</span><span class="log-msg">${ev.msg}</span>`;
    wrap.appendChild(line);
    // micro-flash animation
    line.style.animation='logIn .25s ease both';
    wrap.scrollTop=wrap.scrollHeight;
  }
  // Seed with initial entries at staggered mock times
  const SEED=[0,1,4,6,8,9,10,12];
  SEED.forEach(i=>{
    const ev=SEC_EVENTS[i];
    const offset=SEED.indexOf(i);
    const fake=new Date(Date.now()-(SEED.length-offset)*18000);
    const fts=[fake.getHours(),fake.getMinutes(),fake.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':');
    const line=document.createElement('div');
    line.className=`log-line log-${ev.level}`;
    line.innerHTML=`<span class="log-ts">${fts}</span><span class="log-tag log-tag-${ev.level}">${ev.tag}</span><span class="log-msg">${ev.msg}</span>`;
    wrap.appendChild(line);
  });
  secIdx=13;
  setInterval(addLine,3200+Math.random()*800);
}

/* ── 6. Availability badge pulse ────────────────────────────────── */
function initAvailBadge(){
  document.querySelectorAll('.badge.live').forEach(b=>{
    if(b.querySelector('.avail-dot')) return;
    const dot=document.createElement('span');
    dot.className='avail-dot';
    b.prepend(dot);
  });
}

/* ── 7. Tech stack strip (if it exists) ─────────────────────────── */
function initTechStrip(){
  const wrap=document.getElementById('techStrip');
  if(!wrap) return;
  // Already rendered in HTML; just ensure no-JS fallback works
}

/* ── Init ────────────────────────────────────────────────────────── */
function init(){
  initCursor();
  initMagnetic();
  initReveal();
  initTypewriter();
  initSecLog();
  initAvailBadge();
  initTechStrip();
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
} else {
  init();
}

})();
