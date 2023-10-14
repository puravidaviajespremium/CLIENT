
const validate = (form, property, setErrors, errors) =>{
    //Expresiones regulares
    const regexLetters=/^[a-zA-Z ]+$/;
    const regexNumbers = /^[0-9]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3}$/;

    if(property === "firstName"){
        if(form.firstName === "") setErrors({...errors, firstName:"El nombre es requerido"});
        else if(!regexLetters.test(form.firstName)) setErrors({...errors, firstName:"Ingrese sólo letras"});
        else setErrors({...errors, firstName: ""})
    }
    if(property === "lastName"){
        if(form.lastName === "") setErrors({...errors, lastName:"El apellido es requerido"});
        else if(!regexLetters.test(form.lastName)) setErrors({...errors, lastName:"Ingrese sólo letras"});
        else setErrors({...errors, lastName: ""})
    }
    if(property === "email"){
        if(form.email === "") setErrors({...errors, email:"El correo es requerido"});
        else if(!regexEmail.test(form.email)) setErrors({...errors, email:"El correo es inválido"});
        else setErrors({...errors, email: ""})
    }
    if(property === "telephone"){
        if(form.telephone === "") setErrors({...errors, telephone:"El celular es requerido"});
        else if(!regexNumbers.test(form.telephone)) setErrors({...errors, telephone:"Ingrese sólo números"});
        else setErrors({...errors, telephone: ""})
    }

}

export default validate;