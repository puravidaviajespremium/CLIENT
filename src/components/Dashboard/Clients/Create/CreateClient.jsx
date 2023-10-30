import { Create, SimpleForm, TextInput} from 'react-admin';
import validateCreation  from './validate';
import MyToolbar from '../../utils/MyToolbar';

const CreateClient = (props) => {

    return (
        <>
        <Create {...props} className='createContainer'>
            <SimpleForm 
            toolbar={<MyToolbar modalContent="Cliente creado satisfactoriamente"/>} 
            validate={validateCreation}
            > 
                <h1 className='titleForm'>Crear Cliente</h1>
                <div className='containerInputs'>
                    <TextInput source="firstName" label="Nombres"  />
                    <TextInput source="lastName" label="Apellidos" />
                </div>
                <div className='containerInputs'>
                    <TextInput source="email" label="Correo Electrónico" />
                    <TextInput source="telephone" label="Celular" />
                </div>
                <div className='containerInputs'>
                    <TextInput source="countryOrigin" label="País Origen" />
                </div>
            </SimpleForm>
        </Create>
        </>
    )
}

export default CreateClient;