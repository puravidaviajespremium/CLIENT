
const validateCreation = (values) => {
    const regexTelephone = /^\d{1,4}?\s?\d{6,14}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3}$/;

    const errors = {};
    //Campos requeridos
    if (!values.firstName)  errors.firstName = 'Campo requerido';
    if (!values.lastName) errors.lastName = 'Campo requerido';
    if (!values.email) errors.email = 'Campo requerido';
    if (!values.telephone) errors.telephone = 'Campo requerido';
    if (!values.countryOrigin) errors.countryOrigin = 'Campo requerido';

    if (values.telephone) {
        if(!regexTelephone.test(values.telephone)) errors.telephone = 'Ingrese un celular válido';
    }
    if (values.email) {
        if(!regexEmail.test(values.email)) errors.email = 'Ingrese un correo válido';
    }

    return errors;
}

export default validateCreation ;