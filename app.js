let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
const fleche = document.querySelector('.fa-arrow-up');
console.log(fleche);

window.addEventListener('scroll',()=>{
 if(window.scrollY> 500){
     fleche.classList.add('scroll');
 }
 else{
     fleche.classList.remove('scroll');
 }
    
});
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
