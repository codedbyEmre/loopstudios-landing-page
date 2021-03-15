const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger-menu');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});