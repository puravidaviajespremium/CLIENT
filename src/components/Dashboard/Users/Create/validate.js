const validateUserCreation = (values) => {
    console.log("values", values)
    const regexTelephone = /^[+]?\d+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3}$/;

    const errors = {};
    //Campos requeridos
    if (!values.firstName)  errors.firstName = 'Campo requerido';
    if (!values.lastName) errors.lastName = 'Campo requerido';
    if (!values.email) errors.email = 'Campo requerido';
    if (!values.telephone) errors.telephone = 'Campo requerido';
    if (!values.userStatus) errors.userStatus = 'Campo requerido';

    if (values.telephone) {
        if(!regexTelephone.test(values.telephone)) errors.telephone = 'Ingrese sólo números';
    }
    if (values.email) {
        if(!regexEmail.test(values.email)) errors.email = 'Ingrese un correo válido';
    }

    return errors;
}

export default validateUserCreation;