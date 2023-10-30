import { Edit, SimpleForm, TextInput, SelectInput, SaveButton } from "react-admin";
import validateEditClient from "./validateEdit";

const EditClient = (props) => {
    return (
        <Edit {...props} className="createContainer">
            <h1 className="titleForm">Modificar Cliente</h1>
            <SimpleForm toolbar={false} validate={validateEditClient}>
                <TextInput disabled source="id" label="ID" />
                <div className="containerInputs">
                    <TextInput source="firstName" label="Nombre" />
                    <TextInput source="lastName" label="Apellido" />
                </div>
                <div className="containerInputs">
                    <TextInput source="email" label="Correo Electrónico" />
                    <TextInput source="telephone" label="Teléfono" />
                </div>
                <TextInput source="countryOrigin" label="País de Origen" />
                <div className="containerInputs">
                    <SelectInput
                        source="membershipStatus"
                        label="Estado de Membresía"
                        choices={[
                            { id: "Plata", name: "Plata" },
                            { id: "Dorado", name: "Dorado" },
                            { id: "Diamante", name: "Diamante" },
                        ]}
                    />
                    <SelectInput
                        source="contactStatus"
                        label="Estado de Contacto"
                        choices={[
                            { id: "Prospecto", name: "Prospecto" },
                            { id: "Contactado", name: "Contactado" },
                            { id: "En espera", name: "En espera" },
                            { id: "Ganado", name: "Ganado" },
                            { id: "Perdido", name: "Perdido" },
                        ]}
                    />
                </div>
                <div className="containerButtonSave">
                    <SaveButton label="Guardar cambios" type="button" />
                </div>
            </SimpleForm>
        </Edit>
    );
};

export default EditClient;