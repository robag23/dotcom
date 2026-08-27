
document.addEventListener('DOMContentLoaded', function () {
  const brandMenu = document.getElementById('brandMenu');
  const menuOpen = document.querySelector('[data-menu-open]');
  const menuClose = document.querySelectorAll('[data-menu-close]');

  function openBrandMenu() {
    if (!brandMenu) return;
    brandMenu.classList.add('open');
    brandMenu.setAttribute('aria-hidden','false');
    if (menuOpen) menuOpen.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-open');
  }
  function closeBrandMenu() {
    if (!brandMenu) return;
    brandMenu.classList.remove('open');
    brandMenu.setAttribute('aria-hidden','true');
    if (menuOpen) menuOpen.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }

  if (menuOpen) menuOpen.addEventListener('click', function(e){ e.preventDefault(); openBrandMenu(); });
  menuClose.forEach(el => el.addEventListener('click', closeBrandMenu));
  if (brandMenu) brandMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeBrandMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBrandMenu(); });

  const modal = document.getElementById('detailModal');
  const cards = [...document.querySelectorAll('.story-card[data-title]')];
  let current = 0;
  function openCard(i){
    if (!modal || !cards[i]) return;
    current=i;
    const c=cards[i];
    const section=document.getElementById('modalSection');
    const title=document.getElementById('modalTitle');
    const body=document.getElementById('modalBody');
    if(section) section.textContent=c.dataset.section||'';
    if(title) title.textContent=c.dataset.title||'';
    const detail=c.querySelector('.detail');
    if(body && detail) body.innerHTML=detail.innerHTML;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  cards.forEach((c,i)=>c.addEventListener('click',e=>{if(e.target.closest('a'))return;openCard(i)}));
  document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',()=>{
    if(!modal)return; modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';
  }));
  const prev=document.getElementById('prevModal'), next=document.getElementById('nextModal');
  if(prev) prev.addEventListener('click',()=>openCard((current-1+cards.length)%cards.length));
  if(next) next.addEventListener('click',()=>openCard((current+1)%cards.length));
});

/* Research Journal tabs */
document.addEventListener('DOMContentLoaded',()=>{
  const views=[...document.querySelectorAll('[data-rj-view]')];
  if(!views.length)return;
  function showRJ(name){
    views.forEach(v=>{
      const active=v.dataset.rjView===name;
      if(active)v.removeAttribute('hidden');else v.setAttribute('hidden','');
    });
    const target=document.querySelector('[data-rj-view="'+name+'"]');
    if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
  }
  document.querySelectorAll('[data-rj-open]').forEach(b=>b.addEventListener('click',()=>showRJ(b.dataset.rjOpen)));
  document.querySelectorAll('[data-rj-home]').forEach(b=>b.addEventListener('click',()=>showRJ('home')));
});
