import { Create, SimpleForm, TextInput, SelectInput} from 'react-admin';
import validateUserCreation from './validate';
import MyToolbar from '../../utils/MyToolbar';

const CreateUser = (props) => {

    return (
        <>
        <Create {...props} className='createContainer'>
            <SimpleForm 
            toolbar={<MyToolbar modalContent="Usuario creado satisfactoriamente"/>} 
            validate={validateUserCreation}
            >
                <h1 className='titleForm'>Crear usuario</h1>
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
            </SimpleForm>
        </Create>
        </>
    )
}

export default CreateUser;