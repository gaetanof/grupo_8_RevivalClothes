window.addEventListener("DOMContentLoaded", () => {
    //VALIDACIONES PRODUCTS
    // validacion nombre
    const formularioProducts = document.querySelector(".formulario-product")
    const productName = formularioProducts.querySelector(".formulario-product-name")
    productName.oninput = (e) => {
        const error = formularioProducts.querySelector(".error-productName")
        const input = e.target.value
        if (input.length <= 5) {
            error.classList.add("error-style")
            error.innerText = "El nombre del producto debe tener al menos 5 caracteres"
        } else {
            error.classList.remove("error-style")
            error.innerText = ""
        }
    }

    // validacion imagen
    const imageInput = formularioProducts.querySelector(".formulario-product-image");
    const imageError = formularioProducts.querySelector(".error-productImage");

    imageInput.onchange = (e) => {
        const file = e.target.files[0];
        console.log(file)

        if (!file) {
            imageError.classList.add("error-style");
            imageError.innerText = "Debes seleccionar una imagen";
        } else {
            const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            const isImageValid = allowedExtensions.test(file.name);
           


            if (!isImageValid) {
                imageError.classList.add("error-style");
                imageError.innerText = "Formato de imagen inválido (JPG, JPEG, PNG, GIF)";
            } else {
                imageError.classList.remove("error-style");
                imageError.innerText = "";
            }
        }
    }

    //validacion descripcion
const productDescription = formularioProducts.querySelector(".formulario-product-description")
productDescription.oninput = (e) => {
    const error = formularioProducts.querySelector(".error-productDescription")
    const input = e.target.value
    if (input.length <= 20) {
        error.classList.add("error-style")
        error.innerText = "La descripcion del producto debe tener minimo 20 caracteres"
    } else {
        error.classList.remove("error-style")
        error.innerText = ""
    }
}
formularioProducts.onsubmit = (e) => {
    console.log(formularioProducts.querySelector('.error-style'));
    if (formularioProducts.querySelector('.error-style') !== null) {
        e.preventDefault();
    }
}

})