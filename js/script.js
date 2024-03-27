const navBar = document.getElementById('nav-bar');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
        navBar.classList.add('active')
})
close.addEventListener('click', () => {
        navBar.classList.remove('active')
})



