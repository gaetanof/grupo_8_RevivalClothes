window.addEventListener("load", () => {

    //VALIDACIONES SIGNIN
    // validacion nombre
    const formularioSignIn = document.querySelector(".formulario-signin")
    const fullName = formularioSignIn.querySelector(".formulario-signin-fullName")
    fullName.oninput = (e) => {
        const error = formularioSignIn.querySelector(".error-fullName")
        const input = e.target.value
        if (input.length <= 2) {
            error.classList.add("error-style")
            error.innerText = "El nombre debe tener al menos 3 caracteres"
        } else {
            error.classList.remove("error-style")
            error.innerText = ""
        }
    }
    // validacion email
    const email = formularioSignIn.querySelector(".formulario-signin-email")

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    email.oninput = (e) => {
        const error = formularioSignIn.querySelector(".error-email")
        const input = e.target.value
        if (!emailPattern.test(input)) {
            error.classList.add("error-style")
            error.innerText = "El email debe ser valido"
        } else {
            error.classList.remove("error-style")
            error.innerText = ""
        }

    }

    // validacion username
    const username = formularioSignIn.querySelector(".formulario-signin-username")

    username.oninput = (e) => {
        const input = e.target.value;
        const error = formularioSignIn.querySelector(".error-username");
        if (input.length <= 2) {
            error.classList.add("error-style");
            error.innerText = "El nombre debe tener al menos 3 caracteres"
        } else {
            error.classList.remove("error-style");
            error.innerText = ""
        }
    }

    // validacion imagen
    const imageInput = formularioSignIn.querySelector(".formulario-signin-image");
    const imageError = formularioSignIn.querySelector(".error-image");

    imageInput.onchange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);

        if (!file) {
            imageError.classList.add("error-style");
            imageError.innerText = "Debes seleccionar una imagen";
        } else {
            const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            const isImageValid = allowedExtensions.test(file.name);

            if (!isImageValid) {
                imageError.classList.add("error-style");
                imageError.innerText = "Formato de imagen inválido (JPG, JPEG, PNG, GIF)";
                formularioSignIn
            } else {
                imageError.classList.remove("error-style");
                imageError.innerText = "";
            }
        }
    }

    // Validacion password 
    const password = formularioSignIn.querySelector('.formulario-signin-password');
    password.oninput = (e) => {
        const error = formularioSignIn.querySelector(".error-password");
        var patron = /^(?=.*[A-Z])(?=.*\d).+$/;

        if (!patron.test(e.target.value)) {
            error.innerText = "La contraseña debe contener al menos una letra mayúscula y al menos un número.";
            error.classList.add("error-style");
        } else {
            error.classList.remove("error-style");
            error.innerText = "";
        }
    }

    formularioSignIn.onsubmit = (e) => {
        console.log(formularioSignIn.querySelector('.error-style'));
        if (formularioSignIn.querySelector('.error-style') !== null) {
            e.preventDefault();
        }
    }

})


