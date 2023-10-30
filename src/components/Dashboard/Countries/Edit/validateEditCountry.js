const validateEditCountry = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'El nombre es requerido';
    else if (values.name.length < 3 || values.name.length > 20) errors.name = 'El nombre debe tener entre 3 y 20 caracteres';

    if (!values.image) errors.image = 'La imagen es requerida';

    if (!values.description) errors.description = 'La descripción es requerida';
    else if (values.description.length < 20 || values.description.length > 500) errors.description = 'La descripción debe tener entre 20 y 500 caracteres';

    if (!values.experiences) errors.experiences = 'Incluya al menos una experiencia';

    if (!values.continent) errors.continent = 'El continente es requerido';

    if (values.destinies && values.destinies.length > 4) errors.destinies = "Sólo se puede agregar 4 destinos";

    if (values.destinies) {
        values.destinies.forEach((destiny, index) => {
            if (!destiny.name) errors[`destinies[${index}].name`] = 'El nombre es requerido';
            else if (destiny.name.length < 2 || destiny.name.length > 20) errors[`destinies[${index}].name`] = 'El nombre debe tener entre 2 y 20 caracteres';

            if (!destiny.image) errors[`destinies[${index}].image`] = 'La imagen es requerida';

            if (!destiny.description) errors[`destinies[${index}].description`] = 'La descripción es requerida';
            else if (destiny.description.length < 20 || destiny.description.length > 500) errors[`destinies[${index}].description`] = 'La descripción debe tener entre 20 y 500 caracteres';
        });
    }

    return errors;
}

export default validateEditCountry;