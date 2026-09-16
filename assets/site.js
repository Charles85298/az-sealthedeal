
const btn=document.querySelector('.menu-btn'), links=document.querySelector('.links');
if(btn&&links) btn.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const msg=f.querySelector('.form-msg');
  if(msg) msg.textContent='Thank you. Your request has been captured for this website demo.';
}));
