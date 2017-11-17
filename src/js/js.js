
var iconMobile = document.querySelector('.js-toogle-menu-mobile');
var header = document.querySelector('header');


iconMobile.addEventListener('click', function() {
    header.classList.toggle('toogle');
});