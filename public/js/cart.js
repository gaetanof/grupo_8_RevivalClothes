function setCarritoVacio() {
	cartRows.innerHTML = `
      <tr>     
          <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
      </tr>            
      `;
}
function vaciarCarrito() {
	localStorage.removeItem("carrito");
}

function calcularTotal(products) {
	return products.reduce(
		(acum, product) => (acum += Number(product.price) * Number(product.quantity)),
		0
	);
}

let cartRows = document.querySelector(".cartRows");

let products = [];

if (localStorage.cart) {
	let cart = JSON.parse(localStorage.cart);
	cart.forEach((el, i) => {
		fetch(`http://localhost:5001/api/${el.id_product}/products`)
			.then((res) => res.json())
			.then((product) => {
				if (product) {
					cartRows.innerHTML += `
					<tr id="row${i}">
						<th scope="row">${i + 1}</th>
						<td>${product.title}</td>
						<td>$${product.price}</td>
						<td class="text-center">${el.quantity}</td>
						<td class="text-center">$${parseFloat(product.price * el.quantity, 2).toFixed(2)}</td>
						<td><button onclick=removeItem(${i})><img src="/images/trash.svg"</td>
					</tr>
					`;
					products.push({
						id: product.id,
						title: product.title,
						price: product.price,
						quantity: el.quantity
					});
				} else {
					cart.splice(i, 1);
					localStorage.setItem('cart', JSON.stringify(cart));
				}
			})
			.then(() => {
				document.querySelector('.totalAmount').innerText = `$ ${calcularTotal(products)}`
			})

	});
}

let checkoutCart = document.querySelector('#checkoutCart');

checkoutCart.onsubmit = (e) => {
	e.preventDefault();
	const formData = {
		cart_id_cart_products: products,
		paymentMethod: checkoutCart.paymentMethod.value,
		shippingMethod: checkoutCart.shippingMethod.value,
		total: calcularTotal(products)
	};
	console.log("data",formData);
	fetch("http://localhost:5001/api/checkout", {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formData)
	})
	.then((res) => res)
	.then((product) => {
		console.log(product);
	})
}
