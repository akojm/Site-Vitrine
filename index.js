   /*animation scroll*/
// Cibler mes éléments du DOM //
var titre = document.querySelector('.titre-site');
var slogan = document.querySelector('.slogan');
var navBar = document.querySelector('.navBar');
var arrow = document.querySelector('.arrow-scroll');
var navResp = document.getElementById('nav-resp');
var titreWeb = document.querySelector('.items-titre-web');
var rotateMenu = document.getElementById('menu-hamburger');
var hamburgerButton = document.querySelector('.nav-toggle');
var btnOpenMenuHamburger = document.querySelector('.menu-items')
var openMenuBurger = document.getElementById('burger-nav');
var menuResp = document.querySelector('.menu-responsive') ;
var overlayHead = document.querySelector('.overlayHead');



//* Event Title & Slogan *//
titre.addEventListener('mouseover', ()=>{
   titre.classList.toggle('showTitle');
   slogan.classList.toggle('showSlogan')
})

//* Event scroll *//

window.addEventListener('scroll', ()=>{
    if (scrollY >50) {
       navBar.classList.add('fixedNav');
    }else{
        navBar.classList.remove('fixedNav');
 
    }
})
window.addEventListener('scroll', ()=>{
    if (scrollY >50 ) {
       navResp.classList.add('fixeNavResponsive');
    }else{
        navResp.classList.remove('fixeNavResponsive') 
 
    }
})
window.addEventListener('scroll', ()=>{
   if (scrollY > 800) {
    arrow.classList.add('show')
   }else(
    arrow.classList.remove('show')
   )
   
})
window.addEventListener('scroll', ()=>{
    if (scrollY > 230) {
        titreWeb.classList.add('visibility')
    } else {
        titreWeb.classList.remove('visibility')
 
    }
 })
//* Event click *//
arrow.addEventListener('click', ()=>{
    window.scrollTo(0,0)
 })


 //**  Function **//

hamburgerButton.addEventListener('click', ()=>{
    //hamburgerButton.classList.toggle('active');
    openMenuBurger.classList.toggle('showBurger');
    btnOpenMenuHamburger.classList.toggle('active');
    overlayHead.classList.add('showOverlayHead')

})







