let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
const fleche = document.querySelector('.fa-arrow-up');
const flecheversbas = document.querySelector('.fa-arrow-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    fleche.classList.add('scroll');
  } else {
    fleche.classList.remove('scroll');
  }
});

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
  if(body.classList.contains('open')) {
    // Empêche le défilement en ajoutant 'overflow: hidden' au body
    document.body.style.overflow = 'hidden';
  } else {
    // Réactive le défilement en supprimant 'overflow: hidden' du body
    document.body.style.overflow = '';
  }
});

fleche.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

flecheversbas.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

