
  
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-link, .button-menu-mobile');
    const backdrop = document.querySelector('.backdrop');
    const menuMobile = document.querySelector('.menu-mobile');
    const menuButton = document.querySelector('.btn-menu');
       links.forEach(function(link) {
        link.addEventListener('click', function(event) {
                      menuMobile.classList.remove('is-open');
            backdrop.classList.remove('is-open');
        });
    });
        menuButton.addEventListener('click', function() {
        const isOpen = menuMobile.classList.contains('is-open');
        if (isOpen) {
            menuMobile.classList.remove('is-open');
            backdrop.classList.remove('is-open');
        } else {
            menuMobile.classList.add('is-open');
            backdrop.classList.add('is-open');
        }
    });
      document.querySelector('.btn-close').addEventListener('click', function() {
        menuMobile.classList.remove('is-open');
        backdrop.classList.remove('is-open');
    });
});