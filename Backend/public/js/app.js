/* Burger menu */

const menu_toggle = document.getElementById('menu-toggle');
const burgermenu = document.getElementById('burgermenu');
const close_menu = document.querySelector('.close-menu');

document.onclick = (e) => {
    if (e.target.id !== 'burgermenu' && e.target.id !== 'menu-toggle') {
        menu_toggle.classList.remove('active')
        burgermenu.classList.remove('active')
    }
}

close_menu.onclick = () => {
    burgermenu.classList.remove('active')
}

menu_toggle.onclick = () => {
    menu_toggle.classList.toggle('active')
    burgermenu.classList.toggle('active')
}


// declaro esta funcion para saber si existe un carrito en local stora y en el caso de que exista que me de su longitud
function productsInCart() {
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0
}

window.addEventListener('load', function () {
    //llamo a todos los botones para agregar producto al carrito
    let addToCartButtons = document.querySelectorAll(".add-to-cart")
    let cartNumber = document.querySelector("#cart-number")
    //ejecuto la funcion para que me diga cuatos productos tengo en el carrito
    cartNumber.innerText = productsInCart()

    addToCartButtons.forEach((button) => {
        //escuchar click
        button.addEventListener("click", (e) => {

            const article = button.closest(".agregar-carrito-producto")
            const productId = article.getAttribute("id")

            if (localStorage.cart) {

                let cart = JSON.parse(localStorage.cart)
                // esta formula me da -1 si el producto ya existe y 0 si no existe el producto en cuestion en el local storage
                let index = cart.findIndex(
                    (prod) => (prod.id_product == productId));
                // aca uso el valor que me da esta formula que aplique para saber si tengo que agregar un objeto nuevo o si solo tengo que modificar el quantity
                if (index != -1) {
                    cart[index].quantity++
                } else {
                    // como no existe ese determinado producto agrego id y cantidad
                    cart.push({ id_product: productId, quantity: 1 })
                }
                localStorage.setItem('cart', JSON.stringify(cart))

            } else {
                localStorage.setItem('cart', JSON.stringify([{ id_product: productId, quantity: 1 }]))

            }
        })
    })
})