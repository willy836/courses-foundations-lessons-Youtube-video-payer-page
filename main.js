const navMenu = document.querySelector('.navbar-menu');
const sidebar = document.querySelector('.sidebar');
const container =document.querySelector('.container');

navMenu.addEventListener('click', collapseNavmenu);

function collapseNavmenu() {
    sidebar.classList.toggle('disappear');
    container.classList.toggle('large-container')
}