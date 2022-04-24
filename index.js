// Loading page
window.onload = function(){
    let loadingBox = document.getElementById('contenedor-carga');

    loadingBox.style.visibility = 'hidden';
    loadingBox.style.opacity = '0';
}

// Cart nav
const cart = document.getElementById('icon-shop');
const cartMenu = document.getElementById('carrito-compras');

cart.addEventListener('click', ()=>{
    cartMenu.classList.toggle('carrito-compras--show')
    menu.classList.toggle('menu--hidde');
});

// Menu nav
const menu = document.getElementById('menu');
const mainMenu = document.getElementById('main-menu');

menu.addEventListener('click', ()=>{
    mainMenu.classList.toggle('main-menu--show');
});


