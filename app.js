const navSlide = () => {
    const burger = document.querySelector( '.burger' );
    const nav = document.querySelector( '.nav-links' );
    const navlinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
    });
}
navSlide();