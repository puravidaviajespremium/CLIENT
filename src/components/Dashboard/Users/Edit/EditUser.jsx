import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput, SaveButton } from "react-admin";
import validateUserCreation from "../Create/validate";

const EditUser = (props) => {
    return (
        <Edit {...props} 
        className='createContainer' >
            <h1 className='titleForm'>Modificar usuario</h1>
            <SimpleForm 
            toolbar={false}
            validate={validateUserCreation} >
                <TextInput 
                disabled 
                source="id" label="ID" />
                <div className='containerInputs'>
                <TextInput 
                source="firstName" 
                label="Nombre" />
                <TextInput 
                source="lastName" 
                label="Apellido" />
                </div>
                <div className='containerInputs'>
                <TextInput 
                source="email" 
                label="Correo Electrónico" />
                <TextInput 
                source="telephone" 
                label="Teléfono"/>
                </div>
                <BooleanInput 
                source="isBlocked" 
                label="Bloqueado" />
                <SelectInput 
                source="userStatus" 
                label= "Tipo de usuario"
                choices={[
                    { id: 'Colaborador', name: 'Colaborador' },
                    { id: 'Administrador', name: 'Administrador' },
                ]} />
                <div className='containerButtonSave'>
                    <SaveButton 
                    label="Guardar cambios" 
                    type="button" 
                    />
                </div>
            </SimpleForm>
        </Edit>
    )
}

export default EditUser;