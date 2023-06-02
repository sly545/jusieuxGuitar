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
<<<<<<< HEAD
=======
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})
fleche.addEventListener('click',() =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})
flecheversbas.addEventListener('click',() =>{
    window.scrollTo({
        top:650,
        behavior: "smooth"
    })
})


>>>>>>> f8c49b146dfea0317fb3ad8fd5ac7d3e46baf1f9
