// show menu
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
//validate that variable exist
  if(toggle && nav){
    //we add the show-menu class to the div tag with the nav-menu class
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav__toggle','nav-menu');
//Remove-menu mobile
const navLink = document.querySelectorAll(".nav__links")
function linkAction(){
  const navMenu = document.getElementById("nav-menu")
  //when we click on the navlink we remove the show-menu class
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click",linkAction))

//scroll sections active link


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const navLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader(){
  const nav = document.getElementById('header')
  //when the scroll is greater than 200 viewport height, add the scroll-header class tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

//show scroll top
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  //when the scroll is greater than 200 viewport height, add the scroll-header class tag
  if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
  else scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll',scrollTop)

//dark theme

const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = "ri-contrast-2-line" 


//previously selcted topic if user selected
const selectedTheme = localStorage.getItem('slected-theme')
const selectedIcon = localStorage.getItem('slected-icon')

//we obtain the current theme that the interface has by validating the dark-theme click

const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)? 'bx-moon':'bx-sun'

//validate if the user previously choose a topic
if (selectedTheme){
document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme)
document.body.classList[selectedIcon === 'bx-moon'? 'add':'remove'](iconTheme)
}

//the validation is fulfilled, we ask the issue was to know if we activate or deactivate the dark


//activate and deactivate the theme manually with the butto 

themeButton.addEventListener("click",()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //we save the themeand the 
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})
window.addEventListener('load', () => {
const sr = ScrollReveal({
  origin:'top',
  distance: '30px',
  duration:2000,
  reset: true
});
sr.reveal(`.home__data, .home__img,
  .about__data, .about__img,
   .service__content,.menu__content,
   .app__data,.app__container, 
   .contact__data, .contact__button, 
   .footer__content`,{
  interval:200
})
})