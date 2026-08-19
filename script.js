
document.querySelectorAll('.faq-list button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel=btn.nextElementSibling;
    const open=panel.classList.contains('open');
    document.querySelectorAll('.faq-list div').forEach(x=>x.classList.remove('open'));
    document.querySelectorAll('.faq-list button b').forEach(x=>x.textContent='+');
    if(!open){panel.classList.add('open');btn.querySelector('b').textContent='−';}
  });
});
