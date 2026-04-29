document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.menu-overlay');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    const overlayLinks = document.querySelectorAll('.menu-overlay a');
    overlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('open');
            overlay.classList.remove('open');
        });
    });
});