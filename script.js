function navSlide() {
    var menu = document.querySelector('.profile');
    var nav = document.querySelector('.menu-mobile');

    if(menu && nav) {
        menu.addEventListener('click', function() {
            nav.classList.toggle('menu-active');
        });
    }
}

navSlide();
