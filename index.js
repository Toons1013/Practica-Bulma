const burgerIcon = document.querySelector('#borga');
const navbarMenu = document.querySelector('#nav-l');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})