const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
document.documentElement.classList.add('js-ready');
const progress = document.querySelector('.reading-progress');
let scrollQueued = false;
function updateProgress() { const distance = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${distance > 0 ? (scrollY / distance) * 100 : 0}%`; scrollQueued = false; }
addEventListener('scroll', () => { if (!scrollQueued) { requestAnimationFrame(updateProgress); scrollQueued = true; } }, { passive: true });
updateProgress();
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
const stages = [
  { name:'Collect', kicker:'Open the door to generosity', title:'Giving starts\non your terms.', copy:'Accept donations through campaigns, recurring giving and offline entries, across currencies and on your own domain. Every contribution feeds one record.', tags:['Your own domain','Recurring giving','Multiple currencies'], photo:'india-community.png', alt:'Illustrative Indian volunteers distributing educational supplies', start:'Contribution', end:'Verification' },
  { name:'Verify', kicker:'Confidence that carries forward', title:'Build trust into\nevery record.', copy:'Keep verification of organisations, documents and transactions within the platform, with reusable records that reduce repeated diligence.', tags:['Organisation checks','Document verification','Reusable records'], photo:'india-team.png', alt:'Illustrative Indian nonprofit team reviewing programme records', start:'Verification', end:'Disbursal' },
  { name:'Disburse', kicker:'Keep the money and context together', title:'Give funds a\nclear way forward.', copy:'Route funds to the right entity with supporting documents attached, and issue receipts when the money settles.', tags:['Entity routing','Attached documents','Settlement receipts'], photo:'india-community.png', alt:'Illustrative Indian volunteers distributing educational supplies', start:'Disbursal', end:'Outcome' },
  { name:'Prove', kicker:'Make the work visible', title:'See what the\nsupport made possible.', copy:'Connect programme outcomes to the contributions that supported them, giving donors and funders access to the evidence within the same system.', tags:['Outcome data','Donor visibility','Funder reporting'], photo:'india-learning.png', alt:'Illustrative Indian community learning scene with an educator and children', start:'Outcome', end:'Funder visibility' }
];
const tabs = [...document.querySelectorAll('[data-stage]')];
let currentStage = 0;
function setStage(index, focus = false) {
  currentStage = index; const stage = stages[index];
  tabs.forEach((tab,i) => { tab.setAttribute('aria-selected',String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  if(focus) tabs[index].focus();
  document.querySelector('#journey-panel').setAttribute('aria-labelledby', tabs[index].id);
  document.querySelector('#stage-title').textContent = stage.title;
  document.querySelector('#stage-title').style.whiteSpace = 'pre-line';
  document.querySelector('#stage-kicker').textContent = `${stage.name} / ${stage.kicker}`;
  document.querySelector('#stage-copy').textContent = stage.copy;
  document.querySelector('#stage-index').textContent = `0${index+1} / 04`;
  const img = document.querySelector('#stage-photo'); img.src = `assets/${stage.photo}`; img.alt = stage.alt;
  document.querySelector('#stage-tags').replaceChildren(...stage.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
  document.querySelector('#diagram-start').textContent = stage.start;
  document.querySelector('#diagram-end').textContent = stage.end;
  document.querySelector('.next-stage').firstChild.textContent = `Next: ${stages[(index+1)%4].name} `;
  if(!reducedMotion.matches) document.querySelector('.journey-content').animate([{opacity:.4,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'});
}
tabs.forEach((tab,index) => { tab.addEventListener('click', () => setStage(index)); tab.addEventListener('keydown',e => { let target; if(e.key === 'ArrowRight') target=(index+1)%4; if(e.key === 'ArrowLeft') target=(index+3)%4; if(e.key === 'Home') target=0; if(e.key === 'End') target=3; if(target !== undefined) {e.preventDefault();setStage(target,true);} }); });
document.querySelector('.next-stage').addEventListener('click', () => setStage((currentStage+1)%4));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed',String(b === button));}); let count=0; document.querySelectorAll('[data-category]').forEach(row => {row.hidden=button.dataset.filter !== 'all' && row.dataset.category !== button.dataset.filter;if(!row.hidden) count++;}); document.querySelector('.table-count').textContent = `Showing ${count} ${button.dataset.filter === 'all' ? 'platform' : button.dataset.filter} capabilities`; }));
const volume = document.querySelector('#volume');
const commission = document.querySelector('#commission');
function money(value) { return value >= 10000000 ? `Rs. ${Number((value/10000000).toFixed(2))} crore` : value >= 100000 ? `Rs. ${Number((value/100000).toFixed(2))} lakh` : `Rs. ${value.toLocaleString('en-IN')}`; }
function updateCalculator() { const annual = Number(volume.value), fee = Number(commission.value); document.querySelector('#volume-value').textContent = money(annual); volume.setAttribute('aria-valuetext', money(annual)); document.querySelector('#commission-value').textContent = `${fee}%`; commission.setAttribute('aria-valuetext',`${fee} percent`); document.querySelector('#savings').textContent = money(annual*fee/100); document.querySelector('#recovery-value').textContent = money(annual*.03); document.querySelector('#comparison-bar').style.width = `${fee/8*100}%`; }
volume.addEventListener('input',updateCalculator);commission.addEventListener('input',updateCalculator);updateCalculator();
const dialog = document.querySelector('#demo-dialog');
let dialogTrigger;
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {dialogTrigger=button;closeMenu();dialog.showModal();document.body.style.overflow='hidden';}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';dialogTrigger?.focus();});
document.querySelector('#demo-form').addEventListener('submit', e => { e.preventDefault(); const data = new FormData(e.target); const brief = `Ekhum walkthrough enquiry\n\nOrganisation: ${data.get('organisation')}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nInterest: ${data.get('interest')}\n\nPrepared locally. This enquiry has not been sent.`; const url = URL.createObjectURL(new Blob([brief],{type:'text/plain'})); const a = document.createElement('a');a.href=url;a.download='Ekhum-demo-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); document.querySelector('#form-status').textContent='Your brief has been downloaded. No information has been sent.'; });
