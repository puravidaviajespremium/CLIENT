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
                    <TextInput source="firstName" label="Nombres"  className='inputContent'/>
                    <TextInput source="lastName" label="Apellidos" className='inputContent'/>
                </div>
                <div className='containerInputs'>
                    <TextInput source="email" label="Correo Electrónico" className='inputContent'/>
                    <TextInput source="telephone" label="Celular" className='inputContent'/>
                </div>
                <div className='containerInputs'>
                    <SelectInput source="userStatus" label="Tipo" className='inputContent' choices={[
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