
document.querySelectorAll('.faq-list button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel=btn.nextElementSibling;
    const open=panel.classList.contains('open');
    document.querySelectorAll('.faq-list div').forEach(x=>x.classList.remove('open'));
    document.querySelectorAll('.faq-list button b').forEach(x=>x.textContent='+');
    if(!open){panel.classList.add('open');btn.querySelector('b').textContent='−';}
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.site-header nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');

    const isOpen = mobileNav.classList.contains('open');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}
const launchForm = document.getElementById("launch-form");
const successMessage = document.getElementById("form-success");
const errorMessage = document.getElementById("form-error");

if (launchForm) {
  launchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    const formData = new FormData(launchForm);

    try {
      const response = await fetch(launchForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        launchForm.reset();
        successMessage.style.display = "block";
      } else {
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.style.display = "block";
    }
  });
}
