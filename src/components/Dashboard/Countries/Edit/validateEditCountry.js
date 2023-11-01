const validateEditCountry = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'El nombre es requerido';
    else if (values.name.length < 3 || values.name.length > 20) errors.name = 'El nombre debe tener entre 3 y 20 caracteres';

    if (!values.image) errors.image = 'La imagen es requerida';

    if (!values.description) errors.description = 'La descripción es requerida';
    else if (values.description.length < 20 || values.description.length > 500) errors.description = 'La descripción debe tener entre 20 y 500 caracteres';

    if (!values.experiences) errors.experiences = 'Incluya al menos una experiencia';

    if (!values.continent) errors.continent = 'El continente es requerido';

    if (values.Destinies && values.Destinies.length > 4) {
        errors.Destinies = { _error: "Sólo se puede agregar 4 destinos" };
    }

    if (values.Destinies) {
        errors.Destinies = []; 
        values.Destinies.forEach((destiny, index) => {
            const destinyErrors = {};

            if (!destiny.name) {
                destinyErrors.name = 'El nombre es requerido';
            } else if (destiny.name.length < 2 || destiny.name.length > 50) {
                destinyErrors.name = 'El nombre debe tener entre 2 y 50 caracteres';
            }

            if (!destiny.image) {
                destinyErrors.image = 'La imagen es requerida';
            }

            if (!destiny.description) {
                destinyErrors.description = 'La descripción es requerida';
            } else if (destiny.description.length < 20 || destiny.description.length > 500) {
                destinyErrors.description = 'La descripción debe tener entre 20 y 500 caracteres';
            }

            if (Object.keys(destinyErrors).length > 0) {
                errors.Destinies[index] = destinyErrors;
            }
        });
    }
    console.log("Errors: ", errors);
    return errors;
}

export default validateEditCountry;