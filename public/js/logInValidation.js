window.addEventListener("load", () => {


    // VALIDACIONES LOG IN
    // email
    const formularioLogIn = document.querySelector(".formulario-login")
    const mail = formularioLogIn.querySelector(".formulario-login-email")
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    mail.oninput = (e) => {

        const error = formularioLogIn.querySelector(".error-email")
        const input = e.target.value
        console.log(input)
        if (!emailPattern.test(input)) {
            error.classList.add("error-style")
            error.innerText = "El email debe ser valido"
        } else {
            error.classList.remove("error-style")
            error.innerText = ""
        }
    }
    // validacion password 
    const password = formularioLogIn.querySelector('.formulario-login-password');
    password.oninput = (e) => {
        const error = formularioLogIn.querySelector(".error-password");
        var patron = /^(?=.*[A-Z])(?=.*\d).+$/;

        if (!patron.test(e.target.value)) {
            error.innerText = "Debe ingresar una contraseña.";
            error.classList.add("error-style");
        } else {
            error.classList.remove("error-style");
            error.innerText = "";
        }
    }

    formularioLogIn.onsubmit = (e) => {
        console.log(formularioLogIn.querySelector('.error-style'));
        if (formularioLogIn.querySelector('.error-style') !== null) {
            e.preventDefault();
        }
    }
})