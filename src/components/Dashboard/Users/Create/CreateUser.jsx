import { Create, SimpleForm, TextInput, SelectInput ,  Toolbar, SaveButton } from 'react-admin';
import validateUserCreation from './validate';
import './createUser.css'

const CreateUser = (props) => {
    return (
        <Create {...props} className='createContainer'>
            <h1 className='titleForm'>Crear usuario</h1>
            <SimpleForm toolbar={false} validate={validateUserCreation}>
                <div className='containerInputs'>
                    <TextInput source="firstName" label="Nombres"  />
                    <TextInput source="lastName" label="Apellidos" />
                </div>
                <div className='containerInputs'>
                    <TextInput source="email" label="Correo Electrónico" />
                    <TextInput source="telephone" label="Celular" />
                </div>
                <div className='containerInputs'>
                    <SelectInput source="userStatus" label="Tipo" choices={[
                        { id: 'Administrador', name: 'Administrador' },
                        { id: 'Colaborador', name: 'Colaborador' }
                    ]}/>
                </div>
                <div className='containerButtonSave'>
                    <SaveButton label="Guardar"/>
                </div>
            </SimpleForm>
        </Create>
    )
}

export default CreateUser;