window.onscroll = () => {
    let scroll = window.scrollY;
    const headerScroll = document.querySelector('.header-scroll');

    if (scroll > 310) {
        headerScroll.classList.add('activo');
    } else {
        headerScroll.classList.remove('activo');
    }
}