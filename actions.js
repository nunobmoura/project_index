function navSlide() {
    const menu = document.querySelector('.profile');
    const nav = document.querySelector('.menu-mobile');

    menu.addEventListener('click', function() {
        nav.classList.toggle('menu-active')
    });
}

navSlide();
