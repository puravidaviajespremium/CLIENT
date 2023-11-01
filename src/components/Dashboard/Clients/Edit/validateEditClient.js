const validateEditClient = (values) => {
    const regexPhone = /^\d{1,4}?\s?\d{6,14}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const errors = {};
    if (!values.firstName || values.firstName.length < 2) errors.firstName = 'Nombre inválido';
    if (!values.lastName || values.lastName.length < 1) errors.lastName = 'Apellido inválido';
    if (!values.email) errors.email = 'El correo electrónico es requerido';
    if (!values.telephone) errors.telephone = 'El teléfono es requerido';
    if (!values.membershipStatus) errors.membershipStatus = 'El estado de membresía es requerido';
    if (!values.contactStatus) errors.contactStatus = 'El estado de contacto es requerido';

    if (values.telephone && !regexPhone.test(values.telephone)) {
        errors.telephone = 'Número de teléfono inválido';
    }
    if (values.email && !regexEmail.test(values.email)) {
        errors.email = 'Correo electrónico inválido';
    }

    return errors;
}

export default validateEditClient;