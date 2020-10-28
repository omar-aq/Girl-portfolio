const  navSlider = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');


   burger.addEventListener('click',()=>{
        //toggle
       nav.classList.toggle('nav-active');
       //links animation
       navLinks.forEach((link, index)=>{
           if(link.style.animation){
               link.style.animation = ''
           }else{
               link.style.animation = `navLinksFade 0.5s ease forwards ${index/5+0.5}s`;
           }
       });
       //burger animation
       burger.classList.toggle('toggle');
    });
}
navSlider();

const emailIcon = document.getElementById('email');

emailIcon.addEventListener('click',()=>{
    window.open('mailto:omar.1997aq@gmail.com');
})