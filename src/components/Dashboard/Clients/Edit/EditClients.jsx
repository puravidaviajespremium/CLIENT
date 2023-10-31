import { Edit, SimpleForm, TextInput, SelectInput, SaveButton } from "react-admin";
import validateEditClient from "./validateEditClient";

const EditClient = (props) => {
    return (
        <Edit {...props} className="createContainer">
            <SimpleForm toolbar={false} validate={validateEditClient}>
                <h1 className="titleForm">Modificar Cliente</h1>
                <TextInput disabled source="id" label="ID" className='inputContent'/>
                <div className="containerInputs">
                    <TextInput source="firstName" label="Nombre" className='inputContent'/>
                    <TextInput source="lastName" label="Apellido" className='inputContent'/>
                </div>
                <div className="containerInputs">
                    <TextInput source="email" label="Correo Electrónico" className='inputContent'/>
                    <TextInput source="telephone" label="Teléfono" className='inputContent'/>
                </div>
                <TextInput source="destinationCountry" label="País de destino" className='inputContent'/>
                <div className="containerInputs">
                    <SelectInput
                        source="membershipStatus"
                        label="Estado de Membresía"
                        className='inputContent'
                        choices={[
                            { id: "Plata", name: "Plata" },
                            { id: "Dorado", name: "Dorado" },
                            { id: "Diamante", name: "Diamante" },
                        ]}
                    />
                    <SelectInput
                        source="contactStatus"
                        label="Estado de Contacto"
                        className='inputContent'
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