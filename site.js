const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.links');
if(btn&&links){
  btn.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
(function(){
  const body=document.body;
  const light=document.getElementById('lightMode');
  const dark=document.getElementById('darkMode');
  const KEY='azstd-theme';

  function applyTheme(theme, save=true){
    const isDark=theme==='dark';
    body.classList.toggle('dark',isDark);
    body.dataset.theme=isDark?'dark':'light';
    if(light){
      light.classList.toggle('active',!isDark);
      light.setAttribute('aria-pressed',String(!isDark));
    }
    if(dark){
      dark.classList.toggle('active',isDark);
      dark.setAttribute('aria-pressed',String(isDark));
    }
    if(save) localStorage.setItem(KEY,isDark?'dark':'light');
  }

  let saved=null;
  try{ saved=localStorage.getItem(KEY); }catch(e){}
  const preferred=saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  applyTheme(preferred,false);

  light?.addEventListener('click',()=>applyTheme('light'));
  dark?.addEventListener('click',()=>applyTheme('dark'));

  if(!saved && window.matchMedia){
    const mq=window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change',e=>applyTheme(e.matches?'dark':'light',false));
  }
})();
