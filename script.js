const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

const burgerClick = ()=>{
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('nav--active');
};

hamburger.addEventListener("click",burgerClick,false);

const list = document.querySelectorAll('.menu-each-element');

const menuHide = () => {
    if(hamburger.classList.contains('hamburger--active') &&
    !menu.classList.contains('nav--active')){
        hamburger.classList.remove('hamburger--active');
        menu.classList.add('nav--active');
    }
}

list.forEach(e => e.addEventListener("click", menuHide))

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
  
  function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const targetOffsetTop = targetSection.offsetTop - headerOffset;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  }