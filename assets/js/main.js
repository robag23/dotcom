
const brandMenu=document.getElementById('brandMenu');
const menuOpen=document.querySelector('[data-menu-open]');
const menuClose=[...document.querySelectorAll('[data-menu-close]')];
function openBrandMenu(){if(!brandMenu)return;brandMenu.classList.add('open');brandMenu.setAttribute('aria-hidden','false');menuOpen?.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'}
function closeBrandMenu(){if(!brandMenu)return;brandMenu.classList.remove('open');brandMenu.setAttribute('aria-hidden','true');menuOpen?.setAttribute('aria-expanded','false');document.body.style.overflow=''}
menuOpen?.addEventListener('click',openBrandMenu);
menuClose.forEach(el=>el.addEventListener('click',closeBrandMenu));
brandMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeBrandMenu));

const modal=document.getElementById('detailModal');let cards=[...document.querySelectorAll('.story-card[data-title]')],current=0;
function openCard(i){current=i;let c=cards[i];document.getElementById('modalSection').textContent=c.dataset.section||'';document.getElementById('modalTitle').textContent=c.dataset.title||'';document.getElementById('modalBody').innerHTML=c.querySelector('.detail').innerHTML;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
cards.forEach((c,i)=>c.addEventListener('click',e=>{if(e.target.closest('a'))return;openCard(i)}));
document.querySelectorAll('[data-close-modal]').forEach(x=>x.onclick=()=>{modal.classList.remove('open');document.body.style.overflow=''});if(document.getElementById('prevModal'))document.getElementById('prevModal').onclick=()=>openCard((current-1+cards.length)%cards.length);if(document.getElementById('nextModal'))document.getElementById('nextModal').onclick=()=>openCard((current+1)%cards.length);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBrandMenu();if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}document.body.style.overflow=''}});
