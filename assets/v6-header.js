(()=>{
 const toggle=document.querySelector('.v6-toggle'); const drawer=document.getElementById('v6Drawer');
 if(toggle&&drawer){const close=()=>{drawer.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow=''};
 toggle.addEventListener('click',()=>{const o=!drawer.classList.contains('open');drawer.classList.toggle('open',o);toggle.setAttribute('aria-expanded',String(o));document.body.style.overflow=o?'hidden':''});
 drawer.querySelector('.v6-drawer-backdrop')?.addEventListener('click',close);drawer.querySelectorAll('a,.v6-ai').forEach(x=>x.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
 const themeOld=document.getElementById('theme'); const themeNew=document.getElementById('v6Theme');
 if(themeNew){themeNew.addEventListener('click',()=>{if(themeOld) themeOld.click(); else {document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark')}})}
 if(document.body.dataset.v6Page==='home'){
  const links=[...document.querySelectorAll('.v6-nav a[data-section],.v6-mobile-nav a[data-section]')];
  const sections=['home','journey','projects'].map(id=>document.getElementById(id)).filter(Boolean);
  if(sections.length){const set=id=>links.forEach(a=>{const on=a.dataset.section===id;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  const obs=new IntersectionObserver(es=>{const v=es.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(v)set(v.target.id)},{rootMargin:'-25% 0px -55%',threshold:[.05,.2,.5]});sections.forEach(s=>obs.observe(s));}
 }
})();