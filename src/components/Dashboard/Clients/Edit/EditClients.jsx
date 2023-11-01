import { Edit, SimpleForm, TextInput, SelectInput, SaveButton, ReferenceInput } from "react-admin";
import validateEditClient from "./validateEditClient";
import BackButton from "../../utils/BackButton";

const EditClient = (props) => {
    return (
        <Edit {...props} className="createContainer">
            <SimpleForm toolbar={false} validate={validateEditClient}>
                <h1 className="titleForm">Modificar Cliente</h1>
                <TextInput disabled source="id" label="ID" className='inputContent' />
                <div className="containerInputs">
                    <TextInput source="firstName" label="Nombre" className='inputContent' />
                    <TextInput source="lastName" label="Apellido" className='inputContent' />
                </div>
                <div className="containerInputs">
                    <TextInput source="email" label="Correo Electrónico" className='inputContent'/>
                    <TextInput source="telephone" label="Teléfono" className='inputContent'/>
                    <TextInput source="countryOrigin" label="País de Origen" className='inputContent'/>
                </div>

                <ReferenceInput label="Colaborador" source="UserId" reference="users" perPage={100}>
                    <SelectInput label="Colaborador" optionText={(choice) => `${choice.firstName} ${choice.lastName}`} />
                </ReferenceInput>
                  
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
                    <div>
                        <SaveButton label="Guardar cambios" type="button" />
                    </div>
                    <div>
                        <BackButton />
                    </div>
                </div>
            </SimpleForm>
        </Edit>
    );
};

export default EditClient;