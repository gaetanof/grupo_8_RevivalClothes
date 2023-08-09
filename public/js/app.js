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

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready);
// } else {
//     ready();
// }

/* Remover productos del carrito */
// function ready() {
//     const removeCartButtons = document.getElementsByClassName('cart-remove');
//     for (let i = 0; i < removeCartButtons.length; i++) {
//         const button = removeCartButtons[i];
//         button.addEventListener('click', removeCartItem)
//     }
//     /* Cambios en la cantidad de items */
//     let quantityInputs = document.getElementsByClassName('cart-quantity');
//     for (let i = 0; i < quantityInputs.length; i++) {
//         let input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged)
//     }
//     /* Añadir al carrito */
//     const addCart = document.getElementsByClassName('add-cart')

//     for (let i = 0; i < addCart.length; i++) {
//         const button = addCart[i];
//         button.addEventListener('click', addCartCliked);
//     }

//     /* Boton de comprar */
//     document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)

//     updateTotal();
// }

/* Lógica del boton de comprar */
// function buyButtonClicked() {
//     alert("Compra realizada!");
//     const cartContent = document.getElementsByClassName('cart-content')[0];
//     while (cartContent.hasChildNodes()) {
//         cartContent.removeChild(cartContent.firstChild)
//     }
//     updateTotal();
// }

function buyButtonClicked() {
    window.location.href = '/cart/1/detail';
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
// function addCartCliked(event) {
//     const button = event.target;
//     const shopProducts = button.parentElement;
//     let id = shopProducts.id;
//     let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//     let price = shopProducts.getElementsByClassName('price')[0].innerText;
//     let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
//     let cartId = document.querySelector()

//     // fetch(`http://localhost:5001/cart/${cartId}/detail`)
//     // .then(function(respose){
//     //     return response.json()
//     // })
//     // .then(function(data){
//     //     console.log(data)
//     // })

//     if (!localStorage.getItem("idProduct")) {
//         localStorage.setItem("idProduct", id);
//     } else {
//         id = localStorage.getItem("idProduct");
//     }

//     if (!localStorage.getItem("title")) {
//         localStorage.setItem("title", title);
//     } else {
//         title = localStorage.getItem("title");
//     }
    
//     if (!localStorage.getItem("price")) {
//         localStorage.setItem("price", price);
//     } else {
//         price = localStorage.getItem("price");
//     }

//     if (!localStorage.getItem("productImg")) {
//         localStorage.setItem("productImg", productImg);
//     } else {
//         productImg = localStorage.getItem("productImg");
//     }

//     addProductToCart(title, price, productImg, id);
//     updateTotal();
// }

function addProductToCart(title, price, productImg, id) {
    const cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    const cartItems = document.getElementsByClassName('cart-content')[0];
    const cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    const formCarrito = document.querySelector('#form-carrito')

    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title)
            alert("¡Ya has añadido este producto al carrito!");
    }
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
    Toastify({
        text: "Producto añadido al carrito ",
        duration: 2000,
        className: 'info',
        close: true,
        offset: { y: '3em' },
        gravity: "top",
        stopOnFocus: true,
        style: { cursor: "pointer" },
        onClick: () => { cart.classList.add("active") }
    }).showToast();

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
function productsInCart(){
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0
}

window.addEventListener('load', function(){
//llamo a todos los botones para agregar producto al carrito
    let addToCartButtons = document.querySelectorAll(".add-to-cart")
    let cartNumber = document.querySelector("#cart-number")
//ejecuto la funcion para que me diga cuatos productos tengo en el carrito
    cartNumber.innerText = productsInCart()
    
    addToCartButtons.forEach((button) => {
        //escuchar click
        button.addEventListener("click",(e) => {

            const article = button.closest(".product-box-productlist")
            const productId = article.getAttribute("id")
            
            if(localStorage.cart){

                let cart = JSON.parse(localStorage.cart)
                // esta formula me da -1 si el producto ya existe y 0 si no existe el producto en cuestion en el local storage
                let index = cart.findIndex(
                (prod) => (prod.id_product == productId ));
                // aca uso el valor que me da esta formula que aplique para saber si tengo que agregar un objeto nuevo o si solo tengo que modificar el quantity
                if(index != -1){
                    cart[index].quantity++
                }else{
                    // como no existe ese determinado producto agrego id y cantidad
                    cart.push({id_product: productId, quantity: 1 })
                }                
                localStorage.setItem('cart',JSON.stringify(cart))
            
            } else{
                localStorage.setItem('cart',JSON.stringify([{id_product: productId, quantity: 1 }]))
            
            }
            //notificar al ususario que se agrego el producto al carrito
            Toastify({
                text: "Producto añadido al carrito ",
                duration: 2000,
                className: 'info',
                close: true,
                offset: { y: '3em' },
                gravity: "top",
                stopOnFocus: true,
                style: { cursor: "pointer" },
                onClick: () => { cart.classList.add("active") }
            }).showToast()
        })
    })
})