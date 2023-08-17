window.addEventListener("load",()=>{

    //VALIDACIONES SIGNIN
    // validacion nombre
    const formularioSignIn = document.querySelector(".formulario-signin")
    const fullName = formularioSignIn.querySelector(".formulario-signin-fullName")
    fullName.oninput = (e) => {
        const error = formularioSignIn.querySelector(".error-fullName")
        const input = e.target.value
        if (input.length <= 2){
            error.classList.add("error-style")
            error.innerText = "El nombre debe tener al menos 3 caracteres"
        } else {
            error.classList.remove
            error.innerText = ""
        }
    }
    // validacion email
    const email = formularioSignIn.querySelector(".formulario-signin-email")
    const error = formularioSignIn.querySelector(".error-email")

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    email.oninput = (e) => {
        const input = e.target.value
        if (!emailPattern.test(input)){
            error.classList.add("error-style")
            error.innerText = "El email debe ser valido"
        }else{
            error.classList.remove
            error.innerText = ""
        }

    }
})


