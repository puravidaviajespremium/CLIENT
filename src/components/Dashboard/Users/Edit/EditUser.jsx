import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput, SaveButton } from "react-admin";
import validateUserCreation from "../Create/validate";
import BackButton from "../../utils/BackButton";

const EditUser = (props) => {
    return (
         <Edit {...props} 
        className='createContainer' >
            <SimpleForm 
            toolbar={false}
            validate={validateUserCreation} >
            <h1 className='titleForm'>Modificar usuario</h1>
                <TextInput 
                disabled 
                source="id" label="ID" className='inputContent'/>
                <div className='containerInputs'>
                    <TextInput 
                    source="firstName" 
                    label="Nombre" className='inputContent'/>
                    <TextInput 
                    source="lastName" 
                    label="Apellido" className='inputContent'/>
                </div>
                <div className='containerInputs'>
                    <TextInput 
                    source="email" 
                    label="Correo Electrónico" className='inputContent'/>
                    <TextInput 
                    source="telephone" 
                    label="Teléfono" className='inputContent'/>
                </div>
                <BooleanInput 
                source="isBlocked" 
                label="Bloqueado" />
                <SelectInput 
                source="userStatus" 
                label= "Tipo de usuario"
                className='inputContent'
                choices={[
                    { id: 'Colaborador', name: 'Colaborador' },
                    { id: 'Administrador', name: 'Administrador' },
                ]} />
                <div className='containerButtonSave'>
                    <div>
                        <SaveButton 
                            label="Guardar cambios" 
                            type="button" 
                        />
                    </div>
                    <div>
                        <BackButton/>
                    </div>
                    
                </div>
            </SimpleForm>
        </Edit>
    )
}
export default EditUser;