const validateCountryCreation = (values) => {
    const errors = {};
    //Campos requeridos
    if (!values.name)  errors.name = 'Campo requerido';
    if (!values.image) errors.image = 'Campo requerido';
    if (!values.description) errors.description = 'Campo requerido';
    if (!values.experiences) errors.experiences = 'Campo requerido';
    if (!values.continent) errors.continent = 'Campo requerido';
    if(values.destinies.length > 4) errors.destinies= "Sólo puede agregar 4 destinos";

    if(values.description.length < 20) errors.description = "Error en la cantidad de caracteres";
    if(values.description.length > 500) errors.description = "Error en la cantidad de caracteres";
    return errors;
}

export default validateCountryCreation;