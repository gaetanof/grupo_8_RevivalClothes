/* Carrito */

let cartIcon = document.querySelector('#carrito');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('.close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active")
}

closeCart.onclick = () => {
    cart.classList.remove("active")
}

/* Lógica del carrito */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

/* Remover productos del carrito */
function ready() {
    const removeCartButtons = document.getElementsByClassName('cart-remove');
    for (let i = 0; i < removeCartButtons.length; i++) {
        const button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    /* Cambios en la cantidad de items */
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    /* Añadir al carrito */
    const addCart = document.getElementsByClassName('add-cart')

    for (let i = 0; i < addCart.length; i++) {
        const button = addCart[i];
        button.addEventListener('click', addCartCliked);
    }

    /* Boton de comprar */
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)

    updateTotal();
}

/* Lógica del boton de comprar */
function buyButtonClicked() {
    alert("Compra realizada!");
    const cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal();
}

/* Aunmentar cantidad de elementos */
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

/* Añadir productos al carrito */
function addCartCliked(event) {
    const button = event.target;
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    const price = shopProducts.getElementsByClassName('price')[0].innerText;
    const productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    const cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    const cartItems = document.getElementsByClassName('cart-content')[0];
    const cartItemsNames = cartItems.getElementsByClassName('cart-product-title')

    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title)
            alert("¡Ya has añadido este producto al carrito!");
    }
    const cartBoxContent = `
                                    <img src="${productImg}" alt="" class="cart-img">
                                    <div class="detail-box">
                                        <div class="cart-product-title">${title}</div>
                                        <div class="cart-price">${price}</div>
                                        <input type="number" class="cart-quantity" value="1">
                                    </div>
                                    <img src="/images/trash.svg" class="cart-remove">`
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updateTotal();
    Toastify({
        text: "Producto añadido al carrito ",
        duration: 2000,
        className: 'info',
        close: true,
        offset: { y: '3em' },
        gravity: "top",
        stopOnFocus: true,
        style: { cursor: "pointer" },
        onClick: () => {cart.classList.add("active")}
    }).showToast();
}


/* Actualizar valor del total */
function updateTotal() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total += (price * quantity);
    }
    /* Si el precio tiene centavos entonces> */
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

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