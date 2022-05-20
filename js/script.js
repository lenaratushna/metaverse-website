const menuBtn = document.querySelector('.header__menu_burger');
const menu = document.querySelector('.header__menu');
const heroContent = document.querySelector('.hero__content');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    heroContent.classList.toggle('active');
});