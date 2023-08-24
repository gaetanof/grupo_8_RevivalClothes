/* Carrito */

let cartIcon = document.querySelector('.carrito-button-logic');
let cart = document.querySelector('.cart-container-logic');
let closeCart = document.querySelector('.close-cart-logic');

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
    const addCart = document.getElementsByClassName('add-to-cart')

    for (let i = 0; i < addCart.length; i++) {
        const button = addCart[i];
        button.addEventListener('click', addCartCliked);
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
    const shopProducts = button.parentElement.parentElement;
    let id = shopProducts.id;
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    addProductToCart(title, price, productImg, id);
    updateTotal();
}

let lastClickTime = 0;

function addProductToCart(title, price, productImg, id) {
    const currentTime = Date.now();

    const cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    const cartItems = document.getElementsByClassName('cart-content')[0];
    const cartItemsNames = cartItems.getElementsByClassName('cart-product-title')

    // for (let i = 0; i < cartItemsNames.length; i++) {
    //     if (cartItemsNames[i].innerText == title)
    //         alert("¡Ya has añadido este producto al carrito!");
    // }
    const cartBoxContent = `
                                    <img src="${productImg}" alt="" class="cart-img">
                                    <div class="detail-box">
                                        <div class="cart-product-title" name="title">${title}</div>
                                        <div class="cart-price">${price}</div>
                                        <input type="number" class="cart-quantity" value="1">
                                    </div>
                                    <img src="/images/trash.svg" class="cart-remove">`
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updateTotal();
    if (currentTime - lastClickTime >= 10001) {
        lastClickTime = currentTime;
        Toastify({
            text: "¡Producto añadido al carrito. Ve a verlo ahora!",
            duration: 10000,
            className: 'info',
            close: true,
            onClick: () => { cart.classList.add("active") }
        }).showToast();
    } 

    if (cartItems) {
        const inputQuantity = document.querySelector(".cart-quantity")
        let value = inputQuantity.value
        localStorage.setItem("quantity", value)
        inputQuantity.onchange = (e) => {
            value = e.target.value
            localStorage.setItem("quantity", value)
            console.log(localStorage.getItem("quantity"))
            
        }
        console.log(localStorage.getItem("quantity"))
    }
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