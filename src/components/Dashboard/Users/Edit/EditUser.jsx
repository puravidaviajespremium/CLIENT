import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput, SaveButton } from "react-admin";
import '../Create/createUser.css'
import EditNote from '@mui/icons-material/EditNote';


const EditUser = (props) => {
    return (
        <Edit {...props} 
        className='createContainer' >
            <h1 className='titleForm'>Modificar usuario</h1>
            <SimpleForm 
            toolbar={false} >
                <TextInput 
                disabled 
                source="id" label="ID" />
                <div className='containerInputs'>
                <TextInput 
                source="firstName" 
                label="Nombres" />
                <TextInput 
                source="lastName" 
                label="Apellidos" />
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
                label= "Tipo"
                choices={[
                    { id: 'Colaborador', name: 'Colaborador' },
                    { id: 'Administrador', name: 'Administrador' },
                ]} />
                <div className='containerButtonSave'>
                    <SaveButton 
                    label="Modificar" 
                    icon={<EditNote />}
                    type="button" 
                    />
                </div>
            </SimpleForm>
        </Edit>
    )
}

export default EditUser;