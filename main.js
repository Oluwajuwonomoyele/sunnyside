// navbar click event
const openNav = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
const closeNav = document.querySelector('.menu-btn i');
const navLink = document.querySelectorAll('.nav-link');

openNav.addEventListener('click', e => {
    menu.classList.toggle('active');
    closeNav.classList.toggle('active');
});

//onclick navlink to close navbar
navLink.forEach( e => {
    e.addEventListener('click', () => {
        menu.classList.remove('active');
        closeNav.classList.remove('active')
    });
});
